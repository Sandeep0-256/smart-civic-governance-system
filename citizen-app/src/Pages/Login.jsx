function Login() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f9"
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}
      >
        <h1>Citizen Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          style={{
            width: "90%",
            padding: "12px",
            marginTop: "15px"
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={{
            width: "90%",
            padding: "12px",
            marginTop: "15px"
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;