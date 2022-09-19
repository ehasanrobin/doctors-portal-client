import React from "react";

const InfoCard = (props) => {
  const { title, desc, img, bgClass } = props.info;
  return (
    <>
      <div className={`card  card-side  ${bgClass} text-white p-3 shadow-xl`}>
        <figure className="text-xxl">
          <img src={img} className="w-10" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
