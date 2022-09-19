import React from "react";

const Service = ({ service }) => {
  const { name, desc, img } = service;
  return (
    <>
      <div className="card  bg-base-100 shadow-xl mt-4">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Service;