import React, { memo } from "react";

const Category = ({ setCategory, data }) => {
    const list = data?.map((e) => (
        <li
            key={e}
            className="active:text-[#DEF9EC] text-[#266045] py-1 px-2
         rounded-lg bg-[#DEF9EC] active:bg-[#266045]">
            <data
                className="cursor-pointer text-base font-semibold whitespace-nowrap"
                onClick={() => setCategory(e)}
                value={`/products/category/${e}`}>
                {e.charAt(0).toUpperCase() + e.slice(1).split("-").join(" ")}
            </data>
        </li>
    ));
    return (
        <div className="overflow-x-hidden">
            <ul className="flex gap-x-2 justify-between  mb-6 pb-4  w-full overflow-x-scroll">
                <li
                    className="active:text-[#DEF9EC] text-[#266045] py-1 px-2
             rounded-lg bg-[#DEF9EC] active:bg-[#266045]">
                    <data
                        className="cursor-pointer text-base font-semibold"
                        value={`/products`}
                        onClick={() => setCategory("")}>
                        All
                    </data>
                </li>
                {list}
            </ul>
        </div>
    );
};

export default memo(Category);
