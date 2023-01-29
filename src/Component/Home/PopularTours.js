import React from 'react';
import { BsArrowLeft, BsArrowRight, BsFillBookmarkFill } from 'react-icons/bs';
import { VscCircleFilled } from 'react-icons/vsc';
import { AiFillStar } from 'react-icons/ai';
import mp1 from "../Assets/mp1.png";
import mp2 from "../Assets/mp2.png";

const PopularTours = () => {
    return (
        <div className='mt-[300px] lg:mt-[230px] px-5 lg:px-[90px]'>

        <h1 className='text-[48px]'>Most Popular Tours</h1>

        <div className='flex justify-between'>
            <p className='text-xl'>Lorem ipsum dolor sit amet.</p>
        <div className='hidden lg:flex mr-[30px]'>
            <p className='mr-[80px]'>View All Tours</p>
            <a href="#slide1" className='btn btn-sm btn-circle  bg-[#C2B9B9] border-none mr-4'><BsArrowLeft className="text-xl" /></a>
            <a href="#slide1" className='btn btn-sm btn-circle  bg-[#C2B9B9] border-none'><BsArrowRight className="text-xl" /></a>
        </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 mt-[40px]'>

        <div className=" w-[330px] lg:w-[578px] lg:h-[361px]  rounded-xl relative bg-black mb-5">
            <img src={mp1} className="opacity-[0.6] " alt="" />
            <p className='absolute top-[35px] left-[35px] flex items-center text-white'> <VscCircleFilled className='text-[#FF3B00]'/> Australia</p>
            <p className='absolute top-[35px] right-[35px] bg-[#BDB0B0] p-[14px] rounded-full'><BsFillBookmarkFill className='text-2xl text-[#FF3B00]'/></p>
            <p className='absolute hidden lg:block top-[192px] left-[35px] text-[32px] text-white'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <p className='absolute bottom-[35px] px-[35px] text-xl text-white lg:flex items-center justify-between w-full'>
                <span>5 days | from $500</span>
                <span className='flex'>
                    <AiFillStar className='text-[#FF3B00]'/>
                    <AiFillStar className='text-[#FF3B00]'/>
                    <AiFillStar className='text-[#FF3B00]'/>
                    <AiFillStar className='text-[#544E4E]'/>
                    <AiFillStar className='text-[#544E4E]'/>
                </span>
                <span>3 Reviews</span>
            </p>
        </div>

        <div className=" w-[330px] lg:w-[578px] lg:h-[361px]  rounded-xl relative bg-black mb-5">
            <img src={mp2} className="opacity-[0.6] " alt="" />
            <p className='absolute top-[35px] left-[35px] flex items-center text-white'> <VscCircleFilled className='text-[#FF3B00]'/> North Africa</p>
            <p className='absolute top-[35px] right-[35px] bg-[#BDB0B0] p-[14px] rounded-full'><BsFillBookmarkFill className='text-2xl text-[#FF3B00]'/></p>
            <p className='absolute hidden lg:block top-[192px] left-[35px] text-[32px] text-white'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <p className='absolute bottom-[35px] px-[35px] text-xl text-white lg:flex items-center justify-between w-full'>
                <span>5 days | from $500</span>
                <span className='flex'>
                    <AiFillStar className='text-[#FF3B00]'/>
                    <AiFillStar className='text-[#FF3B00]'/>
                    <AiFillStar className='text-[#FF3B00]'/>
                    <AiFillStar className='text-[#544E4E]'/>
                    <AiFillStar className='text-[#544E4E]'/>
                </span>
                <span>2 Reviews</span>
            </p>
        </div>

        </div>
        
            
        </div>
    );
};

export default PopularTours;