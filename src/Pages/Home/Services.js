import React from "react";
import cavity from "../../assets/images/cavity.png";
import floride from "../../assets/images/fluoride.png";
import whitining from "../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const services = [
    {
      name: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: floride,
    },
    {
      name: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      name: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitining,
    },
  ];
  return (
    <div className="container  mx-auto text-center my-28 lg:px-12">
      <div>
        <sub className="text-primary text-xl">OUR SERVICES</sub>
        <h2 className="text-secondary font-bold text-3xl">
          Services We Provide
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 justify-center mx-auto px-3">
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
