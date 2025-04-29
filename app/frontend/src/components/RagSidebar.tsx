import React from "react";

interface RagSidebarProps {
  fileName: string | null;
  onFileChange: (file: File) => void;
  onClear: () => void;
  loading: boolean;
}

// Sidebar for file upload, file info, and clear button
const RagSidebar: React.FC<RagSidebarProps> = ({ fileName, onFileChange, onClear, loading }) => {
  return (
    <aside style={{ width: 260, padding: 24, borderRight: "1px solid #eee", background: "#fafbfc", height: "100%", minHeight: 0, boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <h2 style={{ fontSize: 20, marginBottom: 16 }}>Document</h2>
      <input
        type="file"
        accept="application/pdf"
        style={{ display: "block", marginBottom: 12 }}
        onChange={e => {
          if (e.target.files && e.target.files[0]) onFileChange(e.target.files[0]);
        }}
        disabled={loading}
      />
      {fileName ? (
        <>
          <div style={{ marginBottom: 8, color: "#2d2d2d" }}>
            <strong>Indexed:</strong> {fileName}
          </div>
          <button onClick={onClear} disabled={loading} style={{ marginBottom: 12 }}>
            Clear & Upload New
          </button>
        </>
      ) : (
        <div style={{ color: "#888", marginBottom: 8 }}>No file indexed</div>
      )}
      {loading && <div style={{ color: "#888" }}>Uploading...</div>}
    </aside>
  );
};

export default RagSidebar;
