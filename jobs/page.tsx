export default function JobsPage() {
  const jobs = [
    "BPSC TRE 4.0",
    "KVS Teacher Recruitment",
    "Private School Teacher",
    "Physics Wallah Hiring",
    "Coaching Faculty Jobs",
  ];

  return (
    <main style={{fontFamily:"Arial",padding:"20px",background:"#f5f7fb",minHeight:"100vh"}}>
      <h1 style={{color:"#071A52"}}>📢 Latest Jobs</h1>

      {jobs.map((job)=>(
        <div key={job} style={{
          background:"white",
          padding:"15px",
          marginTop:"12px",
          borderRadius:"12px",
          boxShadow:"0 2px 8px rgba(0,0,0,.08)"
        }}>
          <strong>{job}</strong>
          <p>Vacancy • Eligibility • Last Date</p>
        </div>
      ))}
    </main>
  );
}
