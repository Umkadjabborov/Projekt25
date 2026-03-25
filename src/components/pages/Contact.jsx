import PageHeader from "../layout/PageHeader";
import SectionTitle from "../shared/SectionTitle";
import ContactInfo from "../contact/ContactInfo";
import ContactForm from "../contact/ContactForm";
import contactHeader from "../../assets/images/hero/museum-hero.jpg";

function Contact() {
  return (
    <>
      <PageHeader
        title="Bog‘lanish"
        subtitle="Muzey bilan bog‘lanish, savol yuborish yoki tashrif ma’lumotlarini olish uchun ushbu bo‘limdan foydalaning."
        bgImage={contactHeader}
      />

      <section className="section" style={{ background: "#EFEFEF" }}>
        <div className="container">
          <SectionTitle
            title="Aloqa ma’lumotlari"
            subtitle="Muzey bilan bog‘lanishning asosiy usullari va foydalanuvchi xabar formasi."
          />

          <div
            style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            alignItems: "start",
            }}
            >
            <ContactInfo />
            <ContactForm />
            </div>
        </div>
      </section>
    </>
  );
}

export default Contact;