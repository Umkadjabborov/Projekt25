import SectionTitle from "../shared/SectionTitle";
import Card from "../shared/Card";

function IntroSection() {
  return (
    <section className="section" style={{ backgroundColor: "#EFEFEF" }}>
      <div className="container">
        <SectionTitle
          title="Muzey haqida"
          subtitle="Mazkur interaktiv platforma Said Ahmad va Saida Zunnunova hayoti, ijodi, adabiy merosi hamda muzey eksponatlarini zamonaviy va qulay raqamli formatda taqdim etish uchun yaratilmoqda."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            marginTop: "30px",
          }}
        >
          <Card>
            <div style={{ borderTop: "5px solid #890726", paddingTop: "14px" }}>
              <h3 style={{ color: "#4A3036", marginBottom: "12px" }}>Adabiy meros</h3>
              <p style={{ lineHeight: "1.8", color: "#5b4b4f" }}>
                Ijodkorlarning asarlari, hayot yo‘li va adabiyotdagi o‘rni bir platformada jamlanadi.
              </p>
            </div>
          </Card>

          <Card>
            <div style={{ borderTop: "5px solid #890726", paddingTop: "14px" }}>
              <h3 style={{ color: "#4A3036", marginBottom: "12px" }}>Interaktiv tajriba</h3>
              <p style={{ lineHeight: "1.8", color: "#5b4b4f" }}>
                Rasmlar, bo‘limlar, timeline va galereya orqali foydalanuvchi muzeyni qulay o‘rganadi.
              </p>
            </div>
          </Card>

          <Card>
            <div style={{ borderTop: "5px solid #890726", paddingTop: "14px" }}>
              <h3 style={{ color: "#4A3036", marginBottom: "12px" }}>Ta’limiy ahamiyat</h3>
              <p style={{ lineHeight: "1.8", color: "#5b4b4f" }}>
                Talabalar, o‘quvchilar va tadqiqotchilar uchun ishonchli va chiroyli manba bo‘lib xizmat qiladi.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;