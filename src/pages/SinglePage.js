import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SingleBlog from "../components/blog/SingleBlog";
import InnerBanner from "../components/innerBanner/InnerBanner";
import { featuredPosts } from "../content/BolgContent";
function SinglePage(props) {
  const { id } = useParams();
  return (
    <>
      <Header />
      <InnerBanner Bannertext={featuredPosts[id - 1].title} />
      <SingleBlog />
      <Footer />
    </>
  );
}

export default SinglePage;
