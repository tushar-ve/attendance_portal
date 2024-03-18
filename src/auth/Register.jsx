import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css'
import RegisterLogo from '../images/download.svg';
function Register() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    confPassword: "",
    role: "",
  });

  function handleRegisterChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();
    if (
      details.username === "" ||
      details.email === "" ||
      details.password === "" ||
      details.confPassword === "" ||
      details.role === ""
    ) {
      setError("Input field cannot be empty");
      return;
    }
    if (details.password !== details.confPassword) {
      setError("Both passwords must match!");
      return;
    }
    const sendData = {
      name: details.username,
      email: details.email,
      password: details.password,
      role: details.role,
    };
    fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Something went wrong!!!");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        navigate("/login");
      })
      .catch((error) => setError(error.message));
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-600">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="text-center mb-6">
          <img src={RegisterLogo} alt="Register Logo" className="w-20 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Employee Registration</h2>
          <p className="text-gray-600 mt-2">Please enter your details to register</p>
        </div>
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Enter Username"
              value={details.username}
              onChange={handleRegisterChange}
              name="username"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Enter Email"
              value={details.email}
              onChange={handleRegisterChange}
              name="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Enter Password"
              value={details.password}
              onChange={handleRegisterChange}
              name="password"
              required
            />
          </div>
          <div>
            <label htmlFor="confPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              id="confPassword"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Confirm Password"
              value={details.confPassword}
              onChange={handleRegisterChange}
              name="confPassword"
              required
            />
          </div>
          <div>
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
            <input
              id="designation"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Enter Designation"
              value={details.role}
              onChange={handleRegisterChange}
              name="role"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="/login">sign in?</a>
          </p>
        </form>
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default Register;

