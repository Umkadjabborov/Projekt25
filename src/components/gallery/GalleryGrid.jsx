function GalleryGrid({ items }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#fff",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 10px 26px rgba(74,48,54,0.08)",
            transition: "0.3s ease",
          }}
        >
          <div style={{ height: "280px", overflow: "hidden" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "0.4s ease",
              }}
            />
          </div>

          <div style={{ padding: "18px 20px" }}>
            <h3
              style={{
                color: "#4A3036",
                fontSize: "21px",
                marginBottom: "8px",
              }}
            >
              {item.title}
            </h3>

            <span
              style={{
                display: "inline-block",
                fontSize: "14px",
                color: "#890726",
                fontWeight: "700",
                textTransform: "capitalize",
              }}
            >
              {item.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GalleryGrid;