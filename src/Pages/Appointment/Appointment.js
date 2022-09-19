import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import BookAppointment from "./BookAppointment";
const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <>
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>
      <BookAppointment selected={selected}></BookAppointment>
    </>
  );
};

export default Appointment;
