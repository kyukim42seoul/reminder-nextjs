export default function Login() {
  return (
    <div style={{ padding: "8px" }}>
      <h3 style={{ padding: "12px" }}>Login Page</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          gap: "8px",
          padding: "8px",
          border: "1px solid white",
          borderRadius: "4px",
        }}
      >
        <input placeholder="need ID" />
        <input placeholder="need Password" />
        <button>Login</button>
      </div>
    </div>
  );
}
