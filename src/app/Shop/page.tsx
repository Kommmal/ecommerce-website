'use client'
import React, { useState } from 'react';
import { FaSlidersH, FaAngleRight } from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import NewArrivalsCard from '@/components/NewArrivals/NewArrivalsCard';

const Page = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-[95%] mx-5 my-10">
      {/* Breadcrumb */}
      <h1 className="text-xl">
        <Link href="/">Home</Link> / <Link href="/Shop">Shop</Link>
      </h1>

      <div className="flex my-24 justify-between">
        {/* Left Container */}
        <div
          className={`w-full sm:w-[25%] border-2 rounded-[20px] p-5 flex flex-col gap-6 left-container fixed bottom-0 bg-white z-50 transform ${
            showFilters ? 'translate-y-0' : 'translate-y-full'
          } transition-transform sm:static sm:translate-y-0`}
        >
          <div className="flex justify-between">
            <h1>Filters</h1>
            <FaSlidersH size={24} color="gray" onClick={() => setShowFilters(false)} className="cursor-pointer sm:hidden" />
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h1>Price</h1>
              <FaAngleRight size={24} color="black" className="rotate-[-90deg]" />
            </div>
            <div className="flex items-center w-full">
              <input
                type="range"
                className="w-full h-1 bg-gray-300 rounded-lg appearance-none focus:outline-none
                [&::-webkit-slider-runnable-track]:bg-transparent
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:w-4 
                [&::-webkit-slider-thumb]:h-4 
                [&::-webkit-slider-thumb]:bg-black 
                [&::-webkit-slider-thumb]:rounded-full
                [&::-moz-range-thumb]:w-4 
                [&::-moz-range-thumb]:h-4 
                [&::-moz-range-thumb]:bg-black 
                [&::-moz-range-thumb]:rounded-full
                [&::-ms-thumb]:w-4
                [&::-ms-thumb]:h-4
                [&::-ms-thumb]:bg-black
                [&::-ms-thumb]:rounded-full
                bg-gradient-to-r from-black via-black to-gray-300"
              />
            </div>
            <div className="flex justify-around">
              <p>200$</p>
              <p>2000$</p>
            </div>
          </div>

          {/* Color Filters */}
          <div className="flex flex-col gap-3">
            <p>Select Colors</p>
            <div className="flex flex-wrap gap-3">
              <div className="border-2 border-green-900 bg-green-900 rounded-full p-2 w-[40px] h-[40px]"></div>
              <div className="border-2 border-gray-800 bg-gray-800 rounded-full p-2 w-[40px] h-[40px]"></div>
              <div className="border-2 border-orange-900 bg-orange-900 rounded-full p-2 w-[40px] h-[40px]"></div>
              <div className="border-2 border-yellow-500 bg-yellow-500 rounded-full p-2 w-[40px] h-[40px]"></div>
              <div className="border-2 border-red-600 bg-red-600 rounded-full p-2 w-[40px] h-[40px]"></div>
              <div className="border-2 border-blue-500 bg-blue-500 rounded-full p-2 w-[40px] h-[40px]"></div>
              <div className="border-2 border-orange-600 bg-orange-600 rounded-full p-2 w-[40px] h-[40px]"></div>
              <div className="border-2 border-pink-600 bg-pink-600 rounded-full p-2 w-[40px] h-[40px]"></div>
              <div className="border-2 border-purple-600 bg-purple-600 rounded-full p-2 w-[40px] h-[40px]"></div>
              <div className="border-2 border-black bg-black rounded-full p-2 w-[40px] h-[40px]"></div>
            </div>
          </div>

          {/* Size Filters */}
          <div>
            <p className="flex flex-col gap-3">Choose Size</p>
            <div className="text-gray-500 flex flex-wrap gap-3">
              <button className="border-2 bg-gray-200 px-4 py-2 rounded-[40px] hover:bg-black hover:text-white hover:border-black">XX-Small</button>
              <button className="border-2 bg-gray-200 px-4 py-2 rounded-[40px] hover:bg-black hover:text-white hover:border-black">X-Small</button>
              <button className="border-2 bg-gray-200 px-4 py-2 rounded-[40px] hover:bg-black hover:text-white hover:border-black">Small</button>
              <button className="border-2 bg-gray-200 px-4 py-2 rounded-[40px] hover:bg-black hover:text-white hover:border-black">Medium</button>
              <button className="border-2 bg-gray-200 px-4 py-2 rounded-[40px] hover:bg-black hover:text-white hover:border-black">Large</button>
              <button className="border-2 bg-gray-200 px-4 py-2 rounded-[40px] hover:bg-black hover:text-white hover:border-black">X-Large</button>
              <button className="border-2 bg-gray-200 px-4 py-2 rounded-[40px] hover:bg-black hover:text-white hover:border-black">XX-Large</button>
              <button className="border-2 bg-gray-200 px-4 py-2 rounded-[40px] hover:bg-black hover:text-white hover:border-black">3X-Large</button>
              <button className="border-2 bg-gray-200 px-4 py-2 rounded-[40px] hover:bg-black hover:text-white hover:border-black">4X-Large</button>
            </div>
          </div>

        </div>

        {/* Right Container */}
        <div className="w-full sm:w-[70%]">
          {/* Top Bar */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Casual</h1>
            <p className="hidden sm:block">
              Showing 1-10 of 100 Products Sort by:
              <span className="font-bold">Most Popular</span>
              <FaAngleRight size={24} color="black" className="rotate-[90deg]" />
            </p>
            <FaSlidersH
              size={24}
              color="black"
              className="block sm:hidden cursor-pointer"
              onClick={() => setShowFilters(true)}
            />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 gap-x-6 gap-y-6">
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
            <NewArrivalsCard
            id='1'
            image="/images/Frame 32 (1).png" 
            name="T-Shirt"
            price={120}
            previousPrice={160}
            rating={88}

            />
            <NewArrivalsCard
            id='2'
            image="/images/Frame 33 (1).png" 
            name="Skinny Fit Jeans"
            price={960}
            previousPrice={1160}
            rating={75}

            />
            <NewArrivalsCard
            id='3'
            image="/images/Frame 34 (1).png" 
            name="Checkered Shirt"
            price={370}
            previousPrice={400}
            rating={99}

            />
            <NewArrivalsCard
            id='4'
            image="/images/Frame 38 (1).png" 
            name="Sleeve Stripped Shirt"
            price={375}
            previousPrice={400}
            rating={99}
            />
            <NewArrivalsCard
            id='1'
            image="/images/Frame 32 (2).png" 
            name="T-Shirt"
            price={120}
            previousPrice={160}
            rating={88}

            />
            <NewArrivalsCard
            id='2'
            image="/images/Frame 33 (2).png" 
            name="Skinny Fit Jeans"
            price={960}
            previousPrice={1160}
            rating={75}

            />
            <NewArrivalsCard
            id='3'
            image="/images/Frame 34 (2).png" 
            name="Checkered Shirt"
            price={370}
            previousPrice={400}
            rating={99}

            />
            <NewArrivalsCard
            id='4'
            image="/images/Frame 38 (2).png" 
            name="Sleeve Stripped Shirt"
            price={375}
            previousPrice={400}
            rating={99}
            />
          </div>

          {/* Pagination */}
          <div className="flex justify-between mt-10">
            <button className="flex gap-2 border-2 px-4 py-2 rounded-md">
              <FiArrowLeft size={20} color="black" /> Previous
            </button>
            <div className="flex gap-3">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p className="text-xl">...</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
            </div>
            <button className="flex gap-2 border-2 px-4 py-2 rounded-md">
              <FiArrowRight size={20} color="black" /> Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
