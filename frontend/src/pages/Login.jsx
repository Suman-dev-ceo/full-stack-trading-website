import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((p) => ({ ...p, [name]: value }));
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", { ...inputValue });

      const { success, message, token } = data;

      if (success && token) {
        // Save token in localStorage
        localStorage.setItem("token", token);

        handleSuccess(message || "Login successful");

        // Redirect to dashboard app
        setTimeout(() => {
          const dashURL =
            process.env.REACT_APP_DASH_URL ||
            "https://suman-fullstack-trading-dashboard.netlify.app";
          window.location.assign(`${dashURL}/auth/callback#token=${encodeURIComponent(token)}`);
        }, 800);
      } else {
        handleError(message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      handleError("Something went wrong");
    } finally {
      setInputValue({ email: "", password: "" });
    }
  };

  return (
    <div
      className="card mt-5 mb-5 p-4"
      style={{ width: "22rem", margin: "0 auto" }}
    >
      <h2 className="mb-4 text-center">Login Account</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="row mb-2">
          <label htmlFor="email" className="col-sm col-form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div className="row mb-2">
          <label htmlFor="password" className="col-sm col-form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mb-3"
          style={{ width: "100%" }}
        >
          Submit
        </button>
        <span>
          Don&apos;t have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;