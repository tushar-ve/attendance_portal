import React from "react";

function CalendarNavbar() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();

  return (
    <div className="flex justify-around mb-6">
      <span>
        {months[today.getMonth()]}, {today.getFullYear()}
      </span>
      <span>{weekDays[today.getDay()]}</span>
    </div>
  );
}

export default CalendarNavbar;
