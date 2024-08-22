import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "@/images/logo.svg";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="py-6">
            <div className="container px-[10px] lg:w-[1500px] lg:px-5 mx-auto">
                <div className="flex items-center justify-between">
                    <NavLink to={"/"}>
                        <img src={logo} alt="logo image" />
                    </NavLink>
                    <div className="hidden lg:flex rounded-md border-2 border-[#BCE3C9] lg:w-[300px] xl:w-[500px] 2xl:w-[822px] items-center">
                        <select name="" id="" className="border-r pr-3">
                            <option className="text-sm" value="All Categories">
                                All Categories
                            </option>
                            <option className="text-sm" value="All Categories">
                                All Categories
                            </option>
                            <option className="text-sm" value="All Categories">
                                All Categories
                            </option>
                            <option className="text-sm" value="All Categories">
                                All Categories
                            </option>
                        </select>
                        <input
                            className="py-4 pl-4 w-full"
                            type="search"
                            placeholder="Search for items..."
                        />
                        <IoSearchOutline className="text-3xl mr-3 text-[#B6B6B6]" />
                    </div>
                    <div
                        className={
                            menuOpen
                                ? "flex flex-col gap-y-6 z-10 bg-white pt-9 pb-28 pl-5 pr-7 transition-[0.5s] top-[102px] absolute left-0 md:flex-row md:relative md:p-0 md:top-0 gap-x-5"
                                : "flex flex-col gap-y-6 z-10 bg-white pt-9 pb-28 pl-5 pr-7 transition-[0.5s] top-[102px] absolute left-[-300px] md:flex-row md:relative md:p-0 md:top-0 md:left-0 md:gap-x-5"
                        }>
                        <a
                            href="#"
                            className="flex items-center gap-x-[7px] rounded-md border border-[#ECECEC] bg-white shadow py-[11px] px-[14px]">
                            <IoLocationOutline className="text-[#B6B6B6]" />
                            <p className="text-sm text-[#3BB77E]">
                                Your Location
                            </p>
                            <FaAngleDown className="text-[#7E7E7E] text-xs" />
                        </a>
                        <NavLink
                            to={"/wishlist"}
                            className="flex items-center gap-x-2 text-[#7E7E7E] text-base">
                            <FaRegHeart className="text-black text-xl" />
                            Wishlist
                        </NavLink>
                        <NavLink
                            to={"/cart"}
                            className="flex items-center gap-x-2 text-[#7E7E7E] text-base">
                            <IoCartOutline className="text-black text-2xl" />
                            Cart
                        </NavLink>
                        <NavLink
                            to={"/account"}
                            className="flex items-center gap-x-2 text-[#7E7E7E] text-base">
                            <VscAccount className="text-black text-xl" />
                            Account
                        </NavLink>
                    </div>
                    <button
                        className="md:hidden"
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                        }}>
                        {menuOpen ? (
                            <IoClose className="text-2xl" />
                        ) : (
                            <RxHamburgerMenu className="text-2xl" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
