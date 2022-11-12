import React from 'react'
import image7 from "../../assets/image7.png"
import image8 from "../../assets/image8.png"
import image9 from "../../assets/image9.png"

function LearnMore() {
  return (
    <div className='relative  grid grid-cols-1 lg:grid-cols-2 bg-[#A02279] h-[400px] lg:h-[774px] m-auto'>
        <div className='relative flex  flex-col m-auto text-white font-rose'>
            <p className=' font-bold  text-[48px]'>Metabnb NFTs</p>
            <p className='leading-normal text-[18px] w-[380px] mt-[30px] z-40'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <button className='bg-white mx-auto py-[14px] w-[156px] mt-[58px] z-40 text-[#A02279]'>Learn more</button>
        </div>
        <div className='relative hidden lg:block '> 
            <img src={image7} alt="" className='absolute top-[267px] right-[350px] z-20' />
            <img src={image8} alt="" className='absolute top-[366px] right-[99px] z-30'/>
            <img src={image9} alt="" className='absolute top-[100px] right-[120px]' />
        </div>
    </div>
  )
}

export default LearnMore