import PageHeader from "../layout/PageHeader";
import SectionTitle from "../shared/SectionTitle";
import virtualTourHeader from "../../assets/images/hero/museum-hero.jpg";

function VirtualTour() {
  return (
    <>
      <PageHeader
        title="Virtual Tour"
        subtitle="Muzey bo‘ylab virtual sayohat imkoniyati ushbu bo‘limda joylashadi."
        bgImage={virtualTourHeader}
      />

      <section className="section" style={{ background: "#EFEFEF" }}>
        <div className="container">
          <SectionTitle
            title="Virtual muzey sayohati"
            subtitle="Bu yerga keyinchalik 360° tour, video preview yoki interaktiv xona ko‘rinishlari joylashtiriladi."
          />

          <div
            style={{
              background: "#fff",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 10px 24px rgba(74,48,54,0.08)",
              textAlign: "center",
            }}
          >
            <p style={{ color: "#5b4b4f", lineHeight: "1.8" }}>
              Hozircha bu bo‘lim uchun frontend placeholder tayyorlandi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default VirtualTour;