import React from 'react';
import Twitter from "../../assets/twitter.png"
import Facebook from "../../assets/facebook.png"
import Instagram from "../../assets/instagram.png"


function Odd({status}) {
  return (
    <div className={`${status ? "absolute bottom-[37px] hidden md:flex md:flex-col ": " flex flex-col mt-6 md:hidden items-center "}`}>
      <div className='flex items-center w-[100px] justify-between'>
        <img src={Facebook} alt='' className=' h-[14px] w-[14px] ' />
        <img src={Instagram} alt='' className='h-[14px] w-[14px] '/>
        <img src={Twitter} alt='' className='h-[14px] w-[14px]' />
      </div>
      <span className={`items-center font-rose ${status ? "mt-[55px] md:mt-[20px] ": " mt-[20px]"}`}>2022 Metabnb</span>
    </div>
  );
}

export default Odd;
