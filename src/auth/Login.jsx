import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../features/authentication/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();

  const { authTokens, isLoading, error } = useSelector((store) => store.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginSubmit(e) {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  }

  return (
    <>
      <div className="flex">
        <span>
          <img src="src\images\register_logo.png" alt="RegisterLogo" />
        </span>
        <hr className="flex-grow border-t mt-16 mr-16 border-[#41A7C8]" />
      </div>

      <div className="flex justify-around mt-10">
        <div
          className="relative border-2 box-border border-[#41A7C8] bg-white p-1 
                 w-3/12 h-[32rem] flex flex-col justify-center rounded ml-20 
                 mt-10"
        >
          <div className="flex flex-col  border-0 mb-5 w-full">
            <img
              className="w-1/4 border-none"
              src="src\images\register_logo.png"
              alt="RegisterLogo"
            />
          </div>
          <div className="text-center">
            <h2 className="underline text-[#41A7C8] font-bold	tracking-wider font-poppins">
              LOGIN
            </h2>
            <p>Beyond this wall lies your potential. Open it.</p>
          </div>
          <form onSubmit={handleLoginSubmit}>
            <div className="flex flex-col relative w-full p-6">
              <label>Email</label>
              <input
                className="border-2 bg-[#41A7C8] rounded text-center focus:outline-none  focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white"
                type="text"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Password</label>
              <input
                className="border-2 bg-[#41A7C8] rounded text-center focus:outline-none
                                focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white"
                type="text"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#41A7C8] mt-5 mb-5 w-28 h-8  rounded-lg
                                  hover:bg-[#fff] hover:border-2
                                  hover:transition ease-in-out"
              >
                LOGIN
              </button>
            </div>
          </form>
          {error && <p className="text-[#8b0000]">{error}</p>}
        </div>
        <div className="flex-col items-center justify-between h-full">
          <div className="w-80 flex-col items-center">
            <h1 style={{ color: "#044B62" }} className="underline font-bold">
              ATTENDANCE PORTAL
            </h1>
            <p className="mt-2">
              Having an attendance portal made tracking hours so much easier. It
              saved me time and reduced proper work stress.
            </p>
          </div>
          <div className="mt-20">
            <img src="src\images\login.png" alt="" className="h-1/4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
