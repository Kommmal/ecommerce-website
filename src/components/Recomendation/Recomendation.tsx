import React from 'react'
import RecomendationCard from './RecomendationCard'

const Recomendation = () => {
  return (
    <div className='my-[70px]'>
    <div className="w-[80%] mx-auto my-0 ">
        <h1 className='text-5xl font-extrabold text-center xs:text-2xl'>You Might Also Like</h1>
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] mt-[50px] gap-x-9 xs:grid-cols-2 xs:gap-y-3 lg:grid-cols-4 lg:gap-x-9">
    <RecomendationCard
    id='1'
    image="/images/Frame 32 (2).png"
    name="Polo with Contrast Trims"
    price={212}
    previousPrice={242}
    rating={88}
    
    />
    <RecomendationCard
    id='2'
    image="/images/Frame 33 (2).png" 
    name="Gradiet Graphic T-shirt"
    price={145}
    previousPrice={170}
    rating={75}
  
    />
    <RecomendationCard
    id='3'
    image="/images/Frame 34 (2).png" 
    name="Polo with Tripping Details"
    price={180}
    previousPrice={200}
    rating={99}
   
    />
    <RecomendationCard
    id='4'
    image="/images/Frame 38 (2).png" 
    name="Black Stripped T-shirt"
    price={120}
    previousPrice={160}
    rating={99}
    />
    </div>
</div>
</div>
  )
}

export default Recomendation
