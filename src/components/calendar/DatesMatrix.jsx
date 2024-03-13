import React, { useState } from "react";

function DatesMatrix({ dates }) {
  const attendance = [
    null,
    null,
    null,
    null,
    null,
    null,
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "AB",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "AB",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    "PR",
    null,
    null,
    null,
    null,
  ];
  console.log(attendance.length);

  console.log(dates);
  return (
    <div className="mb-6 mt-4">
      {dates.map((date, index) => (
        <div key={index} className="flex justify-between h-24">
          {date.map((day, dayIndex) => (
            <div
              key={`${index}-${dayIndex}`} // Combine index for unique key
              className={`aspect-square text-top text-right cursor-pointer p-1 mb-4 ${
                day
                  ? dayIndex % 2 === 0
                    ? "bg-[#a9afac7a]"
                    : "bg-[#a9afac7a]"
                  : "bg-white"
              }`}
            >
              {day}
              {day ? (
                <div
                  className={`text-center ${
                    attendance[index * 7 + dayIndex] === "PR"
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {attendance[index * 7 + dayIndex]}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DatesMatrix;
