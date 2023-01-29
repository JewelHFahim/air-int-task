import React from 'react';
import img1 from "../Assets/ft1.png";
import img2 from "../Assets/ft2.png";
import img3 from "../Assets/ft3.png";
import img4 from "../Assets/ft4.png";
import img5 from "../Assets/ft5.png";
import logo from "../Assets/logo.png";
import { BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineArrowUp, AiOutlineInstagram } from 'react-icons/ai';
import { FiFacebook, FiMail } from 'react-icons/fi';
import { CiTwitter } from 'react-icons/ci';
import { MdCopyright } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';
import { TiLocationOutline } from 'react-icons/ti';


const Footer = () => {
    return (
        <div className='mt-[81px] relative w-screen lg:w-full'>
        <div className=' lg:flex hidden'>
            <img style={{ width: "311px", height: "284px" }} src={img1} alt="" />
            <img style={{ width: "311px", height: "284px" }} src={img2} alt="" />
            <img style={{ width: "311px", height: "284px" }} src={img3} alt="" />
            <img style={{ width: "311px", height: "284px" }} src={img4} alt="" />
            <img style={{ width: "311px", height: "284px" }} src={img5} alt="" />
        </div>


        <footer className="footer px-12 py-20  text-white bg-black w-screen lg:w-full">
  <div>
    <img  style={{ width: "130px", height: "84px" }} src={logo} alt="" />

    <p>Air Int Providing reliable tech <br />  since 1992</p>
    <div className='bg-[#FF3B00] w-[300px] lg:w-[358px] h-[1px] mb-[60px]' ></div>
    <p className='text-xl flex items-center'> <BiPhoneCall className='mr-2 text-[#FF3B00]'/> +880 1611 66 4965</p>
    <p className='text-xl flex items-center'> <FiMail className='mr-2 text-[#FF3B00]'/> sulatya@gmail.com</p>
    <p className='text-xl flex items-center'> <TiLocationOutline className='mr-2 text-[#FF3B00] text-2xl' /> Usman center, Uttra-12</p>
  </div> 
  <div >
    <span className="footer-title text-white">Company</span> 
    <a href='#!' className="link link-hover text-[#D9D9D9]">About us</a> 
    <a href='#!' className="link link-hover text-[#D9D9D9]">Company Blogs</a> 
    <a href='#!' className="link link-hover text-[#D9D9D9]">Work with us</a>  
    <a href='#!' className="link link-hover text-[#D9D9D9]">Meet the company</a>
  </div> 

  <div >
    <span className="footer-title text-white">Exlore</span> 
    <a href='#!' className="link link-hover text-[#D9D9D9]">Acountb</a> 
    <a href='#!' className="link link-hover text-[#D9D9D9]">Legal</a> 
    <a href='#!' className="link link-hover text-[#D9D9D9]">Contact</a>  
    <a href='#!' className="link link-hover text-[#D9D9D9]">Privcy Policy</a>
  </div> 

  <div>
    <span className="text-[24px] font-[500] mb-[28px]">Newsletter</span> 
    <button className="btn btn-wide bg-[#BDB0B0] text-white">Email Address</button>
    <button className="btn btn-wide bg-[#FF3B00] text-white">Subscribe</button>
    <p className='text-[14px] flex items-center'><BsCheck2Circle className="mr-1 text-lg font-bold"/> I agree to all terms and conditions</p>
  </div>


</footer>

<div className='hidden lg:flex items-center w-1/2 h-[100px] absolute right-0 bottom-0 bg-white rounded-tl-lg'>
  <p className='w-[100px]  h-[100px] p-10 bg-[#FF3B00] text-center mr-5 rounded-tl-lg'><AiOutlineArrowUp className='text-2xl text-white'/></p>

  <div className='flex items-center w-full justify-between'>
  <div className='flex items-center text-xl'>
    <FiFacebook className='mr-2'/>
    <CiTwitter className='mr-2'/>
    <AiOutlineInstagram className='mr-2'/>
  </div>
  <p className='flex items-center mr-10'><MdCopyright/> All Copyright 2022, Sulatya</p>
  </div>

  </div>



            
        </div>
    );
};

export default Footer;