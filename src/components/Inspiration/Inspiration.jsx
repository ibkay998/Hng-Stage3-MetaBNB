import React from 'react'
import frame151 from "../../assets/frame151.png"
import Card from '../Card/Card'

function Inspiration() {
    const lists=[frame151,frame151,frame151,frame151,frame151,frame151,frame151,frame151]
  return (
    <div className='flex flex-col mx-auto  w-4/5 mt-[50px] mb-[53px]'>
        <p className='flex justify-center font-rose font-bold text-[48px]'>Inspiration for your next adventure</p>
        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 gap-[40px] lg:grid-cols-3 xl:grid-cols-4 mt-[40px]'>
            {lists.map((list,index)=>(
                <Card key={index} image={list}/>
            ))}
        </div>
    </div>
  )
}

export default Inspiration