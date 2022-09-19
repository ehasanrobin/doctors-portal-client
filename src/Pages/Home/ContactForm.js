import React from "react";
import bgForm from "../../assets/images/appointment.png";
const ContactForm = () => {
  return (
    <section
      className="mt-32 p-32"
      style={{
        backgroundImage: `url(${bgForm})`,
      }}
    >
      <div className="text-center  max-w-lg mx-auto">
        <sub className="text-primary font-bold text-xl">contact us</sub>
        <h4 className="text-3xl text-white py-3">Stay Connected With Us</h4>
      </div>
      <div className="max-w-lg mx-auto mt-4">
        <form action="">
          <div className="mb-2">
            <input
              type="email"
              placeholder="Email"
              className="input w-full max-w-lg"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Subject"
              className="input w-full max-w-lg"
            />
          </div>
          <div className="mb-2">
            <textarea
              className="textarea w-full max-w-lg"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="mb-2">
            <input
              type="submit"
              value="Send"
              className="input w-full max-w-lg bg-primary text-white"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
