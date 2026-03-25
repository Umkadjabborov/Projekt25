import SectionTitle from "./SectionTitle";

function BiographySection({ title, image, text, reverse = false }) {
  return (
    <section className="section" style={{ background: "#EFEFEF" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
            alignItems: "center",
            direction: reverse ? "rtl" : "ltr",
          }}
        >
          <div style={{ direction: "ltr" }}>
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0 10px 28px rgba(74,48,54,0.12)",
              }}
            />
          </div>

          <div style={{ direction: "ltr" }}>
            <SectionTitle title={title} />
            <p
              style={{
                color: "#5b4b4f",
                lineHeight: "1.9",
                fontSize: "17px",
              }}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BiographySection;