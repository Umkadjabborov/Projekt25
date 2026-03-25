function GalleryModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.72)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        zIndex: 2000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(100%, 980px)",
          background: "#fff",
          borderRadius: "22px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "#890726",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "700",
            zIndex: 2,
          }}
        >
          ×
        </button>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            minHeight: "520px",
          }}
        >
          <div style={{ background: "#ddd" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              padding: "36px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "#EFEFEF",
            }}
          >
            <span
              style={{
                display: "inline-block",
                marginBottom: "14px",
                color: "#890726",
                fontWeight: "700",
                textTransform: "capitalize",
                fontSize: "14px",
              }}
            >
              {item.category}
            </span>

            <h2
              style={{
                fontSize: "34px",
                color: "#4A3036",
                marginBottom: "18px",
                lineHeight: "1.3",
              }}
            >
              {item.title}
            </h2>

            <p
              style={{
                color: "#5b4b4f",
                lineHeight: "1.9",
                fontSize: "16px",
              }}
            >
              {item.description ||
                "Ushbu bo‘limda muzeyga oid rasm, hujjat yoki eksponatning kengroq tavsifi ko‘rsatiladi. Keyinchalik har bir rasm uchun alohida batafsil ma’lumot, sana va izohlar qo‘shish mumkin."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryModal;