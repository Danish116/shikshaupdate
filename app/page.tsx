"use client";

import { useEffect, useState } from "react";
import { auth, provider } from "../../lib/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

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
      <main style={{padding:20,fontFamily:"Arial",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#EEF4FF"}}>
        <div style={{background:"#fff",padding:24,borderRadius:20,width:"100%",maxWidth:350,textAlign:"center"}}>
          <h1>🎓 ShikshaUpdate Admin</h1>
          <button onClick={login} style={{width:"100%",padding:14,border:"none",borderRadius:12,background:"#0B63F6",color:"#fff",fontWeight:"bold"}}>
            Continue with Google
          </button>
        </div>
      </main>
    );
  }

  return (
    <main style={{padding:20,fontFamily:"Arial"}}>
      <h1>Welcome {user.displayName}</h1>
      <p>{user.email}</p>
      <button onClick={()=>signOut(auth)}>Logout</button>
    </main>
  );
  
