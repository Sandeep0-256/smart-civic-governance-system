function Dashboard() {
  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh"
      }}
    >
      <h1>Smart Civic Governance System</h1>

      <h2>Welcome Sandeep 👋</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        <div style={cardStyle}>
          <h3>📢 Report Issue</h3>
          <p>Report potholes, garbage, water leaks and more.</p>
        </div>

        <div style={cardStyle}>
          <h3>📍 Track Complaints</h3>
          <p>Track complaint status in real time.</p>
        </div>

        <div style={cardStyle}>
          <h3>🏆 Leaderboard</h3>
          <p>View citizen rankings and rewards.</p>
        </div>

        <div style={cardStyle}>
          <h3>👤 Profile</h3>
          <p>Manage your account and points.</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
};

export default Dashboard;