import Products from "@/components/products/Products";
import { useStateValue } from "@/context";
import React from "react";

const Wishlist = () => {
    const [data, dispatch] = useStateValue();
    return (
        <section>
            <div className="container  px-[10px] lg:w-[1500px] lg:px-5 mx-auto">
                <h2>Wishlist</h2>
                <Products data={data.wishlist} />
            </div>
        </section>
    );
};

export default Wishlist;
