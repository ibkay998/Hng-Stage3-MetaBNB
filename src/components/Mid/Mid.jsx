import React from 'react'
import Group12 from '../../assets/Group12.png'
import Group13 from '../../assets/Group13.png'
import Group14 from '../../assets/Group14.png'

function Mid() {
  return (
    <div className='w-full flex justify-around h-[70px] bg-[#A02279] items-center'>
        <div className='flex'>
            <img src={Group12} alt="" className='h-[25px] lg:h-[40px]' />
        </div>
        <div className='flex'>
            <img src={Group13} alt="" className='h-[25px] lg:h-[40px]'/>
        </div>
        <div className='flex'>
            <img src={Group14} alt="" className='h-[25px] lg:h-[40px]'/>
        </div>

    </div>
  )
}

export default Mid