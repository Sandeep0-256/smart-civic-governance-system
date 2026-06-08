function Profile() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fb",
        padding: "40px"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px"
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#2563eb",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "40px",
              fontWeight: "bold"
            }}
          >
            S
          </div>

          <div>
            <h1>Sandeep</h1>

            <p
              style={{
                color: "#64748b",
                fontSize: "18px"
              }}
            >
              Civic Guardian
            </p>
          </div>
        </div>

        <br />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px"
          }}
        >
          <div style={cardStyle}>
            <h3>📢 Reports Submitted</h3>
            <p style={valueStyle}>12</p>
          </div>

          <div style={cardStyle}>
            <h3>🏆 Points Earned</h3>
            <p style={valueStyle}>450</p>
          </div>

          <div style={cardStyle}>
            <h3>🥈 Rank</h3>
            <p style={valueStyle}>#2</p>
          </div>

          <div style={cardStyle}>
            <h3>⭐ Resolution Success</h3>
            <p style={valueStyle}>92%</p>
          </div>
        </div>

        <br />

        <div style={badgeContainer}>
          <h2>🎖 Achievements & Badges</h2>

          <div style={badgesWrapper}>
            <div style={badgeStyle}>
              🏅 Top Reporter
            </div>

            <div style={badgeStyle}>
              ⚡ Fast Reporter
            </div>

            <div style={badgeStyle}>
              🌟 Civic Hero
            </div>

            <div style={badgeStyle}>
              🛡 Bharat Guardian
            </div>
          </div>
        </div>

        <br />

        <div style={activityCard}>
          <h2>📈 Recent Activity</h2>

          <p>✅ Reported pothole near Hanamkonda</p>

          <p>✅ Reported water leakage issue</p>

          <p>✅ Municipality resolved complaint SCGS-2026-001</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#f8fafc",
  padding: "25px",
  borderRadius: "15px",
  border: "1px solid #cbd5e1"
};

const valueStyle = {
  fontSize: "30px",
  fontWeight: "bold",
  color: "#2563eb"
};

const badgeContainer = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "15px",
  border: "1px solid #e2e8f0"
};

const badgesWrapper = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  marginTop: "20px"
};

const badgeStyle = {
  backgroundColor: "#dbeafe",
  color: "#1d4ed8",
  padding: "12px 20px",
  borderRadius: "30px",
  fontWeight: "bold"
};

const activityCard = {
  backgroundColor: "#f8fafc",
  padding: "20px",
  borderRadius: "15px",
  border: "1px solid #cbd5e1"
};

export default Profile;