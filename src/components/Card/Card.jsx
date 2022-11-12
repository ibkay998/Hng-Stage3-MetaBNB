import React from 'react'

import stars from "../../assets/stars.png"

function Card({image}) {
  return (
    <div className='flex flex-col w-[292px] h-[372px] rounded-lg border-2 border-[#D7D7D7] text-[12px]'>
        <div className='p-[15px]'>
            <img src={image} alt=""  />
        </div>
        <div className='px-[15px] font-rose flex justify-between'>
            <div className='flex flex-col'>
                <p>Dessert king</p>
                <p className='pt-2'>2345km away</p>
                <img src={stars} className='pt-2'/>
            </div>
            <div className='flex flex-col'>
                <p className='font-bold'>1MBT per night</p>
                <p className='pt-2'>1MBT per night</p>
            </div>
        </div>
    </div>
  )
}

export default Card