import React from "react";
import Header from "../components/header/Header";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Features from "../components/features/Features";
import Available from "../components/availableSoon/Available";
import IntroArea from "../components/IntroArea/IntroArea";
import Notification from "../components/notification/Notification";
import Clients from "../components/clients/Clients";
import Footer from "../components/footer/Footer";
function Feature(props) {
  return (
    <>
      <Header />
      <InnerBanner Bannertext="Features" />
      <Features />
      <Available />
      <IntroArea />
      <Clients />
      <Notification />
      <Footer />
    </>
  );
}

export default Feature;
