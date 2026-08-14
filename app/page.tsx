import BreakingTicker from "@/components/BreakingTicker";export default function Home() {
  return (
    <>
      <style>{`
        *{box-sizing:border-box}
        body{margin:0;font-family:Arial,sans-serif;background:#f5f7fb}
        @keyframes ticker{
          from{transform:translateX(100%)}
          to{transform:translateX(-100%)}
        }
      `}</style>

      <main>
        {/* Header */}
        <header
          style={{
            background: "linear-gradient(135deg,#071A52,#0B63F6)",
            color: "white",
            padding: "20px",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <h1 style={{ color: "#FFD700", margin: 0 }}>🎓 Siksha Update</h1>
          <p style={{ margin: "6px 0 12px" }}>Fast • Accurate • Trusted</p>

          <input
            placeholder="🔍 Search Jobs, Results, Admit Card..."
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "30px",
              border: "none",
              fontSize: "15px",
            }}
          />
          <NavBar />
<BreakingTicker />
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "10px",
              marginTop: "15px",
              whiteSpace: "nowrap",
            }}
          >
            {[
              "Latest Jobs",
              "Result",
              "Admit Card",
              "Answer Key",
              "Scholarship",
              "Private Jobs",
            ].map((item) => (
              <span
                key={item}
                style={{
                  background: "rgba(255,255,255,.15)",
                  padding: "8px 14px",
                  borderRadius: "20px",
                  fontSize: "14px",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        {/* Breaking News */}
        <div
          style={{
            background: "#E53935",
            color: "white",
            overflow: "hidden",
            whiteSpace: "nowrap",
            padding: "10px 0",
            fontWeight: "bold",
          }}
        >
          <div
            style={{
              display: "inline-block",
              paddingLeft: "100%",
              animation: "ticker 18s linear infinite",
            }}
          >
            🔴 BREAKING: BPSC TRE 4.0 • Bihar Police • KVS Recruitment • Result • Admit Card • Private Teacher Jobs
          </div>
        </div>

        {/* Hero Banner */}
        <div
          style={{
            margin: "15px",
            borderRadius: "18px",
            overflow: "hidden",
            background: "linear-gradient(135deg,#0B63F6,#071A52)",
            color: "white",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200"
            alt="Top News"
            style={{
              width: "100%",
              height: "190px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "16px" }}>
            <span
              style={{
                background: "#E53935",
                padding: "5px 10px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              🔴 TOP NEWS
            </span>

            <h2 style={{ margin: "12px 0 8px" }}>
              Bihar ki Aaj ki Top Education Updates
            </h2>

            <p style={{ margin: 0 }}>
              Government Jobs • Private Jobs • Results • Admit Card
            </p>
          </div>
        </div>

        {/* Top Jobs */}
        <div style={{ padding: "15px" }}>
          <h2>🔥 Top Jobs Today</h2>

          {[
            "BPSC TRE 4.0",
            "KVS Teacher Recruitment",
            "Private School Teacher",
            "Physics Wallah Hiring",
            "Coaching Faculty Jobs",
          ].map((job, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "14px",
                padding: "15px",
                marginTop: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <strong>{job}</strong>
                <span
                  style={{
                    background: "#0B63F6",
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                >
                  NEW
                </span>
              </div>

              <p style={{ color: "#666" }}>
                Vacancy • Eligibility • Last Date
              </p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div style={{ padding: "15px" }}>
          <h2>📚 Categories</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            {[
              "Government Jobs",
              "Private Jobs",
              "Results",
              "Admit Card",
              "Current Affairs",
              "Scholarship",
            ].map((cat) => (
              <div
                key={cat}
                style={{
                  background: "white",
                  padding: "18px",
                  borderRadius: "14px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,.08)",
                }}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="#"
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            background: "#25D366",
            color: "white",
            padding: "14px 18px",
            borderRadius: "40px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 12px rgba(0,0,0,.25)",
          }}
        >
          WhatsApp
        </a>
      </main>
    </>
  );
                  }
