import React, { useState } from "react";

function CalendarNavbar() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Handle month change
  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  // Handle year change
  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  return (
    <div className="border rounded-lg border-gray-300 shadow-md p-3 mb-3">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col items-center mb-1">
          <label htmlFor="month" className="mr-2">Month </label>
          <select id="month" value={selectedMonth} onChange={handleMonthChange} className="p-1 border border-gray-300 rounded-md focus:outline-none w-52">
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="year" className="mr-2">Year </label>
          <select id="year" value={selectedYear} onChange={handleYearChange} className="p-1 border border-gray-300 rounded-md focus:outline-none w-52">
            {Array.from({ length: 10 }, (_, i) => currentYear + i).map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default CalendarNavbar;
