import React, { useState } from "react";
import Calendar from "../calendar/Calendar";
import './dashboard.css'
import Sidebar from "../sidebar/Sidebar";

function Dashboard() {
  return (
    <>
      <div className="flex justify-between h-screen">
       <Sidebar/>
        <section className="dashboard flex flex-row items-start flex-1 overflow-hidden p-6 gap-4">
          <div className="dashboard__left w-6/12 h-full">
            <div className="dashboard__info grid grid-cols-3 gap-4 rounded-xl shadow-md" style={{ background: 'linear-gradient(to bottom right, #60A5FA, #3B82F6)' }}>
              <div className="text-center py-4">
                <h2 className="text-2xl text-white">Welcome To Portal</h2>
                <span className="text-white text-lg">Admin.</span>
              </div>
              <div className="py-4">
                <h4 className="text-white text-lg">Current Month LOP</h4>
                <p className="text-white">2.0 Days Leave</p>
              </div>
              <div className="py-4">
                <h4 className="text-white text-lg">Leave Balance</h4>
                <p className="text-white">1.0 Days Absent</p>

              </div>
            </div>
            <hr className="my-3" />
            <Calendar />
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
