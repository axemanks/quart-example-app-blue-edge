"""
langchain_routes.py
Blueprint for AI agent endpoints using LangChain, in-memory vector store, and optional Tavily web search.
- /api/upload_pdf: Upload and process PDF for RAG
- /api/ask: Ask questions using RAG and/or web search
- /api/reset_vectorstore: Reset the in-memory vector store

All storage is in-memory for demo simplicity. Users must provide their own OpenAI and Tavily API keys per request.
"""

import logging
import os
import tempfile

from dotenv import load_dotenv
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings
from quart import Blueprint, jsonify, request

load_dotenv()
langchain_bp = Blueprint("langchain", __name__)

# Use the main app logger for this blueprint
logger = logging.getLogger("quart_example_app.langchain")


@langchain_bp.record
def on_load(state):
    logger.info("[langchain_bp] Blueprint registered with app.")


# In-memory vector store and docs (resettable)
vectorstore = None
stored_docs = []

openai_api_key = os.environ.get("OPENAI_API_KEY")
if not openai_api_key:
    logger.error("OPENAI_API_KEY not set in environment.")


@langchain_bp.route("/api/upload_pdf", methods=["POST"])
async def upload_pdf():
    """
    Upload a PDF file, process it, and store embeddings in-memory.
    Expects multipart/form-data with a 'file' field.
    Uses OPENAI_API_KEY from environment.
    """
    logger.info("[/api/upload_pdf] hit...")
    files = await request.files
    file = files.get("file")
    if not file:
        logger.warning("Missing file in PDF upload request.")
        return jsonify({"error": "Missing file"}), 400

    # Save PDF to temp file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
        tmp.write(file.read())
        tmp_path = tmp.name

    logger.info("Received PDF upload. Processing...")
    # Load and split PDF
    loader = PyPDFLoader(tmp_path)
    docs = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    splits = text_splitter.split_documents(docs)
    os.remove(tmp_path)

    # Create vector store in-memory
    global vectorstore, stored_docs
    embeddings = OpenAIEmbeddings(openai_api_key=openai_api_key)
    vectorstore = FAISS.from_documents(splits, embeddings)
    stored_docs = splits
    logger.info(f"Uploaded and indexed {len(splits)} chunks from PDF.")

    return jsonify({"message": f"Uploaded and indexed {len(splits)} chunks."})


@langchain_bp.route("/api/ask", methods=["POST"])
async def ask():
    """
    Ask a question using the uploaded PDF (RAG).
    Expects JSON with:
      - question (str)
      - top (optional, int): number of docs to return (default 3)
    Uses OPENAI_API_KEY from environment.
    """
    logger.info("[/api/ask] hit...")
    data = await request.get_json()
    question = data.get("question")
    top = data.get("top", 3)
    try:
        top = int(top)
    except Exception:
        top = 3
    if not question:
        logger.warning("Missing question in ask request.")
        return jsonify({"error": "Missing question"}), 400

    logger.info(f"Received ask request: {question} (top={top})")
    # Retrieve relevant docs from in-memory vectorstore (RAG demo)
    global vectorstore
    if vectorstore is None:
        logger.warning("Ask request received but no PDF uploaded yet.")
        return jsonify({"error": "No PDF uploaded yet."}), 400

    docs_and_scores = vectorstore.similarity_search_with_score(question, k=top)

    results = [
        {"page_content": doc.page_content, "metadata": doc.metadata, "score": float(score)}
        for doc, score in docs_and_scores
    ]
    logger.info(f"Ask request processed, returning {len(results)} results.")

    # Compose context from top results
    if not results:
        logger.warning("No relevant context found for the query.")
        return jsonify({"error": "No relevant context found.", "results": results}), 200

    context = "\n\n".join([r["page_content"] for r in results])
    prompt = f"Answer the following question using only the provided context.\n\nContext:\n{context}\n\nQuestion: {question}\nAnswer:"

    # Get answer from OpenAI
    from langchain_openai import ChatOpenAI
    try:
        llm = ChatOpenAI(openai_api_key=openai_api_key, temperature=0)
        response = llm.invoke(prompt)
        answer = response.content if hasattr(response, "content") else str(response)
    except Exception as e:
        logger.error(f"OpenAI error: {e}")
        return jsonify({"error": f"OpenAI error: {e}", "results": results}), 500

    return jsonify({"answer": answer, "results": results})


@langchain_bp.route("/api/reset_vectorstore", methods=["POST"])
async def reset_vectorstore():
    """
    Reset the in-memory vector store and stored documents.
    """
    logger.info("[/api/reset_vectorstore] hit...")
    global vectorstore, stored_docs
    vectorstore = None
    stored_docs = []
    logger.info("Vector store has been reset.")
    return jsonify({"message": "Vector store has been reset."})
