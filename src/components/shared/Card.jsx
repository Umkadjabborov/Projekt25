function Card({ children, padding = "24px" }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding,
        boxShadow: "0 10px 25px rgba(74,48,54,0.08)",
        border: "1px solid rgba(74,48,54,0.06)",
        transition: "0.3s ease",
      }}
    >
      {children}
    </div>
  );
}

export default Card;