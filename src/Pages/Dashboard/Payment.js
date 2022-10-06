import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Lk1HnGmMwv6Rsbx6oYwu1ZdamamyHYGfjDWO43lkQl54eC4sS5xJykD1JUDJDZplU3DMLHo47H0UXYXVdl6f6m000tslYhRZA"
);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: appointment, isLoading } = useQuery("bookings", () =>
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) return <Loading></Loading>;
  const { name, email, date, phone, price, slot, treatment } = appointment;

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-success"> Hello {name}</h2>
              <p>Please Pay for {treatment}</p>
              <p>
                Your appointment on <span className="text-red-500">{date}</span>{" "}
                {slot}
              </p>
              <p>Please Pay ${price}</p>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
