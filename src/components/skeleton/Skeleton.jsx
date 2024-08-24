import React, { memo } from "react";

const Skeleton = () => {
    const skeletonItem = new Array(10).fill().map((_, inx) => (
        <div
            key={inx}
            className="good__item sm:w-72 relative transition-all rounded-3xl">
            <div className="w-full bg-gray-200 h-40 sm:h-56 rounded-2xl"></div>
            <div className="w-4/5 h-7 bg-gray-200 mt-2 rounded-2xl"></div>
            <div className="w-2/5 h-7 bg-gray-200 mt-2 rounded-2xl"></div>
            <div className="w-11/12 h-9 bg-gray-200 mt-2 rounded-2xl"></div>
        </div>
    ));
    return (
        <ul className="flex flex-wrap justify-between gap-y-4 gap-x-1">
            {skeletonItem}
        </ul>
    );
};

export default memo(Skeleton);
