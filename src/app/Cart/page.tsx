import React from 'react';
import Image from 'next/image';
import { FaTag, FaTrash } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const page = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-9 my-10">
      <h1 className="text-sm sm:text-lg">
        <Link href="/">Home</Link> / <Link href="/Cart">Cart</Link>
      </h1>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold">YOUR CART</h1>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-[60%] flex flex-col gap-6 border-2 px-5 py-3 rounded-lg">
          {/* Product Item 1 */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Image
              src="/images/Frame 1.png"
              alt="Gradient Graphic T-shirt"
              width={124}
              height={110}
              className="w-full sm:w-[20%]"
            />
            <div className="w-full sm:w-[70%] flex flex-col gap-5">
              <div className="flex justify-between">
                <h1 className="text-lg sm:text-xl font-semibold">Gradient Graphic T-shirt</h1>
                <FaTrash size={20} color="orange" />
              </div>
              <div>
                <p>
                  Size: <span className="text-gray-500">Large</span>
                </p>
                <p>
                  Color: <span className="text-gray-500">White</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold">$145</h1>
                <div className="flex text-gray-500">
                  <button className="border-2 border-r-gray-300 bg-gray-200 rounded-l-[40px] px-3 py-1 sm:px-4 sm:py-2">-</button>
                  <button className="border-2 bg-gray-200 px-3 py-1 sm:px-4 sm:py-2">1</button>
                  <button className="border-2 bg-gray-200 border-l-gray-300 rounded-r-[40px] px-3 py-1 sm:px-4 sm:py-2">+</button>
                </div>
              </div>
            </div>
          </div>
          <hr />

          {/* Product Item 2 */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Image
              src="/images/Frame 2.png"
              alt="Checkered Shirt"
              width={124}
              height={110}
              className="w-full sm:w-[20%]"
            />
            <div className="w-full sm:w-[70%] flex flex-col gap-3">
              <div className="flex justify-between">
                <h1 className="text-lg sm:text-xl font-semibold">Checkered Shirt</h1>
                <FaTrash size={20} color="orange" />
              </div>
              <div>
                <p>
                  Size: <span className="text-gray-500">Large</span>
                </p>
                <p>
                  Color: <span className="text-gray-500">White</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold">$180</h1>
                <div className="flex text-gray-500">
                  <button className="border-2 border-r-gray-300 bg-gray-200 rounded-l-[40px] px-3 py-1 sm:px-4 sm:py-2">-</button>
                  <button className="border-2 bg-gray-200 px-3 py-1 sm:px-4 sm:py-2">1</button>
                  <button className="border-2 bg-gray-200 border-l-gray-300 rounded-r-[40px] px-3 py-1 sm:px-4 sm:py-2">+</button>
                </div>
              </div>
            </div>
          </div>
          <hr />

          {/* Product Item 3 */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Image
              src="/images/Frame 3.png"
              alt="Skinny Fit Jeans"
              width={124}
              height={110}
              className="w-full sm:w-[20%]"
            />
            <div className="w-full sm:w-[70%] flex flex-col gap-5">
              <div className="flex justify-between">
                <h1 className="text-lg sm:text-xl font-semibold">Skinny Fit Jeans</h1>
                <FaTrash size={20} color="orange" />
              </div>
              <div>
                <p>
                  Size: <span className="text-gray-500">Large</span>
                </p>
                <p>
                  Color: <span className="text-gray-500">White</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold">$240</h1>
                <div className="flex text-gray-500">
                  <button className="border-2 border-r-gray-300 bg-gray-200 rounded-l-[40px] px-3 py-1 sm:px-4 sm:py-2">-</button>
                  <button className="border-2 bg-gray-200 px-3 py-1 sm:px-4 sm:py-2">1</button>
                  <button className="border-2 bg-gray-200 border-l-gray-300 rounded-r-[40px] px-3 py-1 sm:px-4 sm:py-2">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="lg:w-[40%]">
          <div className="flex flex-col gap-5 px-5 py-5 w-full border-2 rounded-[20px]">
            <h2 className="text-xl sm:text-2xl font-bold">Order Summary</h2>
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>$565</p>
            </div>
            <div className="flex justify-between">
              <p>Discount (-20%):</p>
              <p>-$113</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Fee:</p>
              <p>$15</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Total:</p>
              <p>$467</p>
            </div>
            <div className="flex gap-3">
              <button className="w-[70%] border text-gray-500 py-2 px-2 rounded-[40px] flex gap-2">
                <FaTag size={20} /> Add promo code
              </button>
              <button className="w-[30%] border-2 border-black bg-black text-white rounded-[20px] py-2">
                Apply
              </button>
            </div>
            <button className="w-full border-2 border-black bg-black text-white rounded-[20px] flex justify-center py-2 gap-2">
              Go to Checkout <FiArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
