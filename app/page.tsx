"use client";

import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Latest Jobs");
  const [desc, setDesc] = useState("");

  const card = {
    background: "#fff",
    borderRadius: 16,
    padding: 14,
    boxShadow: "0 8px 20px rgba(0,0,0,.08)"
  };

  return (
    <main
      style={{
        background: "#EEF4FF",
        minHeight: "100vh",
        fontFamily: "Arial",
        padding: 16
      }}
    >
      <div style={{ maxWidth: 430, margin: "0 auto" }}>

        <div
          style={{
            background: "linear-gradient(135deg,#071A52,#0B63F6)",
            color: "#fff",
            borderRadius: 22,
            padding: 20
          }}
        >
          <div style={{ fontSize: 26, fontWeight: "bold" }}>
            🎓 ShikshaUpdate Admin
          </div>
          <div style={{ opacity: 0.9, marginTop: 6 }}>
            CMS V4 • Mobile Control Center
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            marginTop: 14
          }}
        >
          {[
            ["📝", "Posts"],
            ["🖼", "Banner"],
            ["📄", "PDF"],
            ["📊", "Analytics"]
          ].map(([icon, text]) => (
            <div key={text} style={card}>
              <div style={{ fontSize: 22 }}>{icon}</div>
              <div style={{ fontWeight: "bold", marginTop: 8 }}>
                {text}
              </div>
            </div>
          ))}
        </div>

        <div style={{ ...card, marginTop: 16 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 12
            }}
          >
            Create New Post
          </div>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 12,
              border: "1px solid #D0D7E2",
              marginBottom: 10
            }}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 12,
              border: "1px solid #D0D7E2",
              marginBottom: 10
            }}
          >
            <option>Latest Jobs</option>
            <option>Result</option>
            <option>Admit Card</option>
            <option>Scholarship</option>
            <option>Current Affairs</option>
          </select>

          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={4}
            placeholder="Short Description"
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 12,
              border: "1px solid #D0D7E2",
              marginBottom: 12
            }}
          />

          <button
            style={{
              width: "100%",
              padding: 14,
              border: "none",
              borderRadius: 14,
              background: "#0B63F6",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 16
            }}
          >
            🚀 Publish
          </button>
        </div>

        <div style={{ ...card, marginTop: 16 }}>
          <div
            style={{
              display: "inline-block",
              background: "#E53935",
              color: "#fff",
              padding: "4px 10px",
              borderRadius: 20,
              fontSize: 12
            }}
          >
            LIVE PREVIEW
          </div>

          <div
            style={{
              marginTop: 12,
              borderLeft: "4px solid #0B63F6",
              paddingLeft: 12
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: 20
              }}
            >
              {title || "BPSC TRE 4.0 Notification"}
            </div>

            <div
              style={{
                color: "#0B63F6",
                fontWeight: "bold",
                marginTop: 6
              }}
            >
              {category}
            </div>

            <div
              style={{
                marginTop: 8,
                color: "#444"
              }}
            >
              {desc || "Vacancy • Eligibility • Last Date • Official PDF"}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
