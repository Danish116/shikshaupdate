export default function Home() {
  return (
    <main style={{fontFamily:"Arial",background:"#f5f7fb",minHeight:"100vh"}}>
      <header style={{background:"#0b5ed7",color:"white",padding:"18px"}}>
        <h1 style={{margin:0}}>ShikshaUpdate</h1>
        <p style={{margin:"5px 0 0"}}>Government Jobs • Private Jobs • Education Updates</p>
      </header>

      <div style={{background:"#d90429",color:"white",padding:"10px",fontWeight:"bold"}}>
        🔴 BREAKING: BPSC • Railway • SSC • Bihar Jobs • Admit Card • Result
      </div>

      <div style={{padding:"15px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
          <button style={btn}>Government Jobs</button>
          <button style={btn}>Private Jobs</button>
          <button style={btn}>Results</button>
          <button style={btn}>Admit Card</button>
        </div>

        <h2 style={{marginTop:"25px"}}>Latest Updates</h2>

        <div style={card}>
          <h3>BPSC TRE 4.0 Latest Update</h3>
          <p>Notification, seats, eligibility aur important dates.</p>
        </div>

        <div style={card}>
          <h3>Railway Technician Vacancy</h3>
          <p>Application process aur last date.</p>
        </div>

        <div style={card}>
          <h3>Bihar Education News</h3>
          <p>Daily education aur exam updates.</p>
        </div>

        <a
          href="https://whatsapp.com/channel/0029Vb8ICcyJ..."
          style={{
            display:"block",
            textAlign:"center",
            background:"#25D366",
            color:"white",
            textDecoration:"none",
            padding:"14px",
            borderRadius:"10px",
            marginTop:"20px",
            fontWeight:"bold"
          }}
        >
          Join WhatsApp Channel
        </a>
      </div>
    </main>
  );
}

const btn = {
  background:"#0b5ed7",
  color:"white",
  border:"none",
  borderRadius:"10px",
  padding:"14px",
  fontWeight:"bold",
  cursor:"pointer"
};

const card = {
  background:"white",
  padding:"15px",
  borderRadius:"12px",
  marginTop:"12px",
  boxShadow:"0 2px 8px rgba(0,0,0,.08)"
};
