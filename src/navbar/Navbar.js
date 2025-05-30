import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-principal">
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`navbar-ul ${isOpen ? "open" : ""}`}>
        <li className="navbar-li">
          <Link to="/home" className="navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li className="navbar-li">
          <Link to="/properties" className="navbar-link" onClick={() => setIsOpen(false)}>Propiedades</Link>
        </li>
        <li className="navbar-li">
          <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>Sobre nosotros</Link>
        </li>
        <li className="navbar-li">
          <Link to="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

