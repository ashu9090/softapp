import React from "react";
import Header from "../components/header/Header";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Footer from "../components/footer/Footer";
function Blog(props) {
  return (
    <>
      <Header />
      <InnerBanner Bannertext="Blog" />
      <Footer />
    </>
  );
}

export default Blog;
