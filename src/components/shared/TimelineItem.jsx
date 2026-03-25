function TimelineItem({ year, title, text }) {
  return (
    <div
      style={{
        position: "relative",
        paddingLeft: "30px",
        marginBottom: "34px",
        borderLeft: "3px solid #890726",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "-9px",
          top: "2px",
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          background: "#890726",
        }}
      />

      <span
        style={{
          display: "inline-block",
          color: "#890726",
          fontWeight: "700",
          marginBottom: "8px",
        }}
      >
        {year}
      </span>

      <h3
        style={{
          fontSize: "24px",
          color: "#4A3036",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#5b4b4f",
          lineHeight: "1.8",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default TimelineItem;