function Leaderboard() {
  const citizens = [
    { rank: 1, name: "Rahul", points: 520, level: "Bharat Guardian" },
    { rank: 2, name: "Sandeep", points: 450, level: "Civic Guardian" },
    { rank: 3, name: "Priya", points: 410, level: "Civic Volunteer" },
    { rank: 4, name: "Akhil", points: 350, level: "Citizen" }
  ];

  const municipalities = [
    { rank: 1, name: "Warangal", rate: "98%" },
    { rank: 2, name: "Hyderabad", rate: "95%" },
    { rank: 3, name: "Karimnagar", rate: "92%" }
  ];

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
          maxWidth: "1000px",
          margin: "auto"
        }}
      >
        <h1>🏆 Leaderboard</h1>
        <p>Top Citizens and Municipalities</p>

        <br />

        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}
        >
          <h2>👨‍👩‍👧‍👦 Top Citizens</h2>

          {citizens.map((user) => (
            <div
              key={user.rank}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "15px",
                marginTop: "10px",
                border: "1px solid #ddd",
                borderRadius: "10px"
              }}
            >
              <span>
                #{user.rank} {user.name}
              </span>

              <span>{user.points} Points</span>

              <span>{user.level}</span>
            </div>
          ))}
        </div>

        <br />

        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}
        >
          <h2>🏛 Top Municipalities</h2>

          {municipalities.map((city) => (
            <div
              key={city.rank}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "15px",
                marginTop: "10px",
                border: "1px solid #ddd",
                borderRadius: "10px"
              }}
            >
              <span>
                #{city.rank} {city.name}
              </span>

              <span>
                Resolution Rate: {city.rate}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;