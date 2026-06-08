function Register() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          width: "350px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;