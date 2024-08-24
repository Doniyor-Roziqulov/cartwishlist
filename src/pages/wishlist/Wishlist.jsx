import Empty from "@/components/empty/Empty";
import Products from "@/components/products/Products";
import { useStateValue } from "@/context";
import React, { memo } from "react";

const Wishlist = () => {
    const [data, dispatch] = useStateValue();
    return (
        <section className="pt-3 pb-10">
            <div className="container  px-[10px] lg:w-[1500px] lg:px-5 mx-auto">
                {data.wishlist.length ? (
                    <Products data={data.wishlist} />
                ) : (
                    <Empty
                        url="https://www.imagineersstudio.com/images/emptywishlist.jpg"
                        title="Favorites are empty"
                    />
                )}
            </div>
        </section>
    );
};

export default memo(Wishlist);
