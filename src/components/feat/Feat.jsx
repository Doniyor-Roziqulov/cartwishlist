import React from "react";
import { link, smallcart, middilecart } from "./index";

const Feat = () => {
    return (
        <section className="pb-14">
            <div className="container px-[10px] lg:w-[1500px] lg:px-5 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between   gap-x-[30px] mb-11">
                    <h2 className="text-2xl lg:text-[32px] font-bold lg:whitespace-nowrap">
                        Featured Categories
                    </h2>
                    <ul className="flex items-center w-full  gap-x-7 overflow-x-auto md:overflow-x-hidden">
                        {link}
                    </ul>
                </div>
                <ul className="flex justify-between overflow-x-auto gap-x-3 2xl:overflow-x-hidden 2xl:gap-x-0 mb-11">
                    {smallcart}
                </ul>
                <ul className="flex flex-col justify-between items-center gap-y-3 lg:flex-row">
                    {middilecart}
                </ul>
            </div>
        </section>
    );
};

export default Feat;
