import React from "react";

const Testimonial = ({ review }) => {
  const { name, desc, img, location } = review;
  return (
    <div className="card max-w-lg bg-base-100 shadow-xl border">
      <div className="card-body">
        <p>{desc}</p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary mr-5">
              <img src={img} />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold">{name}</h4>
            <h5>{location}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
