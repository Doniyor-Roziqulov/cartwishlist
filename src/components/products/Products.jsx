import React, { memo } from "react";
import { FaStar } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";
import { useStateValue } from "@/context";
import { IoIosHeart } from "react-icons/io";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
    const [{ wishlist }, dispatch] = useStateValue();
    let items = data?.map((product) => (
        <li
            className="lg:px-[21px] lg:pb-[21px] min-[400px]:px-2 px-1 pb-2 rounded-2xl  border border-[#ECECEC] relative"
            key={product.id}>
            <div className="w-[136px] min-[400px]:w-[170px] min-[500px]:w-[215px] lg:w-[240px]">
                <Link to={`/product/${product.id}`}>
                    <div className="w-full h-[140px] min-[500px]:h-[215px]">
                        <img
                            className="w-full h-full object-contain hover:scale-105 transition-all"
                            src={product.images[0]}
                            alt="img"
                        />
                    </div>
                </Link>
                <strong className="block text-xs text-[#ADADAD] mb-2 mt-1">
                    {product.title}
                </strong>
                <p className="text-sm min-[500px]:text-base text-[#253D4E] font-bold text-ellipsis overflow-hidden whitespace-nowrap max-w-full mb-2">
                    {product.description}
                </p>
                <div className="flex items-center gap-x-10">
                    <FaStar className="text-yellow-400" />
                    <p className="text-[#B6B6B6] text-sm">({product.rating})</p>
                </div>
                <span className="flex items-center gap-x-1">
                    <p className="text-sm text-[#B6B6B6]">By</p>
                    <p className="text-sm text-[#3BB77E]">{product.category}</p>
                </span>
                <div className="flex justify-between">
                    <div className="flex items-center gap-x-3">
                        <p className="text-sm min-[500px]:text-lg font-bold text-[#3BB77E]">
                            $ {product.price}
                        </p>
                        <del className="text-xs min-[500px]:text-sm font-bold text-[#ADADAD]">
                            $ {product.discountPercentage}
                        </del>
                    </div>
                    <button
                        onClick={() =>
                            dispatch({ type: "INC_CART", payload: product })
                        }
                        className="flex items-center active:scale-90 gap-x-1 p-1 text-[#3BB77E] text-sm font-bold lg:py-[10px] lg:px-[20px] rounded bg-[#DEF9EC]">
                        <LuShoppingCart className="text-lg" />
                        <p className="hidden lg:block"> Add</p>
                    </button>
                </div>
            </div>
            <button
                onClick={() =>
                    dispatch({ type: "ADD_TO_WISHLIST", payload: product })
                }
                className="absolute top-4 right-4 text-2xl text-red-500 active:scale-125">
                {wishlist?.some((item) => item.id === product.id) ? (
                    <IoIosHeart />
                ) : (
                    <IoIosHeartEmpty />
                )}
            </button>
        </li>
    ));
    return (
        <ul className="flex justify-between min-[330px]:justify-around min-[400px]:justify-between min-[430px]:justify-around min-[587px]:gap-x-1 xl:gap-x-3 min-[520px]:justify-around min-[500px]:justify-between 2xl:gap-x-2 xl:justify-start flex-wrap gap-y-7">
            {items}
        </ul>
    );
};

export default memo(Products);
