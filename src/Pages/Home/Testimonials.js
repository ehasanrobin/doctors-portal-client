import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import Testimonial from "./Testimonial";
const Testimonials = () => {
  const reviews = [
    {
      name: "john doe",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laudantium!",
      location: "california",
      img: people1,
    },
    {
      name: "john doe",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laudantium!",
      location: "california",
      img: people1,
    },
    {
      name: "john doe",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laudantium!",
      location: "california",
      img: people1,
    },
  ];
  return (
    <section>
      <div className="container mx-auto lg:px-12">
        <div className="flex justify-between">
          <div>
            <sub className="text-xl text-primary font-bold">Testimonials</sub>
            <h3 className="text-3xl">What Out parents Says</h3>
          </div>
          <img src={quote} className=" w-16 lg:w-44" alt="" />
        </div>
        <div className="grid lg:grid-cols-3 gap-4 justify-center mx-auto">
          {reviews.map((review, index) => (
            <Testimonial review={review} key={index}></Testimonial>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
