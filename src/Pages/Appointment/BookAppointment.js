import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import AppointmentCard from "./AppointmentCard";
import BookingModal from "./BookingModal";

const BookAppointment = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);

  const formatDate = format(selected, "PP");
  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery(["available", formatDate], () =>
    fetch(
      `https://doctors-portal-server-10001.herokuapp.com/available?date=${formatDate}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container lg:max-w-7xl mx-auto">
      <div className="text-center pt-12">
        <h4 className="text-2xl font-bold">
          Book Appointment on {format(selected, "PP")}
        </h4>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        {services?.map((service) => (
          <AppointmentCard
            service={service}
            key={service._id}
            setTreatment={setTreatment}
          ></AppointmentCard>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={selected}
          setTreatment={setTreatment}
          refetch={refetch}
          treatment={treatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default BookAppointment;
