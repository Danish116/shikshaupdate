"use client";

export default function AdminPage() {
  return (
    <main style={{ background: "#EEF3FB", minHeight: "100vh", padding: 20, fontFamily: "Arial" }}>
      <div style={{ maxWidth: 420, margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(135deg,#071A52,#0B63F6)",
            color: "#fff",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <h1>🎓 ShikshaUpdate Admin</h1>
          <p>Phone se website control</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 20 }}>
          {["📝 New Post", "📄 PDF", "🖼 Banner", "📊 Analytics"].map((item) => (
            <div
              key={item}
              style={{
                background: "#fff",
                padding: 16,
                borderRadius: 14,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", padding: 20, borderRadius: 20, marginTop: 20 }}>
          <h3>Create New Post</h3>

          <input
            placeholder="Post Title"
            style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #ddd", marginBottom: 12 }}
          />

          <select
            style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #ddd", marginBottom: 12 }}
          >
            <option>Latest Jobs</option>
            <option>Result</option>
            <option>Admit Card</option>
            <option>Scholarship</option>
            <option>Current Affairs</option>
          </select>

          <textarea
            rows={4}
            placeholder="Short Description"
            style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #ddd", marginBottom: 12 }}
          />

          <button
            style={{
              width: "100%",
              padding: 14,
              border: "none",
              borderRadius: 12,
              background: "#16A34A",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            🚀 Publish (V1)
          </button>
        </div>
      </div>
    </main>
  );
}
