import axios from "@/api";
import React, { memo, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { TfiControlShuffle } from "react-icons/tfi";
import { useStateValue } from "@/context";

const Detail = () => {
    const { proId } = useParams();
    const [products, setProducts] = useState(null);
    const [data, setData] = useState(null);
    const [image, setImage] = useState(0);
    const [inc, setInc] = useState(1);
    const [{ wishlist }, dispatch] = useStateValue();

    useEffect(() => {
        axios
            .get(`/products/${proId}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [proId]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [proId]);
    useEffect(() => {
        axios
            .get(`/products/category/${data?.category}`, {
                params: { limit: 4 },
            })
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.log(err));
    }, [data, proId]);

    return (
        <section className="pt-7 pb-14">
            <div className="container  px-[10px] lg:w-[1500px] lg:px-5 mx-auto">
                <div className="flex flex-col items-center justify-between gap-y-3 sm:flex-row sm:items-start gap-x-3 pb-4">
                    <div className="w-11/12 ">
                        <div className="sticky top-0 left-0 mb-4">
                            <img
                                className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] object-contain bg-white rounded-2xl  border border-slate-300"
                                src={data?.images[`${image}`]}
                                alt={data?.title}
                            />
                            <div className="flex gap-x-5 mt-5">
                                {data?.images?.map((item, inx) => (
                                    <img
                                        onClick={(e) => setImage(inx)}
                                        key={inx}
                                        className="w-20 h-20 object-contain rounded-[17px] bg-slate-100 border border-[#A2D2C9] cursor-pointer hover:scale-105"
                                        src={item}
                                        alt="image"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[800px]">
                        <h2 className="text-base md:text-lg 2xl:text-[40px] font-bold mb-3 text-[#253D4E]">
                            {data?.title}
                        </h2>
                        <span className="flex gap-x-2 text-base md:text-lg mb-3 items-center">
                            <FaStar className="text-yellow-400" />
                            <p className="text-slate-500 text-sm">
                                ({data?.rating} reviews)
                            </p>
                        </span>
                        <div className="flex items-end gap-x-2 lg:gap-x-28 mb-3">
                            <div className="flex items-end gap-x-2 mb-3">
                                <p className="text-3xl font-bold text-[#3BB77E] 2xl:text-[58px]">
                                    $
                                    {Math.floor(data?.price * inc * 10000) /
                                        10000}
                                </p>
                                <del className="text-[#B6B6B6] 2xl:text-[28px]">
                                    ${data?.discountPercentage}
                                </del>
                            </div>
                        </div>
                        <p className="text-sm lg:text-lg text-slate-500 mb-5">
                            {data?.description}
                        </p>
                        <div className="flex items-center gap-x-2 mb-7">
                            <p className="text-[#7E7E7E]">Size / Weight:</p>
                            <a
                                className="text-[#7E7E7E] py-2 px-[9px] rounded-md hover:text-white hover:bg-[#3BB77E] transition-all"
                                href="#">
                                50g
                            </a>
                            <a
                                className="text-[#7E7E7E] py-2 px-[9px] rounded-md hover:text-white hover:bg-[#3BB77E] transition-all"
                                href="#">
                                60g
                            </a>
                            <a
                                className="text-[#7E7E7E] py-2 px-[9px] rounded-md hover:text-white hover:bg-[#3BB77E] transition-all"
                                href="#">
                                80g
                            </a>
                            <a
                                className="text-[#7E7E7E] py-2 px-[9px] rounded-md hover:text-white hover:bg-[#3BB77E] transition-all"
                                href="#">
                                100g
                            </a>
                            <a
                                className="text-[#7E7E7E] py-2 px-[9px] rounded-md hover:text-white hover:bg-[#3BB77E] transition-all"
                                href="#">
                                150g
                            </a>
                        </div>
                        <div className="flex gap-x-3 xl:gap-x-6">
                            <div className="flex gap-x-4 items-center justify-around m-0 border-2 border-[#3BB77E] rounded-md w-[90px]">
                                <p className="text-lg">{inc}</p>
                                <div className="flex flex-col justify-between h-full">
                                    <button
                                        className="p-2"
                                        onClick={() => setInc(inc + 1)}>
                                        <FaChevronUp className="text-[#3BB77E] text-xs" />
                                    </button>
                                    <button
                                        className="p-2"
                                        disabled={inc <= 1}
                                        onClick={() => setInc(inc - 1)}>
                                        <FaChevronDown className="text-[#3BB77E] text-xs" />
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() =>
                                    dispatch({
                                        type: "INC_CART",
                                        payload: data,
                                    })
                                }
                                className="flex items-center text-white bg-[#3BB77E] py-3 px-3 xl:px-9 rounded-md gap-x-1">
                                <IoCartOutline className="text-2xl" />
                                <p className="text-xs lg:text-lg">
                                    Add to cart
                                </p>
                            </button>
                            <button
                                onClick={() =>
                                    dispatch({
                                        type: "ADD_TO_WISHLIST",
                                        payload: data,
                                    })
                                }
                                className="border border-[#f1f1f1] px-4 rounded-md">
                                {wishlist?.some(
                                    (item) => item.id === data?.id
                                ) ? (
                                    <IoIosHeart className="text-[#7E7E7E] text-2xl" />
                                ) : (
                                    <IoIosHeartEmpty className="text-[#7E7E7E] text-2xl" />
                                )}
                            </button>
                            <button className="border border-[#f1f1f1] px-4 rounded-md">
                                <TfiControlShuffle className="text-[#7E7E7E] text-2xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Detail);
