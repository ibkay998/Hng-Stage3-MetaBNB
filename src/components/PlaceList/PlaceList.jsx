import React from 'react'
import Card from '../Card/Card'
import frame151 from '../../assets/frame151.png'

function PlaceList() {
    const lists=[frame151,frame151,frame151,frame151,frame151,frame151,frame151,frame151,frame151,frame151,frame151,frame151,frame151,frame151,frame151,frame151]
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