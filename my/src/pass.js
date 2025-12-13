// src/PasswordStrengthChecker.js [cite: 181-214]
import React, { useState } from "react";

function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const evaluateStrength = (pwd) => {
    if (pwd.length < 6) return "Weak";
    // Regex checks for Lowercase, Uppercase, and Digit
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pwd)) return "Strong";
    return "Moderate";
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setStrength(evaluateStrength(pwd));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
        style={{ padding: "8px", width: "250px" }}
      />
      <p>
        Password Strength: <strong>{strength}</strong>
      </p>
    </div>
  );
}

export default PasswordStrengthChecker;
