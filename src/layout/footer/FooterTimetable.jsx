import React from "react";

import { timeTable } from "../../Data";

import "./FooterTimetable.css";

const FooterTimetable = () => {
  return (
    <div className="FooterTimetable">
      {timeTable.map((item) => (
        <div className="TimetableItem" key={item.name}>
          <p className="Timetable-day">{item.name}</p>
          <p className="Timetable-period">{item.period}</p>
        </div>
      ))}
    </div>
  );
};

export default FooterTimetable;
