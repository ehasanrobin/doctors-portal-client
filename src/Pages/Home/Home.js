import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Banner1 from "./Banner1";
import ContactForm from "./ContactForm";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Banner1></Banner1>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
};

export default Home;
