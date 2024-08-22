import React from "react";
import { bestlist } from "@/static";

const Best = () => {
    const best = bestlist?.map((e, inx) => (
        <li
            key={inx}
            className="flex items-center w-[280px] justify-between p-5 rounded-lg bg-[#F4F6FA]">
            <div className="flex items-center justify-between w-[250px]">
                <img src={e.img} alt="img" />
                <div>
                    <strong>{e.title}</strong>
                    <p>{e.text}</p>
                </div>
            </div>
        </li>
    ));
    return (
        <section className="pb-16">
            <div className="container px-[10px] lg:w-[1500px] lg:px-5 mx-auto">
                <ul className="flex gap-x-6 2xl:justify-between 2xl:gap-x-0 items-center overflow-x-auto 2xl:overflow-x-hidden">
                    {best}
                </ul>
            </div>
        </section>
    );
};

export default Best;
