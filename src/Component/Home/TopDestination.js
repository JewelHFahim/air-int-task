import React from 'react';
import td1 from "../Assets/td1.png";
import td2 from "../Assets/td2.png";
import td3 from "../Assets/td3.png";
import td4 from "../Assets/td4.png";
import td5 from "../Assets/td5.png";
import td6 from "../Assets/td6.png";

const TopDestination = () => {

    const BlgCnt = " w-[340px] lg:w-[380px] h-[279px] relative";
    const TitleCnt = 'absolute top-[90px] left-[100px] text-[48px] text-white';

    return (
        <div className='mt-[81px] px-5 lg:px-[103px] w-screen'>

        <h1 className='text-[38px] lg:text-[48px]'>Top Destinations</h1>

        <div className=' flex justify-between'>
        <p className='text-xl'>Lorem ipsum dolor sit amet.</p>
        <p className='mr-8 hidden lg:block'>View All Destination</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-[40px]'>

        <div className={BlgCnt}>
            <img src={td1} className="blur-[1px]" alt="" />
            <p className={TitleCnt} >America</p>
        </div>

        <div className={BlgCnt} >
            <img src={td2} className="blur-[1px]" alt="" />
            <p className={TitleCnt}>Maldives</p>
        </div>

        <div className={BlgCnt}>
            <img src={td3} className="blur-[1px]" alt="" />
            <p className={TitleCnt}>Africa</p>
        </div>

        <div className={BlgCnt}>
            <img src={td4} className="blur-[1px]" alt="" />
            <p className={TitleCnt}>Japan</p>
        </div>

        <div className={BlgCnt}>
            <img src={td5} className="blur-[1px]" alt="" />
            <p className={TitleCnt}>Australia</p>
        </div>

        <div className={BlgCnt}>
            <img src={td6} className="blur-[1px]" alt="" />
            <p className={TitleCnt}> India</p>
        </div>

        </div>
        </div>
    );
};

export default TopDestination;