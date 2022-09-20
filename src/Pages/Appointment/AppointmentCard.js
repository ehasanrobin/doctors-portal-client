import React from "react";

const AppointmentCard = ({ service, setTreatment }) => {
  const { name, slots, price } = service;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">{name}</h2>

        <p className={slots.length === 0 ? "text-red-500" : ""}>
          {slots.length ? slots[0] : "Try another date"}
        </p>
        <p>{slots.length} slots available</p>
        <h3 className="text-xl">price: {price}</h3>
        <div className="card-actions">
          <label
            htmlFor="booking-modal"
            className="btn modal-button  btn-primary text-white"
            disabled={slots.length === 0 && "disabled"}
            onClick={() => setTreatment(service)}
          >
            BOOK NOW
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
