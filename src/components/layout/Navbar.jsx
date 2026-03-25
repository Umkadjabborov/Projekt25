import { Link } from "react-router-dom";
import "../../styles/global.css";

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
  return (
    <header style={{ background: "#4A3036", color: "white", padding: "18px 0" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ fontSize: "22px" }}>Adabiy Muzey</h2>

        <nav style={{ display: "flex", gap: "22px", flexWrap: "wrap" }}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} style={{ color: "#EFEFEF", fontSize: "15px" }}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;