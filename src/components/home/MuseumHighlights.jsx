import SectionTitle from "../shared/SectionTitle";

function MuseumHighlights() {
  const items = [
    {
      number: "100+",
      title: "Raqamli materiallar",
      text: "Muzeydagi turli eksponatlar, suratlar va yozma manbalarni jamlash imkoniyati.",
    },
    {
      number: "2",
      title: "Asosiy adabiy siymo",
      text: "Said Ahmad va Saida Zunnunova hayoti va ijodiy merosiga alohida e’tibor qaratiladi.",
    },
    {
      number: "8+",
      title: "Interaktiv bo‘limlar",
      text: "Galereya, vaqt chizig‘i, sahifalar, ma’lumotlar va raqamli ko‘rgazmalar bir joyda.",
    },
  ];

  return (
    <section
      className="section"
      style={{
        background: "linear-gradient(135deg, #4A3036, #890726)",
        color: "#fff",
      }}
    >
      <div className="container">
        <SectionTitle
          title="Platforma imkoniyatlari"
          subtitle="Muzeyni zamonaviy ko‘rinishda namoyish etish uchun asosiy funksional bo‘limlar."
          center
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "18px",
                padding: "28px",
                backdropFilter: "blur(4px)",
              }}
            >
              <h3 style={{ fontSize: "42px", marginBottom: "12px", color: "#EFEFEF" }}>
                {item.number}
              </h3>
              <h4 style={{ fontSize: "22px", marginBottom: "10px" }}>{item.title}</h4>
              <p style={{ lineHeight: "1.8", color: "rgba(255,255,255,0.85)" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MuseumHighlights;