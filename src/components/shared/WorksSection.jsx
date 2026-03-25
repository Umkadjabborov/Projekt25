import SectionTitle from "./SectionTitle";

function WorksSection({ title, works }) {
  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="container">
        <SectionTitle
          title={title}
          subtitle="Ijodiy merosni ko‘rsatish uchun asosiy asarlar alohida kartalarda beriladi."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            marginTop: "30px",
          }}
        >
          {works.map((work, index) => (
            <div
              key={index}
              style={{
                background: "#EFEFEF",
                borderRadius: "18px",
                padding: "24px",
                borderTop: "5px solid #890726",
                boxShadow: "0 8px 22px rgba(74,48,54,0.08)",
              }}
            >
              <h3
                style={{
                  color: "#4A3036",
                  fontSize: "22px",
                  marginBottom: "12px",
                }}
              >
                {work.name}
              </h3>

              <p
                style={{
                  color: "#5b4b4f",
                  lineHeight: "1.8",
                  marginBottom: "10px",
                }}
              >
                {work.description}
              </p>

              <span
                style={{
                  color: "#890726",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                {work.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorksSection;