import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authentication/authSlice";
import { useNavigate } from "react-router-dom";
import MainLogo from '../images/download.svg';
import LoginImage from '../images/login.png';
import './login.css'

function Login() {
  const dispatch = useDispatch();
  const { error } = useSelector((store) => store.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLoginSubmit(e) {
    e.preventDefault();
    dispatch(loginUser({ email, password })).then((result) => {
      if (result.payload && result.payload.tokens) {
        // Redirect user to the webcam page upon successful login
        localStorage.setItem('username', result.payload.tokens.username);
        navigate("/dashboard");
      }
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col md:flex-row items-stretch md:shadow-lg md:w-4/6">
        <div className="flex-1 bg-white p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <img src={MainLogo} alt="RegisterLogo" className="w-32" />
          </div>
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-2">LOGIN</h2>
          <p className="text-center text-sm text-gray-600 mb-6">Beyond this wall lies your potential. Open it.</p>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                LOGIN
              </button>
            </div>
          </form>
          {error && <p className="text-[#8b0000] text-center mt-4">{error}</p>}
        </div>
        <div className="hidden md:flex md:flex-1 bg-blue-500 bg-cover bg-center">
          <img src={LoginImage} alt="" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Login;
