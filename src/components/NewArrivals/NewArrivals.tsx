import React from 'react'
import NewArrivalsCard from './NewArrivalsCard'

const NewArrivals = () => {
  return (
    <div className='my-[70px]'>
      <div className="w-[80%] mx-auto my-0">
        <h1 className='text-2xl font-bold text-center '>New Arrivals</h1>
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[50px] gap-x-9 gap-y-6">
          <NewArrivalsCard
            id='1'
            image="/images/Frame 32.png"
            name="T-Shirt"
            price={120}
            previousPrice={160}
            rating={88}
          />
          <NewArrivalsCard
            id='2'
            image="/images/Frame 33.png"
            name="Skinny Fit Jeans"
            price={960}
            previousPrice={1160}
            rating={75}
          />
          <NewArrivalsCard
            id='3'
            image="/images/Frame 34.png"
            name="Checkered Shirt"
            price={370}
            previousPrice={400}
            rating={99}
          />
          <NewArrivalsCard
            id='4'
            image="/images/Frame 38.png"
            name="Sleeve Stripped Shirt"
            price={375}
            previousPrice={400}
            rating={99}
          />
        </div>
        <div className="w-[20%] mx-auto mt-[50px] xs:w-[80%]">
          <button className="border-black text-[15px] w-full px-10 py-3 border border-solid xs:w-full xs:rounded-[40px] ">
            View All
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewArrivals
