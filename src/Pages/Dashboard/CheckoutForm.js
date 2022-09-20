import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [displayError, setDisplayError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transaction, setTransaction] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { _id, price, name, email, date } = appointment;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://doctors-portal-server-10001.herokuapp.com/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    const card = elements.getElement(CardElement);
    if (error) {
      setProcessing(false);
      setDisplayError(error.message);
    }

    //  confirm payment method
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setDisplayError(intentError?.message);
    } else {
      setDisplayError("");

      setTransaction(paymentIntent.id);
      setSuccess("payment completed");
      // backend api calll
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };

      fetch(
        `https://doctors-portal-server-10001.herokuapp.com/booking/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(payment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {displayError && <p className="text-red-500">{displayError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success}</p>
          <p className="text-orange-500">Your transaction Id: {transaction}</p>
        </div>
      )}
      <CardElement />

      <button
        type="submit"
        className="btn btn-success text-white"
        disabled={!stripe || !elements || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
