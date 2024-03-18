import React from "react";
import CalendarNavbar from "./CalendarNavbar";
import Weeks from "./Weeks";
import DatesMatrix from "./DatesMatrix";

const generateDates = () => {
  const calendar = [[]];

  const today = new Date();
  const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  let week = 0;

  for (let i = 0; i <= startDate.getDay(); i++) {
    calendar[week].push(null);
  }
  for (let i = 1; i <= endDate.getDate(); i++) {
    if (calendar[week].length === 7) {
      week++;
      calendar[week] = [];
    }
    calendar[week].push(i);
  }
  while (calendar[week].length < 7) {
    calendar[week].push(null);
  }
  return calendar;
};

function Calendar() {
  const dates = generateDates();
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-300">
      <CalendarNavbar />
      <Weeks />
      <DatesMatrix dates={dates} />
    </div>
  );
}

export default Calendar;
