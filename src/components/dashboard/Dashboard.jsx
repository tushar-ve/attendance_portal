import React, { useState } from "react";
import Calendar from "../calendar/Calendar";

function Dashboard() {
  return (
    <>
      <div className="flex justify-between h-screen">
        <section className="bg-[#41A7C8] w-48 h-screen">
          <img
            className="p-2"
            src="src\images\dashboard_logo.png"
            alt="RegisterLogo"
          />
          <hr />
          <div
            className="flex flex-col items-center justify-center
                        mt-10 h-auto"
          >
            <ul className="flex flex-col w-full h-full gap-10 font-bold">
              <li className="p-2 hover:bg-[#ffffff] cursor-pointer">
                Dashboard
              </li>
              <li className="p-2 hover:bg-[#ffffff] cursor-pointer">
                Employees
              </li>
              <li className="p-2 hover:bg-[#ffffff] cursor-pointer">
                Attendance
              </li>
              <li className="p-2 hover:bg-[#ffffff] cursor-pointer">Leaves</li>
              <li className="p-2 hover:bg-[#ffffff] cursor-pointer">
                Regularize
              </li>
            </ul>
          </div>
          <button
            className="bg-[#41A7C8] mt-16 w-28 h-8 rounded-lg
                        hover:bg-[#fff] font-bold
                        hover:transition ease-in-out
                        flex items-center justify-around"
          >
            <svg
              width="16"
              height="22"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V19C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20H1ZM11 14L16 10L11 6V9H5V11H11V14Z"
                fill="black"
              />
            </svg>
            Logout
          </button>
        </section>
        <section
          className="flex flex-row items-start flex-1 overflow-hidden
                            p-10 gap-40"
        >
          <div className="w-6/12 h-full">
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-[#41A7C8]">
                <h2 className="text-center">Welcome To Portal</h2>
                <span>Admin.</span>
              </div>
              <div className="bg-[#41A7C8]">
                <h4>Current Month LOP</h4>
                <p>2.0 Days Leave</p>
                <h3>View Calendar</h3>
              </div>
              <div className="bg-[#41A7C8]">
                <h4>Leave Balance</h4>
                <p>1.0 Days Absent</p>
                <h3>Apply Leave</h3>
              </div>
            </div>
            <hr />
            <Calendar />
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
