import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="p-4 m-4 border">
        <h2 className="mb-3">Sign up!</h2>
        {error && { error }}
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-grid gap-3">
            <button type="submit">Sign up!</button>
          </div>
        </form>
      </div>

      <div className="p-4 border m-4  text-center">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default Signup;
