export default function ResultPage() {
  const results = [
    "BPSC TRE Result",
    "Bihar Board Result",
    "KVS Result",
    "CTET Result",
    "Teacher Recruitment Result",
  ];

  return (
    <main style={{fontFamily:"Arial",padding:"20px",background:"#f5f7fb",minHeight:"100vh"}}>
      <h1 style={{color:"#071A52"}}>📄 Latest Results</h1>

      {results.map((item)=>(
        <div key={item} style={{
          background:"white",
          padding:"15px",
          marginTop:"12px",
          borderRadius:"12px",
          boxShadow:"0 2px 8px rgba(0,0,0,.08)"
        }}>
          <strong>{item}</strong>
          <p>Check Result • Download PDF</p>
        </div>
      ))}
    </main>
  );
}
