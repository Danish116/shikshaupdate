"use client";

import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");

  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🎓 ShikshaUpdate Admin</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        style={{ width: "100%", padding: 10, margin: "10px 0" }}
      />

      <button style={{ width: "100%", padding: 12 }}>
        🚀 Publish
      </button>

      <h3>Live Preview</h3>
      <p>{title || "BPSC TRE 4.0 Notification"}</p>
    </main>
  );
}
