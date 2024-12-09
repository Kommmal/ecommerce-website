import React from 'react'
import TopSellingCard from './TopSellingCard'

const TopSelling = () => {
  return (
    <div className='my-[70px]'>
      <div className="w-[80%] mx-auto my-0">
        <h1 className='text-2xl font-bold text-center'>Top Selling</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[50px] gap-x-9 gap-y-10">
          <TopSellingCard
            id='1'
            image="/images/Frame 32 (1).png"
            name="Vertical Stripped Shirt"
            price={120}
            previousPrice={160}
            rating={88}
          />
          <TopSellingCard
            id='2'
            image="/images/Frame 33 (1).png"
            name="Courage Graphic T-shirt"
            price={960}
            previousPrice={1160}
            rating={75}
          />
          <TopSellingCard
            id='3'
            image="/images/Frame 34 (1).png"
            name="Loose Fit Bermuda Shorts"
            price={370}
            previousPrice={400}
            rating={99}
          />
          <TopSellingCard
            id='4'
            image="/images/Frame 38 (1).png"
            name="Faded Skinny Jeans"
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

export default TopSelling
