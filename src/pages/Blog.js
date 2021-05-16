import React from "react";
import Header from "../components/header/Header";
import InnerBanner from "../components/innerBanner/InnerBanner";
import Footer from "../components/footer/Footer";
import BlogMain from "../components/blog/BlogMain";
function Blog(props) {
  return (
    <>
      <Header />
      <InnerBanner Bannertext="Blog" />
      <BlogMain />
      <Footer />
    </>
  );
}

export default Blog;
