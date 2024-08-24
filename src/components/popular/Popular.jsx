import { useStateValue } from "@/context";
import React, { useState } from "react";
import Products from "../products/Products";
import { useFatch } from "@/hooks/useFatch";
import Category from "../category/Category";
import Skeleton from "../skeleton/Skeleton";

const Popular = () => {
    // const [data, dispatch] = useStateValue();
    const [category, setCategory] = useState("");
    const { data: cart, loading } = useFatch(
        `/products${category ? `/category/${category}` : ""}`,
        { limit: 10 },
        [category]
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
                {loading && <Skeleton />}
                <Category setCategory={setCategory} data={categoryData} />
                <Products data={cart?.products} />
            </div>
        </section>
    );
};

export default Popular;
