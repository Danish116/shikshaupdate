"use client";

import { useEffect, useState } from "react";
import { auth, provider } from "../../lib/firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const ADMIN_EMAIL = "kaunain2092001@gmail.com";

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  const login = async () => {
    const res = await signInWithPopup(auth, provider);

    if (res.user.email !== ADMIN_EMAIL) {
      await signOut(auth);
      alert("Access Denied");
    }
  };

  if (!user) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#EEF4FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial",
          padding: 20,
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: 24,
            borderRadius: 20,
            width: "100%",
            maxWidth: 360,
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,.12)",
          }}
        >
          <h1>🎓 ShikshaUpdate Admin</h1>
          <p>Sirf Admin Login</p>

          <button
            onClick={login}
            style={{
              width: "100%",
              padding: 14,
              border: "none",
              borderRadius: 12,
              background: "#0B63F6",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Continue with Google
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#EEF4FF",
        fontFamily: "Arial",
        padding: 20,
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg,#071A52,#0B63F6)",
            color: "#fff",
            borderRadius: 22,
            padding: 24,
            marginBottom: 20,
          }}
        >
          <h1 style={{ margin: 0 }}>🎓 ShikshaUpdate Admin</h1>
          <p style={{ marginTop: 8 }}>{user.displayName}</p>
          <p style={{ opacity: 0.8 }}>{user.email}</p>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            padding: 20,
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <h2>Dashboard</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 12,
              marginTop: 16,
            }}
          >
            {[
              ["📝", "Posts"],
              ["🖼️", "Banner"],
              ["📄", "PDF"],
              ["📊", "Analytics"],
            ].map(([icon, text]) => (
              <div
                key={text}
                style={{
                  background: "#F5F7FB",
                  borderRadius: 14,
                  padding: 18,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 28 }}>{icon}</div>
                <div style={{ marginTop: 8, fontWeight: "bold" }}>{text}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => signOut(auth)}
            style={{
              width: "100%",
              marginTop: 24,
              padding: 14,
              border: "none",
              borderRadius: 12,
              background: "#E53935",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
