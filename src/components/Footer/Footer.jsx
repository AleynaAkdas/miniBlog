import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="mystica-footer">
      <div className="footer-content">
        <span className="footer-logo">Mystica</span>

        <ul className="footer-links">
          <li>
            <a href="/">Ana Sayfa</a>
          </li>
          <li>
            <a href="/myspells">Yazılarım</a>
          </li>
          <li>
            <a href="/profile">Profil</a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mystica</p>
      </div>
    </footer>
  );
}
