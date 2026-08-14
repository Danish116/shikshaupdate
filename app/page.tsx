"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const slides = [
    {
      title: "BPSC TRE 4.0 Notification",
      image: "/hero1.svg",
    },
    {
      title: "KVS Teacher Recruitment",
      image: "/hero2.svg",
    },
    {
      title: "Private School Teacher Jobs",
      image: "/hero3.svg",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        body{margin:0;background:#f5f7fb;font-family:Arial,sans-serif}
        @keyframes ticker{
          from{transform:translateX(100%)}
          to{transform:translateX(-100%)}
        }
      `}</style>

      <main>
        <header
          style={{
            background: "linear-gradient(135deg,#071A52,#0B63F6)",
            color: "white",
            padding: "20px",
          }}
        >
          <h1 style={{ color: "#FFD700", margin: 0 }}>🎓 Siksha Update</h1>
          <p>Fast • Accurate • Trusted</p>

          <input
            placeholder="🔍 Search Jobs..."
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "30px",
              border: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "10px",
              marginTop: "15px",
              whiteSpace: "nowrap",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <span style={chipStyle}>🏠 Home</span>
            </Link>

            <Link href="/jobs" style={{ textDecoration: "none" }}>
              <span style={chipStyle}>📢 Jobs</span>
            </Link>

            <span style={chipStyle}>📄 Result</span>
            <span style={chipStyle}>🎫 Admit</span>
            <span style={chipStyle}>🎓 Scholarship</span>
            <span style={chipStyle}>🏫 Private</span>
          </div>
        </header>

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
            🔴 BREAKING: BPSC TRE 4.0 • Bihar Police • KVS • Result • Private Jobs
          </div>
        </div>

        <div
          style={{
            margin: "15px",
            background: "white",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 3px 10px rgba(0,0,0,.12)",
          }}
        >
          <img
            src={slides[current].image}
            style={{ width: "100%", height: "220px", objectFit: "cover" }}
          />

          <div
            style={{
              padding: "15px",
              background: "linear-gradient(135deg,#0B63F6,#071A52)",
              color: "white",
            }}
          >
            <span
              style={{
                background: "#E53935",
                padding: "5px 10px",
                borderRadius: "20px",
              }}
            >
              LIVE
            </span>

            <h2>{slides[current].title}</h2>
            <p>Government Jobs • Private Jobs • Results</p>
          </div>
        </div>

        <div style={{ padding: "15px" }}>
          <h2>🔥 Top Jobs Today</h2>

          <div
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "14px",
              marginTop: "10px",
            }}
          >
            <strong>BPSC TRE 4.0</strong>

            <p>Vacancy • Eligibility • Last Date</p>

            <Link href="/jobs/bpsc-tre-4">
              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#071A52",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                View Details
              </button>
            </Link>
          </div>

          <div
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "14px",
              marginTop: "10px",
            }}
          >
            <strong>KVS Teacher Recruitment</strong>
            <p>Coming Soon</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "14px",
              marginTop: "10px",
            }}
          >
            <strong>Private School Teacher</strong>
            <p>Open Hiring</p>
          </div>
        </div>

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
            ].map((c) => (
              <div
                key={c}
                style={{
                  background: "white",
                  padding: "18px",
                  textAlign: "center",
                  borderRadius: "12px",
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>

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
          }}
        >
          WhatsApp
        </a>
      </main>
    </>
  );
}

const chipStyle = {
  background: "rgba(255,255,255,.15)",
  padding: "8px 14px",
  borderRadius: "20px",
  color: "white",
  display: "inline-block",
} as const;
