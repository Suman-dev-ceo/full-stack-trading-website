import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.assign("http://localhost:3001");
        }, 800);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
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
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
