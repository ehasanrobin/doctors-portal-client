import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chairBG from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
const AppointmentBanner = ({ selected, setSelected }) => {
  return (
    <div
      className="hero min-h-screen bg-base-200 "
      style={{
        backgroundImage: `url(${chairBG})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:max-w-xl rounded-lg shadow-2xl" />
        <div>
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
          <h4>you have selected {format(selected, "PP")}</h4>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
