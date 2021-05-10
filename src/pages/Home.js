import React from "react";
import Available from "../components/availableSoon/Available";
import Features from "../components/features/Features";
import Header from "../components/header/Header";
import HeroBanner from "../components/heroBanner/HeroBanner";
import IntroArea from "../components/IntroArea/IntroArea";
import Footer from "../components/footer/Footer";
import Counter from "../components/counter/Counter";
import OurApp from "../components/ourApp/OurApp";
import DesVideo from "../components/desVideo/DesVideo";
import Price from "../components/pricePlan/Price";
import Easily from "../components/easily/Easily";
import Clients from "../components/clients/Clients";
import Notification from "../components/notification/Notification";

function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Features />
      <Available />
      <IntroArea />
      <Counter />
      <OurApp />
      <DesVideo />
      <Price />
      <Easily />
      <Clients />
      <Notification />
      <Footer />
    </div>
  );
}

export default Home;
