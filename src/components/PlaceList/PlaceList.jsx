import React from 'react'
import Card from '../Card/Card'
import frame147 from "../../assets/Frame147.png"
import frame148 from "../../assets/Frame148.png"
import frame149 from "../../assets/Frame149.png"
import frame150 from "../../assets/Frame150.png"
import frame151 from "../../assets/Frame151.png"
import frame152 from "../../assets/Frame152.png"
import frame153 from "../../assets/Frame153.png"
import frame154 from "../../assets/Frame154.png"
import frame155 from "../../assets/Frame155-1.png"
import frame156 from "../../assets/Frame156.png"
import frame157 from "../../assets/Frame157.png"
import frame158 from "../../assets/Frame158.png"
import frame159 from "../../assets/Frame159.png"
import frame160 from "../../assets/Frame160.png"
import frame161 from "../../assets/Frame161.png"
import frame162 from "../../assets/Frame162.png"

function PlaceList() {
    const lists=[frame147,frame148,frame149,frame150,frame151,frame152,frame153,frame154,frame155,frame156,frame157,frame158,frame159,frame160,frame161,frame162]
    return (
      <div className='flex flex-col mx-auto w-full mb-[40px]'>
          <div className='grid  grid-cols-1 md:grid-cols-2 gap-[40px] lg:grid-cols-3 xl:grid-cols-4 mt-[40px]'>
              {lists.map((list,index)=>(
                  <Card key={index} image={list}/>
              ))}
          </div>
      </div>
    )
}

export default PlaceList