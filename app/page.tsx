export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#EEF4FF",
        fontFamily: "Arial",
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ color: "#0B63F6", fontSize: 36 }}>
          🎓 ShikshaUpdate
        </h1>
        <p>India's Education & Job Updates Platform</p>

        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 20,
            marginTop: 20,
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <h2>BPSC TRE 4.0 Notification</h2>
          <p>Vacancy • Eligibility • Last Date • Official PDF</p>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 20,
            marginTop: 16,
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <h2>KVS Teacher Recruitment</h2>
          <p>Latest Jobs • Result • Admit Card</p>
        </div>
      </div>
    </main>
  );
}
