function QuoteSection() {
  return (
    <section className="section" style={{ background: "#EFEFEF" }}>
      <div className="container">
        <div
          style={{
            background: "#fff",
            borderLeft: "8px solid #890726",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 10px 28px rgba(74,48,54,0.08)",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "28px",
              lineHeight: "1.7",
              color: "#4A3036",
              fontStyle: "italic",
              marginBottom: "18px",
            }}
          >
            “Adabiyot — inson qalbining eng nozik va eng teran ifodasidir.”
          </p>

          <span
            style={{
              display: "inline-block",
              color: "#890726",
              fontWeight: "700",
              fontSize: "17px",
            }}
          >
            Muzeyning asosiy ruhiy g‘oyasi
          </span>
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;