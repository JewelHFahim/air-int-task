import React from "react";
import img1 from "../Assets/rb1.png";
import img2 from "../Assets/rb2.png";
import img3 from "../Assets/rb3.png";
import img4 from "../Assets/wr1.png";
import img5 from "../Assets/wr2.png";
import img6 from "../Assets/ad.png";
import { AiOutlineMail } from 'react-icons/ai';


const RecentBlogs = () => {
  return (
      <div className="mt-[81px] px-10 lg:px-[103px] w-screen">
        <h1 className="text-[38px] lg:text-[48px]">Recent Blog Pots</h1>
        <div className=" flex justify-between">
          <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-[40px]">

        <div className=" shadow-xl lg:mr-[40px] relative mb-5">
        <img src={img1} style={{ width: "382px", height: "252px" }} alt="" />
        <button className="btn btn-sm bg-[#FF3B00] absolute top-5 left-5 border-0">Stream</button>
        <div className="mt-[33px] flex items-center">
            <img src={img4} style={{ width: "52px", height: "52px" }} alt="" />

            <p className="text-xl font-semibold ml-[15px]">June 31st by Admin</p>
        </div>
        <p className="mt-[15px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quasi saepe ipsum!</p>
        </div>

        <div className=" shadow-xl lg:mr-[40px] relative mb-5">
        <img src={img2} style={{ width: "382px", height: "252px" }} alt="" />
        <button className="btn btn-sm bg-[#FF3B00] absolute top-5 left-5 border-0">Stream</button>
        <div className="mt-[33px] flex items-center">
            <img src={img5} style={{ width: "52px", height: "52px" }} alt="" />
            <p className="text-xl font-semibold ml-[15px]">June 31st by Admin</p>
        </div>
        <p className="mt-[15px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quasi saepe ipsum!</p>
        </div>

        <div className="shadow-xl lg:mr-[40px]  relative mb-5">
        <img src={img3} style={{ width: "382px", height: "252px" }} alt="" />
        <button className="btn btn-sm absolute top-5 left-5 border-0">Press</button>
        <div className="mt-[33px] flex items-center">
            <img src={img4} style={{ width: "52px", height: "52px" }} alt="" />
            <p className="text-xl font-semibold ml-[15px]">June 31st by Admin</p>
        </div>
        <p className="mt-[15px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quasi saepe ipsum!</p>
        </div>
        </div>

        <div className="mt-[80px] relative w-[1150px] h-[300px] hidden lg:block">
            <img src={img6}  alt="" />
            <div className="absolute top-1/2 px-[40px] flex items-center justify-center">
                <p className="text-[24px] font-semibold text-white mr-[35px]">
                Newsletter <br />
                <span className="text-[16px] font-normal">Sign uUp to recieve the best offer</span>
                 </p>
                 <input type="text" placeholder="Destination" className="input input-bordered bg-black w-[300px] opacity-[.5] mr-[35px]" />
                 <input type="text" placeholder="Email" className="input input-bordered  w-[300px] bg-black opacity-[.5] mr-[30px]" />
                 <p className="border border-red-500 w-[68px] h-[68px] rounded-full bg-[#FF3B00] p-5 "><AiOutlineMail className="text-2xl text-white"/></p>

            </div>
        </div>
      </div>
  );
};

export default RecentBlogs;
