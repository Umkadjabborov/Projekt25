import { Link } from "react-router-dom";

function Button({
  children,
  to,
  onClick,
  variant = "primary",
  type = "button",
  fullWidth = false,
}) {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 22px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "15px",
    transition: "0.3s ease",
    cursor: "pointer",
    width: fullWidth ? "100%" : "auto",
  };

  const variants = {
    primary: {
      background: "#890726",
      color: "#fff",
      border: "1px solid #890726",
    },
    secondary: {
      background: "#4A3036",
      color: "#fff",
      border: "1px solid #4A3036",
    },
    light: {
      background: "#EFEFEF",
      color: "#4A3036",
      border: "1px solid #d7d7d7",
    },
    outline: {
      background: "transparent",
      color: "#890726",
      border: "1px solid #890726",
    },
  };

  if (to) {
    return (
      <Link to={to} style={{ ...baseStyle, ...variants[variant] }}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} style={{ ...baseStyle, ...variants[variant] }}>
      {children}
    </button>
  );
}

export default Button;