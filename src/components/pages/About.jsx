import PageHeader from "../layout/PageHeader";
import SectionTitle from "../shared/SectionTitle";
import InfoStats from "../shared/InfoStats";
import aboutBg from "../../assets/images/hero/museum-hero.jpg";

function About() {
  const stats = [
    { value: "2", label: "Asosiy ijodkor" },
    { value: "100+", label: "Raqamli materiallar uchun joy" },
    { value: "8+", label: "Interaktiv bo‘limlar" },
    { value: "1", label: "Yagona raqamli platforma" },
  ];

  return (
    <>
      <PageHeader
        title="Muzey haqida"
        subtitle="Said Ahmad va Saida Zunnunova hayoti hamda ijodiy merosini zamonaviy raqamli shaklda taqdim etuvchi interaktiv platforma."
        bgImage={aboutBg}
      />

      <section className="section" style={{ background: "#EFEFEF" }}>
        <div className="container">
          <SectionTitle
            title="Platforma maqsadi"
            subtitle="Mazkur loyiha adabiy merosni raqamli shaklga o‘tkazish, foydalanuvchilarga qulay ko‘rinishda taqdim etish va muzey tajribasini interaktiv usulda boyitish uchun xizmat qiladi."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginTop: "30px",
            }}
          >
            <div style={cardStyle}>
              <h3 style={cardTitle}>Raqamlashtirish</h3>
              <p style={cardText}>
                Muzeyga oid rasmlar, hujjatlar, eksponatlar va adabiy materiallarni tizimli ko‘rinishda joylash.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>Interaktivlik</h3>
              <p style={cardText}>
                Foydalanuvchi galereya, sahifalar va bo‘limlar orqali qulay hamda zamonaviy tajriba oladi.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>Ta’limiy qiymat</h3>
              <p style={cardText}>
                Talabalar, o‘qituvchilar va adabiyot ixlosmandlari uchun foydali manba vazifasini bajaradi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <InfoStats items={stats} />
    </>
  );
}

const cardStyle = {
  background: "#fff",
  borderRadius: "18px",
  padding: "28px",
  boxShadow: "0 8px 22px rgba(74,48,54,0.08)",
  borderTop: "5px solid #890726",
};

const cardTitle = {
  color: "#4A3036",
  fontSize: "22px",
  marginBottom: "12px",
};

const cardText = {
  color: "#5b4b4f",
  lineHeight: "1.8",
};

export default About;