export default function Home() {
  return (
    <main>
      <header
        style={{
          background: "#0B63F6",
          color: "white",
          padding: "18px",
        }}
      >
        <h1>🎓 ShikshaUpdate</h1>
        <p>Government Jobs • Private Jobs • Results • Admit Card</p>
      </header>

      <div
        style={{
          background: "#E53935",
          color: "white",
          padding: "10px",
          fontWeight: "bold",
        }}
      >
        🔴 BREAKING: BPSC TRE 4.0 • Railway • SSC • Bihar Jobs • Admit Card • Result
      </div>

      <div style={{ padding: "15px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          <button style={btn}>Govt Jobs</button>
          <button style={btn}>Private Jobs</button>
          <button style={btn}>Results</button>
          <button style={btn}>Admit Card</button>
          <button style={btn}>Answer Key</button>
          <button style={btn}>Scholarship</button>
        </div>

        <h2 style={{ margin: "20px 0 10px" }}>Latest Updates</h2>

        <div className="news-card">
          <h3>BPSC TRE 4.0 Latest Update</h3>
          <p>Notification, seats, eligibility aur important dates.</p>
        </div>

        <div className="news-card">
          <h3>Railway Technician Vacancy</h3>
          <p>Application process aur last date.</p>
        </div>

        <div className="news-card">
          <h3>SSC MTS Recruitment</h3>
          <p>Online form aur eligibility details.</p>
        </div>

        <div className="news-card">
          <h3>Bihar Education News</h3>
          <p>Daily education aur exam updates.</p>
        </div>

        <a
          href="#"
          style={{
            display: "block",
            textAlign: "center",
            background: "#25D366",
            color: "white",
            padding: "14px",
            borderRadius: "10px",
            marginTop: "20px",
            fontWeight: "bold",
          }}
        >
          Join WhatsApp Channel
        </a>
      </div>
    </main>
  );
}

const btn = {
  background: "#0B63F6",
  color: "white",
  border: "none",
  borderRadius: "10px",
  padding: "14px",
  fontWeight: "bold",
};
const card = {
  background:"white",
  padding:"15px",
  borderRadius:"12px",
  marginTop:"12px",
  boxShadow:"0 2px 8px rgba(0,0,0,.08)"
};
