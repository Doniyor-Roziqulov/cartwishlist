import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import logo from "@/images/logo.svg";

const Account = () => {
    return (
        <section className="pt-8 pb-16">
            <div className="flex items-center justify-center">
                <div className="w-[300px] sm:w-[400px] px-[31px] pt-5 pb-[31px] border border-[#E9E9E9] rounded-md">
                    <NavLink className="flex justify-center" to={"/"}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <form action="">
                        <p className="text-[15px] text-[#444] mb-[9px]">
                            Email Address*
                        </p>
                        <input
                            required
                            className="w-full text-sm text-[#777] rounded-md border border-[#E9E9E9] px-4 py-[14px] mb-[29px]"
                            type="email"
                            placeholder="Enter Your Email"
                        />
                        <p className="w-full text-[15px] text-[#444] mb-[9px]">
                            Password*
                        </p>
                        <input
                            required
                            className="text-sm w-full text-[#777] rounded-md border border-[#E9E9E9] px-4 py-[14px]"
                            type="password"
                            placeholder="Enter Your password"
                        />
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center gap-x-2">
                                <input type="checkbox" />
                                <p className="text-[#777] text-xs sm:text-[15px]">
                                    Remember Me
                                </p>
                            </div>
                            <a
                                className="text-[#777] text-xs sm:text-sm"
                                href="#">
                                Forgot Password?
                            </a>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <button className="text-white font-bold py-3 px-5 rounded-md bg-[#3BB77E]">
                                Login
                            </button>
                            <a className="text-[#777]" href="#">
                                Signup?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default memo(Account);
