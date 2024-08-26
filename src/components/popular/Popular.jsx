import React, { memo, useState } from "react";
import Products from "../products/Products";
import { useFatch } from "@/hooks/useFatch";
import Category from "../category/Category";
import Skeleton from "../skeleton/Skeleton";

const Popular = () => {
    const limit = 10;
    const [offset, setOffset] = useState(1);
    const [category, setCategory] = useState("");
    const {
        data: cart,
        loading,
        total,
    } = useFatch(
        `/products${category ? `/category/${category}` : ""}`,
        { limit: limit * offset },
        [category, offset]
    );

    const { data: categoryData } = useFatch("/products/category-list");

    return (
        <section className="pb-[170px]">
            <div className="container  px-[10px] lg:w-[1500px] lg:px-5 mx-auto ">
                <div className="mb-11">
                    <h2 className="text-3xl text-[#253D4E] font-bold">
                        Popular Products
                    </h2>
                </div>
                <Category setCategory={setCategory} data={categoryData} />
                <Products data={cart?.products} />
                {loading && <Skeleton />}
                {limit * offset <= total && (
                    <button
                        className="text-white text-base py-3 px-8 rounded-xl bg-[#3BB77E] mx-auto block mt-5"
                        onClick={() => setOffset((p) => p + 1)}>
                        See more
                    </button>
                )}
            </div>
        </section>
    );
};

export default memo(Popular);
