import React from 'react';
import frame1 from '../../assets/frame1.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';

function Header() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-4/5  mt-[100px] mx-auto mb-[100px]'>
      <div className='flex flex-col'>
        <div className='text-[38px] md:text-[56px] font-normal font-rose tracking-tight leading-tight md:leading-normal'>Rent a <span className='text-[#A02279] font-bold'>Place</span> away from <span className='text-[#A02279] font-bold'>Home</span> in the <span className='text-[#A02279] font-bold'>Metaverse</span></div>
        <div className='text-[24px] font-rose font-normal mt-[20px] md:mt-[48px]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</div>
        <div className='flex w-full mt-[48px]'>
            <input type="text" placeholder='Search for Location' className='border-2 rounded-tl-xl rounded-bl-xl border-r-0 text-[14px] text-[#B8B8B8] font-rose pl-[15px]  w-[390px] ' />
            <button className='w-[230px] h-[54px] bg-[#A02279] rounded-none grow-1 rounded-r-lg text-white'>Search</button>
        </div>
      </div>
      <div className='hidden lg:grid lg:h-[430px] lg:w-[470px] lg:grid-flow-col lg:grid-rows-8 lg:gap-2 ml-auto '>
        <img src={image4} className='row-start-2 row-end-5'/>
        <img src={image6} className='row-start-5 row-end-8'/>
        <img src={image3} className='row-start-1 row-end-4'/>
        <img src={image5} className='row-start-4 row-end-7'/>
      </div>
    </div>
  );
}

export default Header;
