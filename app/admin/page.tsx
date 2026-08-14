"use client";

export default function AdminPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#EEF4FF",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial",
      padding: 20
    }}>
      <div style={{
        background: "#fff",
        padding: 24,
        borderRadius: 20,
        width: "100%",
        maxWidth: 380,
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,.12)"
      }}>
        <h1>🎓 ShikshaUpdate Admin</h1>
        <p>CMS V8 • Admin Panel</p>

        <button style={{
          width: "100%",
          padding: 14,
          border: "none",
          borderRadius: 12,
          background: "#0B63F6",
          color: "#fff",
          fontWeight: "bold"
        }}>
          Continue with Google
        </button>
      </div>
    </main>
  );
}
