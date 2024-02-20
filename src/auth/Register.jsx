import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Register() {
  const registerUrl = "http://65.0.87.100/api/register/";
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    confPassword: "",
    designation: "",
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
      details.designation === ""
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
      designation: details.designation,
    };
    fetch(registerUrl, {
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
    // const existingDetails =
    //   JSON.parse(localStorage.getItem("registerDetails")) || [];
    // const updatedDetails = [...existingDetails, details];
    // localStorage.setItem("registerDetails", JSON.stringify(updatedDetails));
    // navigate("/login");
  }

  return (
    <div className="p-10">
      <img src="src\images\register_logo.png" alt="RegisterLogo" />
      <div
        className="bg-[#41A7C8] w-full h-auto p-2 mt-2
            flex items-center justify-around"
      >
        <div className="relative p-4  item-center w-1/2 ml-20">
          <img
            className="w-3/2 h-auto object-cover"
            src="src\images\register.png"
            alt="Attendance"
          />
        </div>
        <div
          className="relative bg-white p-1 w-3/12 h-auto flex flex-col items-center 
                justify-center rounded"
        >
          <div
            className="flex flex-col items-center justify-center 
                    mb-5 w-full"
          >
            <h1 style={{ color: "#044B62" }} className="underline">
              Employee Registration Form
            </h1>
            <div>Please Enter Valid Details</div>
            <img src="src\images\register_logo.png" alt="RegisterLogo" />
          </div>
          <form
            className="flex flex-col relative w-full p-5"
            onSubmit={handleRegisterSubmit}
          >
            <label>Username</label>
            <input
              className="border-2 bg-[#41A7C8] rounded text-center focus:outline-none
                                focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white"
              type="text"
              placeholder="Enter Username"
              value={details.username}
              onChange={handleRegisterChange}
              name="username"
            />
            <label>Email</label>
            <input
              className="border-2 bg-[#41A7C8] rounded text-center focus:outline-none
                                focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white"
              type="text"
              placeholder="Enter Email"
              value={details.email}
              onChange={handleRegisterChange}
              name="email"
            />
            <label>Password</label>
            <input
              className="border-2 bg-[#41A7C8] rounded text-center focus:outline-none
                                focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white"
              type="text"
              placeholder="Enter Password"
              value={details.password}
              onChange={handleRegisterChange}
              name="password"
            />
            <label>Confirm Password</label>
            <input
              className="border-2 bg-[#41A7C8] rounded text-center align-center focus:outline-none
                                focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white"
              type="text"
              placeholder="Enter Confirm Password"
              value={details.confPassword}
              onChange={handleRegisterChange}
              name="confPassword"
            />
            <label>Designation</label>
            <input
              className="border-2 bg-[#41A7C8] rounded text-center focus:outline-none
                                focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white"
              type="text"
              placeholder="Enter Designation"
              value={details.designation}
              onChange={handleRegisterChange}
              name="designation"
            />

            <button
              type="submit"
              className="bg-[#41A7C8] mt-5 ml-32 mb-5 w-28 h-8 rounded-lg
                                  hover:bg-[#fff] hover:border-2
                                  hover:transition ease-in-out"
            >
              Sign Up
            </button>
          </form>
          {error && <p className="text-[#8b0000]">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Register;
