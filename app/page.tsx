"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const slides = [
    { title: "BPSC TRE 4.0 Notification", color: "#0B63F6" },
    { title: "KVS Teacher Recruitment", color: "#E53935" },
    { title: "Private School Teacher Jobs", color: "#16A34A" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const boxes = [
    { name: "Latest Jobs", link: "/jobs", color: "#0B63F6" },
    { name: "Results", link: "/result", color: "#E53935" },
    { name: "Admit Card", link: "/admit-card", color: "#16A34A" },
    { name: "Answer Key", link: "/answer-key", color: "#F59E0B" },
    { name: "Scholarship", link: "/scholarship", color: "#7C3AED" },
    { name: "Private Jobs", link: "/jobs", color: "#0EA5E9" },
    { name: "Current Affairs", link: "/jobs", color: "#334155" },
    { name: "Near Me Jobs", link: "/jobs", color: "#DC2626" },
  ];

  return (
    <main style={{ fontFamily: "Arial", background: "#f5f7fb", minHeight: "100vh" }}>
      <style>{`
        body{margin:0}
        @keyframes ticker{
          from{transform:translateX(100%)}
          to{transform:translateX(-100%)}
        }
      `}</style>

      <header
        style={{
          background: "linear-gradient(135deg,#071A52,#0B63F6)",
          color: "white",
          padding: "20px",
        }}
      >
        <h1 style={{ color: "#FFD700", margin: 0 }}>🎓 Shiksha Update</h1>
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
          🔴 BREAKING: BPSC TRE 4.0 • Bihar Police • KVS • Results • Private Jobs
        </div>
      </div>

      <div
        style={{
          margin: "15px",
          borderRadius: "18px",
          overflow: "hidden",
          background: slides[current].color,
          color: "white",
          padding: "30px 20px",
        }}
      >
        <span
          style={{
            background: "#fff",
            color: slides[current].color,
            padding: "5px 10px",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          LIVE
        </span>

        <h2 style={{ marginTop: "20px", fontSize: "30px" }}>
          {slides[current].title}
        </h2>

        <p>Government Jobs • Private Jobs • Results</p>

        <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginTop: "15px",
  }}
>
  {slides.map((_, i) => (
    <div
      key={i}
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: i === current ? "#FFD700" : "rgba(255,255,255,.5)",
      }}
    />
  ))}
</div>
      </div>

      <div style={{ padding: "15px" }}>
        <h2>Quick Access</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          {boxes.map((box) => (
            <Link key={box.name} href={box.link} style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: box.color,
                  color: "white",
                  padding: "18px",
                  borderRadius: "14px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {box.name}
              </div>
            </Link>
          ))}
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
          <Link href="/jobs/bpsc-tre-4">View Details</Link>
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

      <footer
        style={{
          background: "#071A52",
          color: "white",
          textAlign: "center",
          padding: "25px",
          marginTop: "25px",
        }}
      >
        <h3>Shiksha Update</h3>
        <p>Fast • Accurate • Trusted</p>
        <p>© 2026 Shiksha Update</p>
      </footer>

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
        }}
      >
        WhatsApp
      </a>
    </main>
  );
            }
