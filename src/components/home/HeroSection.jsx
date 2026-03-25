import Button from "../shared/Button";
import heroImage from "../../assets/images/hero/museum-hero.jpg";

function HeroSection() {
  return (
    <section
      className="section"
      style={{
        background:
          `linear-gradient(rgba(74,48,54,0.75), rgba(137,7,38,0.75)), url(${heroImage}) center/cover no-repeat`,
        color: "white",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div style={{ maxWidth: "700px" }}>
          <h1 style={{ fontSize: "56px", lineHeight: "1.2", marginBottom: "20px" }}>
            Said Ahmad va Saida Zunnunova hayoti va ijodiga bag‘ishlangan interaktiv muzey
          </h1>

          <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "30px", color: "#EFEFEF" }}>
            Adabiy meros, tarixiy suratlar, noyob eksponatlar va raqamli hikoyalar orqali
            ijodkorlar olamiga zamonaviy sayohat qiling.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button to="/about" variant="primary">
              Muzey haqida
            </Button>

            <Button to="/gallery" variant="light">
              Galereyani ko‘rish
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;