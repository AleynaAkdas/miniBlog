import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function LoginForm({ onSwitch }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("userData"));

    if (
      savedUser &&
      formData.email === savedUser.email &&
      formData.password === savedUser.password
    ) {
      alert(`Hoş geldin, ${savedUser.username}!`);
    } else {
      alert("Giriş başarısız. Bilgileri kontrol et.");
    }

    setFormData({ email: "", password: "" });
  };

  return (
    <div className="login-container">
      <h2>GİRİŞ FORMU</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        {/* Tarayıcıyı kandırmak için sahte inputlar */}
        <input
          type="text"
          name="fakeusernameremembered"
          style={{ display: "none" }}
        />
        <input
          type="password"
          name="fakepasswordremembered"
          style={{ display: "none" }}
        />

        <div className="form-group">
          <label htmlFor="email">Gmail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>

        <div className="form-group password-container">
          <label htmlFor="password">Şifre</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="password-input"
            autoComplete="off"
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>

        <div className="buttons">
          <input
            className="btn"
            type="button"
            value="KAYIT OL"
            onClick={onSwitch}
          />
          <input className="btn" type="submit" value="GİRİŞ YAP" />
        </div>
      </form>
    </div>
  );
}
