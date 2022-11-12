import React from 'react'
import Logo1 from "../../assets/Logo1.png"

import Odd from './Odd'

function Footer() {
    const lists=[
        {name:"Community",subs:["NFT","Token","Landlords","Discord"]},
        {name:"Places",subs:["Castle","Farms","Beach","Learn More"]},
        {name:"About Us",subs:["Road Map","Creators","Career","Contact Us"]}
    ]
    
  return (
    <div className='bg-black xl:h-[322px] w-full bottom-0 text-white grid grid-cols-1 md:grid-cols-4  justify-around'>
        <div className='grid md:justify-start md:flex md:flex-col justify-center mt-[62px] relative md:ml-[113px]'>
            <img src={Logo1} alt="" className='w-[188px]'/>
            <Odd status={true}/>
        </div>
        <div className='ml-[40px] sm:ml-[60px] grid grid-cols-3 md:col-span-3'>
            {lists.map((list,index)=>(
                <div key={index} className="flex flex-col  font-rose ml-4 mt-[62px]">
                    <p className='font-bold text-[18px]'>{list.name}</p>
                    {list.subs.map((sub,indexs)=>(
                        <a key={indexs} className="text-[14px] cursor-pointer pt-[18px]" >{sub}</a>
                    ))}
                </div>
            ))}
        </div>
        <Odd status={false}/>
        
        
        
    </div>
  )
}

export default Footer