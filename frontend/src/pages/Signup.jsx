import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((p) => ({ ...p, [name]: value }));
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/signup", {
        ...inputValue,
        createdAt: new Date().toISOString(),
      });

      const { success, message, token } = data;

      if (success && token) {
        // Save token in localStorage
        localStorage.setItem("token", token);

        handleSuccess(message || "Signup successful");

        // Redirect to dashboard app
        setTimeout(() => {
          const dashURL =
            process.env.REACT_APP_DASH_URL ||
            "https://full-stack-trading-dashboard.netlify.app";
          window.location.assign(dashURL);
        }, 800);
      } else {
        handleError(message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      handleError("Something went wrong");
    } finally {
      setInputValue({ email: "", password: "", username: "" });
    }
  };

  return (
    <div
      className="card mt-5 mb-5 p-4"
      style={{ width: "22rem", margin: "0 auto" }}
    >
      <h2 className="mb-4 text-center">Signup Account</h2>
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
          <label htmlFor="username" className="col-sm col-form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            id="username"
            placeholder="Enter your username"
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
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;