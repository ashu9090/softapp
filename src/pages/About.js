import React from "react";
import Header from "../components/header/Header";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Footer from "../components/footer/Footer";
import Easily from "../components/easily/Easily";
import Counter from "../components/counter/Counter";
import OurApp from "../components/ourApp/OurApp";
import Clients from "../components/clients/Clients";
import Notification from "../components/notification/Notification";
import IntroArea from "../components/IntroArea/IntroArea";
function About(props) {
  return (
    <>
      <Header />
      <InnerBanner Bannertext="About Us" />
      <Easily />
      <IntroArea />
      <Counter />
      <OurApp />
      <Clients />
      <Notification />
      <Footer />
    </>
  );
}

export default About;
