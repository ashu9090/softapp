import React from "react";
import Header from "../components/header/Header";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Footer from "../components/footer/Footer";
import ContactBox from "../components/ContactDetails/ContactBox";
function Contact(props) {
  return (
    <>
      <Header />
      <InnerBanner Bannertext="Contact Us" />
      <ContactBox />
      <Footer />
    </>
  );
}

export default Contact;
