import { useStateValue } from "@/context";
import React from "react";
import Products from "../products/Products";
import { useFatch } from "@/hooks/useFatch";

const Popular = () => {
    const [data, dispatch] = useStateValue();
    const { data: cart, loading } = useFatch("/products", { limit: 10 });

    return (
        <section>
            <div className="container  px-[10px] lg:w-[1500px] lg:px-5 mx-auto">
                <div className="mb-11">
                    <h2 className="text-3xl text-[#253D4E] font-bold">
                        Popular Products
                    </h2>
                </div>
                {loading && <h2>Loading...</h2>}
                <Products data={cart?.products} />
            </div>
        </section>
    );
};

export default Popular;
