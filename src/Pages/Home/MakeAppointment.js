import React from "react";
import appoingMentBg from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
const MakeAppointment = () => {
  return (
    <section
      className="my-40"
      style={{
        backgroundImage: `url(${appoingMentBg})`,
      }}
    >
      <div className="hero sm:p-5 lg:p-0">
        <div className="hero-content flex lg:flex-row p-0">
          <img
            src={doctor}
            className=" w-1/2 hidden lg:block h-full rounded-lg mt-[-120px]  "
          />
          <div className="text-white">
            <sub className="text-primary text-xl py-2">Appointment</sub>
            <h1 className="text-5xl font-bold text-4xl pt-3">
              Make an appointment Today
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
