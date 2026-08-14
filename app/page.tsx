"use client";

import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Latest Jobs");
  const [desc, setDesc] = useState("");

  const card = {
    background: "#fff",
    borderRadius: 18,
    padding: 16,
    boxShadow: "0 8px 20px rgba(0,0,0,.08)",
  };

  return (
    <main
      style={{
        background: "#EEF4FF",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <div style={{ display: "flex", maxWidth: 1200, margin: "0 auto" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: 90,
            background: "#071A52",
            minHeight: "100vh",
            color: "#fff",
            paddingTop: 20,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 24 }}>🎓</div>
          <div style={{ marginTop: 25 }}>🏠</div>
          <div style={{ marginTop: 25 }}>📝</div>
          <div style={{ marginTop: 25 }}>🖼️</div>
          <div style={{ marginTop: 25 }}>📄</div>
          <div style={{ marginTop: 25 }}>📊</div>
          <div style={{ marginTop: 25 }}>⚙️</div>
        </aside>

        {/* Main */}
        <div style={{ flex: 1, padding: 18 }}>
          <div
            style={{
              background: "linear-gradient(135deg,#071A52,#0B63F6)",
              color: "#fff",
              borderRadius: 24,
              padding: 22,
            }}
          >
            <h1 style={{ margin: 0 }}>ShikshaUpdate Admin</h1>
            <p style={{ marginTop: 6 }}>
              WordPress Style CMS • Mobile Control Center
            </p>
          </div>

          {/* Dashboard Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 12,
              marginTop: 16,
            }}
          >
            {[
              ["📰", "124 Posts"],
              ["👀", "12.4K Views"],
              ["🔥", "Trending"],
              ["📄", "8 Drafts"],
            ].map(([icon, text]) => (
              <div key={text} style={card}>
                <div style={{ fontSize: 24 }}>{icon}</div>
                <div style={{ marginTop: 8, fontWeight: "bold" }}>{text}</div>
              </div>
            ))}
          </div>

          {/* Editor */}
          <div style={{ ...card, marginTop: 18 }}>
            <h3>Create New Post</h3>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post Title"
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 12,
                border: "1px solid #D0D7E2",
                marginBottom: 10,
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
                marginBottom: 10,
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
              rows={5}
              placeholder="Short Description"
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 12,
                border: "1px solid #D0D7E2",
                marginBottom: 12,
              }}
            />

            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              <button
                style={{
                  flex: 1,
                  padding: 12,
                  background: "#F5C542",
                  border: "none",
                  borderRadius: 12,
                  fontWeight: "bold",
                }}
              >
                🖼 Banner
              </button>

              <button
                style={{
                  flex: 1,
                  padding: 12,
                  background: "#E5E7EB",
                  border: "none",
                  borderRadius: 12,
                  fontWeight: "bold",
                }}
              >
                📄 PDF
              </button>
            </div>

            <button
              style={{
                width: "100%",
                padding: 14,
                background: "#0B63F6",
                color: "#fff",
                border: "none",
                borderRadius: 14,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              🚀 Publish
            </button>
          </div>

          {/* Preview */}
          <div style={{ ...card, marginTop: 18 }}>
            <div
              style={{
                display: "inline-block",
                background: "#E53935",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: 20,
                fontSize: 12,
              }}
            >
              LIVE PREVIEW
            </div>

            <div
              style={{
                marginTop: 14,
                borderLeft: "4px solid #0B63F6",
                paddingLeft: 12,
              }}
            >
              <h2>{title || "BPSC TRE 4.0 Notification"}</h2>
              <div style={{ color: "#0B63F6", fontWeight: "bold" }}>
                {category}
              </div>
              <p>{desc || "Vacancy • Eligibility • Last Date • Official PDF"}</p>
            </div>
          </div>

          {/* Recent Posts */}
          <div style={{ ...card, marginTop: 18 }}>
            <h3>Recent Posts</h3>

            {[
              "BPSC TRE 4.0 Notification",
              "KVS Teacher Recruitment",
              "Bihar Police Vacancy",
            ].map((p) => (
              <div
                key={p}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span>{p}</span>
                <span>✏️ 🗑️</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
