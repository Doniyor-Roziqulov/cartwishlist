import { useStateValue } from "@/context";
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Mapcart = () => {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className="flex flex-col gap-y-3">
            {cart?.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col gap-y-3 sm:flex-row sm:w-10/12 items-center justify-between gap-x-10 border-[#ECECEC] border rounded-lg pl-3 sm:pl-5 py-3 pr-5 sm:pr-8">
                    <div className="w-[150px] h-[150px] bg-[#F7F8FA] flex items-center justify-center p-2 rounded-lg">
                        <img
                            className="w-full object-contain"
                            src={item.images[0]}
                            alt="img"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between items-start mb-2">
                            <strong className="text-[#253D4E] font-bold text-xl sm:text-2xl">
                                {item.title}
                            </strong>
                            <button
                                className="flex items-center gap-x-2 text-white font-bold active:opacity-60 py-[8px] px-4 rounded-lg bg-[#3BB77E]"
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_CART",
                                        payload: item,
                                    })
                                }>
                                <RiDeleteBin5Line className="text-xl" />
                                Delete
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm sm:text-base text-[#7E7E7E]">
                                Category: {item.category}
                            </p>
                            <div className="flex w-24 sm:w-40 justify-center items-center px-2 py-1 border-2 border-[#ECECEC] rounded-md gap-x-3 sm:gap-x-7">
                                <button
                                    className="text-[#7E7E7E] text-2xl"
                                    disabled={item.quantity <= 1}
                                    onClick={() =>
                                        dispatch({
                                            type: "DEC_CART",
                                            payload: item,
                                        })
                                    }>
                                    -
                                </button>
                                <p>{item.quantity}</p>
                                <button
                                    className="text-[#7E7E7E] text-2xl"
                                    onClick={() =>
                                        dispatch({
                                            type: "INC_CART",
                                            payload: item,
                                        })
                                    }>
                                    +
                                </button>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-xl whitespace-nowrap sm:text-4xl text-[#3BB77E] font-bold">
                                    $ {item.price * item.quantity}
                                </p>
                                <del className="text-lg sm:text-xl text-[#B6B6B6] font-bold">
                                    $ {item.discountPercentage}
                                </del>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Mapcart;
