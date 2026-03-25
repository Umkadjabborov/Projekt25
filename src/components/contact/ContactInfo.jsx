function ContactInfo() {
  const info = [
    {
      title: "Manzil",
      text: "Toshkent shahri, muzey hududi manzili shu yerga yoziladi.",
    },
    {
      title: "Telefon",
      text: "+998 90 123 45 67",
    },
    {
      title: "Email",
      text: "museum@example.com",
    },
    {
      title: "Ish vaqti",
      text: "Dushanba - Shanba, 09:00 - 18:00",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
      }}
    >
      {info.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(74,48,54,0.08)",
            borderTop: "5px solid #890726",
          }}
        >
          <h3 style={{ color: "#4A3036", marginBottom: "10px" }}>{item.title}</h3>
          <p style={{ color: "#5b4b4f", lineHeight: "1.8" }}>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;