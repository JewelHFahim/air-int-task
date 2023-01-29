import React from "react";
import slide1 from "../Assets/img1.jpg";
import slide2 from "../Assets/img2.jpg";
import slide3 from "../Assets/img3.jpg";
import slide4 from "../Assets/img4.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { VscCircleFilled } from "react-icons/vsc";
import Navbar from "./Navbar";
import HeaderBottom from "./HeaderBottom";
import "./Header.css";

const Header = () => {

  const ButtonContainer ="absolute flex transform -translate-y-1/2 right-5 lg:right-[126.85px] bottom-10 lg:bottom-[130px]";
  const Arrbtn = "btn btn-circle  bg-[#C2B9B9] border-none";
  const Carousel = "carousel-item relative w-full bg-black overflow-hidden";
  const Nav = <div className="absolute top-12 flex justify-center w-screen lg:w-full overlay bg-opacity-60"><Navbar></Navbar></div>;

  const TopNav = <div className="absolute top-10 lg:flex justify-center w-full hidden">
                  <div className="flex justify-between w-full font-bold text-white ml-[244px] mr-[126px]">
                    <div className="flex">
                      <small className="mr-[21px]">Support</small>
                      <small className="mr-[21px] flex items-center">USD <AiOutlineDown className="ml-1"/> </small>
                      <small className="mr-[21px] flex items-center">EN <AiOutlineDown className="ml-1"/></small>
                    </div>
                    <small>Sign Up/ Sign In</small>
                  </div>
                </div>


  return (

    <div className="relative w-screen">

    <div className="carousel w-screen lg:w-[1441px] lg:h-[732px]">

      <div id="slide1" className={Carousel}>
        <img className=" w-screen lg:w-full h-screen lg:h-[732px] opacity-[0.6]" src={slide1} alt="" />
        {TopNav}
        {Nav}
        <div className=" absolute top-[200px] lg:top-1/2 text-white px-5 lg:px-20 w-[500px]">
          <small className=" flex lg:justify-end items-center"> <VscCircleFilled className='text-[#FF3B00] text-xl'/> United State of America</small>
          <h1 className="text-[96px] m-0 p-0 arizona">Arizona</h1>
          <p className="mb-4">Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Veniam, rerum!</p>
          <button className="btn btn-sm mr-4 bg-[#FF3B00]">Book Now</button>
          <button className="btn btn-sm bg-transparent border-0">Choose Tour</button>
        </div>
        <div className={ButtonContainer}>
          <a href="#slide4" className={`${Arrbtn} mr-[23.60px]`}><BsArrowLeft className="text-xl" /></a>
          <a href="#slide2" className={Arrbtn}><BsArrowRight className="text-xl" /></a>
        </div>
      </div>

      <div id="slide2" className={Carousel}>
        <img className=" w-screen lg:w-full  h-screen lg:h-[732px] opacity-[0.6]" src={slide2} alt="" />
        {TopNav}
        {Nav}
        <div className=" absolute top-[200px] lg:top-1/2 text-white px-5 lg:px-20 w-[500px]">
          <small className=" flex lg:justify-end items-center"> <VscCircleFilled className='text-[#FF3B00] text-xl'/> United State of America</small>
          <h1 className="text-[96px] m-0 p-0 arizona">Arizona</h1>
          <p className="mb-4">Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Veniam, rerum!</p>
          <button className="btn btn-sm mr-4 bg-[#FF3B00]">Book Now</button>
          <button className="btn btn-sm bg-transparent border-0">Choose Tour</button>
        </div>
        <div className={ButtonContainer}>
          <a href="#slide1" className={`${Arrbtn} mr-[23.60px]`}><BsArrowLeft className="text-xl" /></a>
          <a href="#slide3" className={Arrbtn}><BsArrowRight className="text-xl" /></a>
        </div>
      </div>

      <div id="slide3" className={Carousel}>
        <img className=" w-screen lg:w-full h-screen lg:h-[732px] opacity-[0.6]" src={slide3} alt="" />
        {TopNav}
        {Nav}
        <div className=" absolute top-[200px] lg:top-1/2 text-white px-5 lg:px-20 w-[500px]">
          <small className=" flex lg:justify-end items-center"> <VscCircleFilled className='text-[#FF3B00] text-xl'/> United State of America</small>
          <h1 className="text-[96px] m-0 p-0 arizona">Arizona</h1>
          <p className="mb-4">Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Veniam, rerum!</p>
          <button className="btn btn-sm mr-4 bg-[#FF3B00]">Book Now</button>
          <button className="btn btn-sm bg-transparent border-0">Choose Tour</button>
        </div>
        <div className={ButtonContainer}>
          <a href="#slide2" className={`${Arrbtn} mr-[23.60px]`}><BsArrowLeft className="text-xl" /></a>
          <a href="#slide4" className={Arrbtn}><BsArrowRight className="text-xl" /></a>
        </div>
      </div>

      <div id="slide4" className={Carousel}>
        <img className=" w-screen lg:w-full  h-screen lg:h-[732px] opacity-[0.6]" src={slide4} alt="" />
        {TopNav}
        {Nav}
        <div className=" absolute top-[200px] lg:top-1/2 text-white px-5 lg:px-20 w-[500px]">
          <small className=" flex lg:justify-end items-center"> <VscCircleFilled className='text-[#FF3B00] text-xl'/> United State of America</small>
          <h1 className="text-[96px] m-0 p-0 arizona">Arizona</h1>
          <p className="mb-4">Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Veniam, rerum!</p>
          <button className="btn btn-sm mr-4 bg-[#FF3B00]">Book Now</button>
          <button className="btn btn-sm bg-transparent border-0">Choose Tour</button>
        </div>
        <div className={ButtonContainer}>
          <a href="#slide3" className={`${Arrbtn} mr-[23.60px]`}><BsArrowLeft className="text-xl" /></a>
          <a href="#slide1" className={Arrbtn}><BsArrowRight className="text-xl" /></a>
        </div>
      </div>

    </div>

    <div className="absolute lg:left-0 lg:right-0 lg:bottom-[-179px]">
    <HeaderBottom></HeaderBottom>
    </div>
    </div>
  );
};

export default Header;
