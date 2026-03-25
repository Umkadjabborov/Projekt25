import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { name: "Bosh sahifa", path: "/" },
  { name: "Muzey haqida", path: "/about" },
  { name: "Said Ahmad", path: "/said-ahmad" },
  { name: "Saida Zunnunova", path: "/saida-zunnunova" },
  { name: "Galereya", path: "/gallery" },
  { name: "Timeline", path: "/timeline" },
  { name: "Virtual Tour", path: "/virtual-tour" },
  { name: "Bog‘lanish", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(74,48,54,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container">
        <div
          style={{
            minHeight: "78px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#fff",
              fontSize: "22px",
              fontWeight: "800",
              letterSpacing: "0.3px",
            }}
          >
            Adabiy Muzey
          </Link>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#EFEFEF",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: isActive ? "700" : "500",
                  background: isActive ? "#890726" : "transparent",
                  transition: "0.3s ease",
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              display: "none",
              background: "#890726",
              color: "#fff",
              padding: "10px 14px",
              borderRadius: "10px",
              fontWeight: "700",
            }}
          >
            Menu
          </button>
        </div>

        {menuOpen && (
          <div
            className="mobile-nav"
            style={{
              display: "grid",
              gap: "10px",
              padding: "0 0 18px 0",
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  color: "#fff",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  background: isActive ? "#890726" : "rgba(255,255,255,0.06)",
                  fontWeight: "600",
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;