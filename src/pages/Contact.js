import React from "react";
import Header from "../components/header/Header";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Footer from "../components/footer/Footer";
function Contact(props) {
  return (
    <>
      <Header />
      <InnerBanner Bannertext="Contact Us" />
      <Footer />
    </>
  );
}

export default Contact;
