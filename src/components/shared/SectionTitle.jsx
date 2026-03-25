function SectionTitle({ title, subtitle, center = false }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: "40px" }}>
      <h2
        className="section-title"
        style={{
          color: "#4A3036",
          fontSize: "38px",
          marginBottom: "14px",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="section-subtitle"
          style={{
            maxWidth: center ? "800px" : "700px",
            margin: center ? "0 auto" : "0",
            lineHeight: "1.8",
            color: "#5b4b4f",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;