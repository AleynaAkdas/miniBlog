import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/auth");
  };

  return (
    <nav className="mystica-navbar">
      <div className="logo">
        <Link to="/">Mystica</Link>
      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menü"
      >
        ✧
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Akış</Link>
        </li>
        <li className={location.pathname === "/myspells" ? "active" : ""}>
          <Link to="/myspells">Yazılarım</Link>
        </li>
        <li className={location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile">Profil</Link>
        </li>

        {isLoggedIn ? (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Çıkış Yap
            </button>
          </li>
        ) : (
          <li className={location.pathname === "/auth" ? "active" : ""}>
            <Link to="/auth">Giriş</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
