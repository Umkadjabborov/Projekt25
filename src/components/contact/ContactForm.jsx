import Button from "../shared/Button";

function ContactForm() {
  return (
    <form
      style={{
        background: "#fff",
        padding: "28px",
        borderRadius: "20px",
        boxShadow: "0 10px 24px rgba(74,48,54,0.08)",
      }}
    >
      <div style={{ marginBottom: "18px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            color: "#4A3036",
            fontWeight: "600",
          }}
        >
          Ismingiz
        </label>
        <input type="text" placeholder="Ismingizni kiriting" />
      </div>

      <div style={{ marginBottom: "18px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            color: "#4A3036",
            fontWeight: "600",
          }}
        >
          Email
        </label>
        <input type="email" placeholder="Email kiriting" />
      </div>

      <div style={{ marginBottom: "18px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            color: "#4A3036",
            fontWeight: "600",
          }}
        >
          Xabar
        </label>
        <textarea rows="6" placeholder="Xabaringizni yozing" />
      </div>

      <Button type="submit" variant="primary">
        Yuborish
      </Button>
    </form>
  );
}

export default ContactForm;