import React from 'react';
import img1 from "../Assets/rs1.png";
import img2 from "../Assets/rs2.png";
import img3 from "../Assets/sp1.png";
import img4 from "../Assets/sp2.png";
import img5 from "../Assets/af1.png";
import img6 from "../Assets/af2.png";
import img7 from "../Assets/gr1.png";
import img8 from "../Assets/gr2.png";
import img9 from "../Assets/cl1.png";
import img10 from "../Assets/cl2.png";
import img11 from "../Assets/cl3.png";
import img12 from "../Assets/cl4.png";



const InterestingStories = () => {
    return (

        <div>

        <div className='mt-[81px] px-8 lg:px-[103px] w-screen'>
        <h1 className='text-[38px] lg:text-[48px]'>Interesting Stories</h1>
        <div className=' flex justify-between'>
        <p className='text-xl'>Watch and be inspired</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-[30px] mt-[40px]'>
        <div className=" relative">
            <img src={img1} style={{ width: "278px", height: "374px" }} className="blur-[1px]" alt="" />
            <img src={img2} alt="" style={{ width:"101px", height: "98px" }} className='absolute top-[150px] left-[90px] text-[18px] text-white' />
            <p className='text-2xl text-white absolute top-[250px] left-[100px]'>Russia</p>
        </div>

        <div className=" relative">
            <img src={img3} style={{ width: "278px", height: "374px" }} className="blur-[1px]" alt="" />
            <img src={img4} alt="" style={{ width:"101px", height: "98px" }} className='absolute top-[150px] left-[90px] text-[18px] text-white' />
            <p className='text-2xl text-white absolute top-[250px] left-[100px]'>South Pole</p>

        </div>
        
        <div className=" relative">
            <img src={img5} style={{ width: "278px", height: "374px" }} className="blur-[1px]" alt="" />
            <img src={img6} alt="" style={{ width:"101px", height: "98px" }} className='absolute top-[150px] left-[90px] text-[18px] text-white' />
            <p className='text-2xl text-white absolute top-[250px] left-[100px]'>Africa</p>

        </div>

        <div className=" relative">
            <img src={img7} style={{ width: "278px", height: "374px" }} className="blur-[1px]" alt="" />
            <img src={img8} alt="" style={{ width:"101px", height: "98px" }} className='absolute top-[150px] left-[90px] text-[18px] text-white' />
            <p className='text-2xl text-white absolute top-[250px] left-[100px]'>Greece</p>

        </div>

        </div>

            
        </div>

        {/* Parterns */}
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-[78px] w-screen lg:w-full text-center mt-[80px] px-10 lg:px-[144px] py-[80px] bg-[#D9D9D9]'>
            <img style={{ width: "250px", height: "53px" }}  src={img9} alt="" />
            <img style={{ width: "239px", height: "62px" }}  src={img10} alt="" />
            <img style={{ width: "232px", height: "69px" }}  src={img11} alt="" />
            <img style={{ width: "206px", height: "73px" }}  src={img12} alt="" />
        </div>
        

        </div>
    );
};

export default InterestingStories;