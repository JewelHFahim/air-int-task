import React from "react";
import { GrLocation } from 'react-icons/gr';
import { FiUserCheck, FiUser } from 'react-icons/fi';
import { BiUserX } from 'react-icons/bi';


const HeaderBottom = () => {

    const Btn = 'py-2 border border-slate-300';
    const InputCtn = 'form-control w-[150px] mr-[28px]';
    const InputFld = 'input input-bordered';
    const IconFld = 'mr-1 text-xl';
    const LabelCtn ='label-text text-xl flex items-center';
    


  return (
    <div className="mx-auto text-center bg-white w-screen lg:w-[1047px] lg:h-[225px] rounded-[10px] shadow-lg">

      <div className="grid grid-cols-1 lg:grid-cols-6 text-xl font-semibold text-[#FF3B00]">
        <button className={`${Btn} bg-[#FF3B00] text-white lg:rounded-tl-[8px]`}>Hotel</button>
        <button className={Btn}>Flights</button>
        <button className={Btn}>Cars</button>
        <button className={Btn}>Packages</button>
        <button className={Btn}>Cruise</button>
        <button className={`${Btn} rounded-tr-[8px]`}>Holiday</button>
      </div>

      <div className=" hidden lg:flex text-black mt-[39px] mx-[14px]">
        <div className="form-control w-[280px] mr-[28px]">
            <label className="label"><span className={LabelCtn}> <GrLocation className={IconFld} />Going to</span></label>
            <input type="text" placeholder="Location here" className={InputFld} />
        </div>

        <div className={InputCtn}>
            <label className="label"><span className={LabelCtn}> <FiUserCheck className={IconFld} />Check In</span></label>
            <input type="text" placeholder="dd/mm/yy" className={InputFld} />
        </div>

        <div className={InputCtn}>
            <label className="label"><span className={LabelCtn}><BiUserX className={IconFld} />Check Out</span></label>
            <input type="text" placeholder="dd/mm/yy" className={InputFld}/>
        </div>
        
        <div className= {`${InputCtn} mr-[16px]`}>
            <label className="label"><span className={LabelCtn}><FiUser className={IconFld} />Travelers</span></label>
            <input type="text" placeholder="Travelers" className={InputFld} />
        </div>

        <div className="mt-[44px]">
            <button className=" w-[150px] h-[45px] text-xl font-semibold text-white rounded-[10px] bg-[#FF3B00]">Search</button>
        </div>

      </div>


    </div>
  );
};

export default HeaderBottom;
