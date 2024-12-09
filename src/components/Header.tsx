"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="border-b-2">
      <div className="w-[90%] h-[15vh] mx-auto my-0 flex justify-between items-center">
        <div className="flex items-center gap-5 ">
          <div className="lg:hidden">
            {menuOpen ? (
              <FiX size={30} onClick={toggleMenu} className="cursor-pointer" />
            ) : (
              <FiMenu size={30} onClick={toggleMenu} className="cursor-pointer" />
            )}
          </div>
          <div className="text-4xl font-extrabold">
            <h1>SHOP.CO</h1>
          </div>
        </div>
        <div
          className={`fixed top-[15%] left-0 h-[1000px] bg-white w-[70%] shadow-lg transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:flex lg:items-center lg:justify-center lg:bg-transparent lg:shadow-none lg:w-auto lg:translate-x-0`}
        >
          <ul
            className={`flex flex-col gap-7 p-5 lg:p-0 lg:flex-row lg:gap-7 lg:items-center`}
          >
            <li className="hover:underline hover:underline-offset-8">
              <Link href="/Shop" onClick={() => setMenuOpen(false)}>
                Shop
              </Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                On Sale
              </Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                New Arrivals
              </Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Brands
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-5 xl:w-[50%]">
          <div className="hidden xl:flex w-[70%]">
            <AiOutlineSearch
              size={50}
              color="gray"
              className="border-2 rounded-l-[40px] px-2 py-2 bg-gray-200"
            />
            <input
              type="search"
              placeholder="Search for products...."
              className="border-gray-200 border-2 px-3 py-2 bg-gray-200 text-[13px]  w-[100%] rounded-r-[40px]"
            />
          </div>
          <div className="flex gap-5 lg:hidden">
            <AiOutlineSearch size={30} className="cursor-pointer" />
            <Link href="/Cart">
              <FiShoppingCart size={30} />
            </Link>
            <Link href="/WishList">
              <FiUser size={30} />
            </Link>
          </div>
          <div className="hidden lg:flex gap-5">
            <Link href="/Cart">
              <FiShoppingCart size={30} />
            </Link>
            <Link href="/WishList">
              <FiUser size={30} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
