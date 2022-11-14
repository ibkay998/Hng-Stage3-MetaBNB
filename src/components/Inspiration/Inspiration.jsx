import React from 'react'
import frame151 from "../../assets/Frame151.png"
import frame152 from "../../assets/Frame152.png"
import frame153 from "../../assets/Frame153.png"
import frame154 from "../../assets/Frame154.png"
import frame155 from "../../assets/Frame147.png"
import frame156 from "../../assets/Frame148.png"
import frame157 from "../../assets/Frame149.png"
import frame158 from "../../assets/Frame150.png"
import Card from '../Card/Card'

function Inspiration() {
    const lists=[frame151,frame152,frame153,frame154,frame155,frame156,frame157,frame158]
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