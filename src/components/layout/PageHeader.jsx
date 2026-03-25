function PageHeader({ title, subtitle, bgImage }) {
  return (
    <section
      style={{
        minHeight: "42vh",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(rgba(74,48,54,0.78), rgba(137,7,38,0.72)), url(${bgImage}) center/cover no-repeat`,
        color: "#fff",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div style={{ maxWidth: "760px" }}>
          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.2",
              marginBottom: "18px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#EFEFEF",
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PageHeader;