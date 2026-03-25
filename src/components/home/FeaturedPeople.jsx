import { Link } from "react-router-dom";
import SectionTitle from "../shared/SectionTitle";
import saidAhmadImg from "../../assets/images/writers/said-ahmad.jpg";
import saidaImg from "../../assets/images/writers/saida-zunnunova.jpg";

function FeaturedPeople() {
  const people = [
    {
      id: 1,
      name: "Said Ahmad",
      image: saidAhmadImg,
      text: "O‘zbek adabiyotining zabardast vakili, hikoya, qissa va dramaturgiya yo‘nalishida boy meros qoldirgan ijodkor.",
      link: "/said-ahmad",
    },
    {
      id: 2,
      name: "Saida Zunnunova",
      image: saidaImg,
      text: "She’riyati, samimiy tuyg‘ulari va nafis badiiy qarashlari bilan adabiyot ixlosmandlari qalbidan joy olgan shoira.",
      link: "/saida-zunnunova",
    },
  ];

  return (
    <section className="section" style={{ background: "#f7f7f7" }}>
      <div className="container">
        <SectionTitle
          title="Ijodkorlar bilan tanishing"
          subtitle="Platformaning markazida ikki buyuk adabiyot namoyandasi — Said Ahmad va Saida Zunnunova turadi."
          center
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {people.map((person) => (
            <div
              key={person.id}
              style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 28px rgba(74,48,54,0.10)",
              }}
            >
              <div style={{ height: "360px", overflow: "hidden" }}>
                <img
                  src={person.image}
                  alt={person.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div style={{ padding: "24px" }}>
                <h3 style={{ color: "#4A3036", fontSize: "28px", marginBottom: "14px" }}>
                  {person.name}
                </h3>

                <p style={{ color: "#5b4b4f", lineHeight: "1.8", marginBottom: "22px" }}>
                  {person.text}
                </p>

                <Link
                  to={person.link}
                  style={{
                    display: "inline-block",
                    background: "#890726",
                    color: "#fff",
                    padding: "12px 20px",
                    borderRadius: "10px",
                    fontWeight: "600",
                  }}
                  
                >
                  Batafsil
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPeople;