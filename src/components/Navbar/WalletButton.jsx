import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'


function WalletButton({name,icon}) {
  return (
    <div className='hover:bg-[#F8F9FA] w-full flex-col  flex cursor-pointer mt-[16px] border-2 border-[#CFD8DC] rounded-md'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <img src={icon} alt="" />
                <p className='font-sora ml-[16px]'>{name}</p>
            </div>
            <ChevronRightIcon/>
        </div>
    </div>
  )
}

export default WalletButton