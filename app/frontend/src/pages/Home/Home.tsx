import { useState } from 'react';
import RagChat, { ChatMessage } from '../../components/RagChat';
import RagSidebar from '../../components/RagSidebar';
import styles from './Home.module.css';

// Main Home page: sidebar for PDF, chat for Q&A
export default function Home() {
  // State for indexed file
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // State for chat
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  // Upload PDF handler
  const handleFileChange = async (file: File) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload_pdf", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setFileName(file.name);
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (e) {
      alert("Upload error: " + e);
    }
    setLoading(false);
  };

  // Clear/reset handler
  const handleClear = async () => {
    setLoading(true);
    try {
      await fetch("/api/reset_vectorstore", { method: "POST" });
      setFileName(null);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  // Send chat message handler
  const handleSend = async () => {
    const userMsg = input.trim();
    if (!userMsg) return;
    setMessages((msgs) => [...msgs, { sender: "user", text: userMsg }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMsg }),
      });
      const data = await res.json();
      if (data.answer) {
        setMessages((msgs) => [...msgs, { sender: "ai", text: data.answer }]);
      } else if (data.error) {
        setMessages((msgs) => [...msgs, { sender: "ai", text: `[Error] ${data.error}` }]);
      }
    } catch (e) {
      setMessages((msgs) => [...msgs, { sender: "ai", text: `[Network error] ${e}` }]);
    }
    setLoading(false);
  };

  // Main Content: sidebar left, chat right
  return (
    <div className={styles.container}>
      <div className={styles.homeLayout}>
        <RagSidebar fileName={fileName} onFileChange={handleFileChange} onClear={handleClear} loading={loading} />
        <div className={styles.contentArea}>
          <RagChat
            messages={messages}
            input={input}
            setInput={setInput}
            onSend={handleSend}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

