import React from "react";
import { links, smallcarts, middlelist } from "@/static";
import { FaArrowRightLong } from "react-icons/fa6";

export const link = links?.map((e, inx) => (
    <li key={inx} className="mb-2">
        <a
            className="text-sm lg:text-base font-semibold hover:text-[#3BB77E] transition-all whitespace-nowrap "
            href="#">
            {e}
        </a>
    </li>
));

export const smallcart = smallcarts?.map((e, inx) => (
    <li
        className="flex flex-col items-center rounded-xl w-[137px] pb-[23px] pt-[21px]"
        style={{ backgroundColor: e.color }}
        key={inx}>
        <div className="w-[137px] flex flex-col items-center">
            <img className="w-20 h-20" src={e.img} alt="img" />
            <strong className="block text-base text-[#253D4E] font-bold mb-1 mt-2">
                {e.title}
            </strong>
            <p className="text-sm text-[#7E7E7E]">{e.text}</p>
        </div>
    </li>
));

export const middilecart = middlelist?.map((e, inx) => (
    <li
        className=" md:bg-cover md:w-[550px] bg-no-repeat pt-12 sm:pt-16 lg:pt-8 pb-12 sm:pb-16 xl:pt-10 xl:pb-12 2xl:pt-16 2xl:bg-contain 2xl:pb-16  2xl:w-[480px] lg:pb-[30px] pl-5 lg:pl-12 w-[300px] sm:w-[400px] lg:w-[320px] xl:w-[410px]"
        key={inx}
        style={{ backgroundImage: `url(${e.img})` }}>
        <div className="w-[204px] h-[120px] lg:h-[148px] flex flex-col items-start justify-between">
            <h3 className="text-2xl mb-7 text-[#253D4E] font-bold">
                {e.title}
            </h3>
            <a
                className="rounded text-xs text-white py-2 pl-[13px] pr-[28px] bg-[#3BB77E] relative"
                href="#">
                {e.link}
                <FaArrowRightLong className="absolute top-[10px] right-2" />
            </a>
        </div>
    </li>
));

const index = () => {
    return <></>;
};

export default index;
