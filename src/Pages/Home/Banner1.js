import React from "react";
import treatment from "../../assets/images/treatment.png";
const Banner1 = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col md:flex-row">
        <img src={treatment} className="w-1/3 rounded-lg shadow-2xl" />
        <div className="max-w-xl px-4">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
