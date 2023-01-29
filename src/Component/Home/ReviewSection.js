import React from 'react';
import img1 from "../Assets/rv1.png";
import img2 from "../Assets/rv2.png";
import img3 from "../Assets/rv3.png";
import { AiFillStar } from 'react-icons/ai';
import { VscCircleFilled } from 'react-icons/vsc';


const ReviewSection = () => {
    return (
        <div className='mt-[81px] px-5 w-screen lg:px-[140px]'>

        <div className='text-center'>
            <p className='text-[#FF3B00] text-[22px] lg:text-[32px]'>Testimonials and Review</p>
            <p className='text-[38px] lg:text-[48px]'>What They're Saying</p>
        </div>


        <div className='grid grid-cols-1 lg:grid-cols-3 mt-[53px]'> 


            <div className=' mb-10 lg:mr-[120px]'>
                <img src={img1} style={{ width: "240px", height: "240px" }} className="ml-10 lg:ml-0" alt="" />
                <div className='border border-slate-200 mt-[75px] p-5 shadow-xl'>
                <p className='flex justify-center'>
                <AiFillStar className='text-[#FF3B00] text-xl'/>
                <AiFillStar className='text-[#FF3B00] text-xl'/>
                <AiFillStar className='text-[#FF3B00] text-xl'/>
                <AiFillStar className='text-[#544E4E] text-xl'/>
                <AiFillStar className='text-[#544E4E] text-xl'/>
                </p>
                <p className='text-justify mt-[35px]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque assumenda cumque ipsam animi consequatur illo
                </p>
                <p className='text-xl font-semibold mt-[70px]'>Shirly Smith</p>
                <p className='text-[#FF3B00]'>CUSTOMER</p>
                </div>
            </div>

            <div className=' mb-10 lg:mr-[120px]'>
                <img src={img2} style={{ width: "240px", height: "240px" }} className="ml-10 lg:ml-0" alt="" />
                <div className='border border-slate-200 mt-[75px] p-5 shadow-xl'>
                <p className='flex justify-center'>
                <AiFillStar className='text-[#FF3B00] text-xl'/>
                <AiFillStar className='text-[#FF3B00] text-xl'/>
                <AiFillStar className='text-[#FF3B00] text-xl'/>
                <AiFillStar className='text-[#544E4E] text-xl'/>
                <AiFillStar className='text-[#544E4E] text-xl'/>
                </p>
                <p className='text-justify mt-[35px]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque assumenda cumque ipsam animi consequatur illo
                </p>
                <p className='text-xl font-semibold mt-[70px]'>Kevin Martin</p>
                <p className='text-[#FF3B00]'>CUSTOMER</p>
                </div>
            </div>

            <div className=' mb-10 lg:mr-[120px]'>
                <img src={img3} style={{ width: "240px", height: "240px" }} className="ml-10 lg:ml-0" alt="" />
                <div className='border border-slate-200 mt-[75px] p-5 shadow-xl'>
                <p className='flex justify-center'>
                <AiFillStar className='text-[#FF3B00] text-xl'/>
                <AiFillStar className='text-[#FF3B00] text-xl'/>
                <AiFillStar className='text-[#FF3B00] text-xl'/>
                <AiFillStar className='text-[#544E4E] text-xl'/>
                <AiFillStar className='text-[#544E4E] text-xl'/>
                </p>
                <p className='text-justify mt-[35px]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque assumenda cumque ipsam animi consequatur illo
                </p>
                <p className='text-xl font-semibold mt-[70px]'>Jacchica Brown</p>
                <p className='text-[#FF3B00]'>CUSTOMER</p>
                </div>
            </div>


        </div>

        <div className='flex justify-center mt-[30px]'>
        <VscCircleFilled className='text-[#FF3B00] text-3xl mr-4'/>
        <VscCircleFilled className='text-[#D9D9D9] text-3xl mr-4'/>
        <VscCircleFilled className='text-[#D9D9D9] text-3xl'/>
        </div>
            
        </div>
    );
};

export default ReviewSection;