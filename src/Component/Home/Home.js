import React from "react";
import Footer from "../Footer/Footer";
import Header from "./Header";
import InterestingStories from "./InterestingStories";
import PopularTours from "./PopularTours";
import RecentBlogs from "./RecentBlogs";
import ReviewSection from "./ReviewSection";
import TopDestination from "./TopDestination";

const Home = () => {
  return (
    <div>
      <Header/>
      <PopularTours/>
      <TopDestination/>
      <InterestingStories/>
      <ReviewSection/>
      <RecentBlogs/>
      <Footer/>
    </div>
  );
};

export default Home;
