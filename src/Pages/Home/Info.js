import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
const Info = () => {
  const infos = [
    {
      title: "Opening Hours",
      desc: "Lorem Ipsum is simply dummy text of the pri",
      img: clock,
      bgClass: "bg-primary",
    },
    {
      title: "Visit our Location",
      desc: "Brooklyn, NY 10036, United States",
      img: marker,
      bgClass: "bg-secondary",
    },
    {
      title: "Contact us Now",
      desc: "+000 123 456789",
      img: phone,
      bgClass: "bg-primary",
    },
  ];
  const bgSecondary = "bg-secondary";
  return (
    <div className="container py-5  mx-auto lg:px-12">
      <div className="grid lg:grid-cols-3 gap-4  ">
        {infos.map((info, index) => (
          <InfoCard
            info={info}
            key={index}
            bgSecondary={bgSecondary}
          ></InfoCard>
        ))}
      </div>
    </div>
  );
};

export default Info;
