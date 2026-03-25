function InfoStats({ items }) {
  return (
    <section
      className="section"
      style={{
        background: "linear-gradient(135deg, #4A3036, #890726)",
        color: "#fff",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "18px",
                padding: "28px",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h3 style={{ fontSize: "34px", marginBottom: "10px" }}>{item.value}</h3>
              <p style={{ color: "#EFEFEF", lineHeight: "1.7" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoStats;