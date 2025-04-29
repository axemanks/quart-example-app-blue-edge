import React, { useRef, useEffect } from "react";

export interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

interface RagChatProps {
  messages: ChatMessage[];
  input: string;
  setInput: (val: string) => void;
  onSend: () => void;
  loading: boolean;
}

// Chat UI: message bubbles, input box, send button
const RagChat: React.FC<RagChatProps> = ({ messages, input, setInput, onSend, loading }) => {
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ display: "flex", flexDirection: "column", background: "#f6f8fa", height: "100%" }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "stretch",
          padding: 0,
          minWidth: 0,
          minHeight: 0,
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: 0,
            minHeight: 0,
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            padding: 0,
            paddingTop: 20,
          }}
        >
          <div style={{ flex: 1, overflowY: "auto", padding: 32, paddingBottom: 0 }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: 18,
                  marginTop: i === 0 ? 0 : 8,
                }}
              >
                <div
                  style={{
                    background: msg.sender === "user" ? "#cce5ff" : "#e2e3e5",
                    color: "#222",
                    padding: "12px 18px",
                    borderRadius: 20,
                    maxWidth: 480,
                    whiteSpace: "pre-wrap",
                    fontSize: 16,
                    marginTop: 2,
                    boxShadow: msg.sender === "user" ? "0 1px 6px 0 rgba(0,80,200,0.07)" : "0 1px 6px 0 rgba(0,0,0,0.05)",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form
            style={{ display: "flex", padding: 24, borderTop: "1px solid #eee", background: "#fff", borderRadius: "0 0 18px 18px" }}
            onSubmit={e => {
              e.preventDefault();
              if (!loading && input.trim()) onSend();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question..."
              style={{ flex: 1, fontSize: 16, padding: 12, borderRadius: 16, border: "1px solid #ccc", marginRight: 10 }}
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()} style={{ fontSize: 16, padding: "12px 24px", borderRadius: 16 }}>
              {loading ? "..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RagChat;
