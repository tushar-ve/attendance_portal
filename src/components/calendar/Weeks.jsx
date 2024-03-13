import React from "react";

function Weeks() {
  return (
    <div
      className="flex justify-between items-center text-lg h-12 font-extrabold
                w-full bg-[#4f485c] text-slate-100"
    >
      <div className="w-12 text-center">Sun</div>
      <div className="w-12 text-center">Mon</div>
      <div className="w-12 text-center">Tue</div>
      <div className="w-12 text-center">Wed</div>
      <div className="w-12 text-center">Thu</div>
      <div className="w-12 text-center">Fri</div>
      <div className="w-12 text-center">Sat</div>
    </div>
  );
}

export default Weeks;
