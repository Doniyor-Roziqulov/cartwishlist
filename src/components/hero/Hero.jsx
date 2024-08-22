import React from "react";
import herobg from "@/images/herobg.png";
import { TbSend } from "react-icons/tb";

const Hero = ({ title, text, img }) => {
    return (
        <section className="pb-16">
            <div className="container px-[10px] lg:w-[1500px] lg:px-5 mx-auto">
                <div
                    className="bg-auto lg:bg-cover 2xl:bg-contain bg-no-repeat relative pt-[81px] pb-[80px] lg:pl-[80px] w-full flex justify-center lg:justify-start"
                    style={{ backgroundImage: `url(${herobg})` }}>
                    <div className="w-[280px] flex flex-col items-center lg:items-start sm:w-[600px]">
                        <h1 className="text-3xl xl:text-6xl font-bold mb-8 text-center md:text-5xl lg:text-start">
                            {title}
                        </h1>
                        <p className="text-xl xl:text-3xl text-[#7E7E7E] mb-16 text-center lg:text-start md:text-2xl">
                            {text}
                        </p>
                        <form
                            className="rounded-full flex items-center w-[280px] md:w-[400px] lg:w-[450px] bg-white relative"
                            action="">
                            <TbSend className="absolute left-[25px] text-[#838383] text-xl" />
                            <input
                                className="text-base bg-transparent w-full md:py-3 text-[#838383] pl-[58px] rounded-tl-full rounded-bl-full py-2 lg:py-[22px]"
                                type="email"
                                name="email"
                                placeholder="Your emaill address"
                            />
                            <button className="text-base text-white py-2 md:py-3 lg:py-[22px] px-3 md:px-5 lg:px-[40px] rounded-full bg-[#3BB77E]">
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <img
                        className="object-contain hidden 2xl:block absolute bottom-12 right-12"
                        src={img}
                        alt="men"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
