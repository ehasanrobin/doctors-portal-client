import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../FIrebase/Firebase.init";
const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user] = useAuthState(auth);
  const handleTreatment = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const slot = event.target.slot.value;
    const pname = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const bookings = {
      treatmentId: _id,
      treatment: name,
      price: price,
      name: pname,
      email: email,
      phone: phone,
      slot: slot,
      date: date,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast("your appoingment has been booked");
        } else {
          toast.error(`Already have an appointment on ${date} at ${slot}`);
        }
      });

    setTreatment(null);
    refetch();
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-primary">booking for {name}</h3>
          <form
            onSubmit={handleTreatment}
            className="grid grid-cols-1 gap-4 justify-items-center"
          >
            <h2 className="text-2xl font-bold">add booking</h2>

            <input
              type="text"
              name="date"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs"
            />

            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="name"
              disabled
              value={user.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user.email || ""}
              required
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="submit"
              value="submit"
              className="input bg-secondary text-white uppercase input-bordered w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
