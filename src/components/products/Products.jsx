import React from "react";
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
            className="px-[21px] pb-[21px] rounded-2xl  border border-[#ECECEC] relative"
            key={product.id}>
            <div className="w-[240px]">
                <Link to={`/product/${product.id}`}>
                    <div className="w-full h-[246px]">
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
                <p className="text-base text-[#253D4E] font-bold text-ellipsis overflow-hidden whitespace-nowrap max-w-full mb-2">
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
                        <p className="text-lg font-bold text-[#3BB77E]">
                            $ {product.price}
                        </p>
                        <del className="text-sm font-bold text-[#ADADAD]">
                            $ {product.discountPercentage}
                        </del>
                    </div>
                    <button className="flex items-center gap-x-1 text-[#3BB77E] text-sm font-bold py-[10px] px-[20px] rounded bg-[#DEF9EC]">
                        <LuShoppingCart className="text-lg" />
                        Add
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
        <ul className="flex justify-center min-[587px]:justify-between flex-wrap gap-y-7">
            {items}
        </ul>
    );
};

export default Products;
