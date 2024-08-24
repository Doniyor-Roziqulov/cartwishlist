import Empty from "@/components/empty/Empty";
import { useStateValue } from "@/context";
import React, { memo } from "react";
import Mapcart from "./Mapcart";

const Cart = () => {
    const [{ cart }, dispatch] = useStateValue();
    return (
        <section className="pb-9 pt-7">
            <div className="container">
                <div className="container  px-[10px] lg:w-[1500px] lg:px-5 mx-auto">
                    {cart.length ? (
                        <Mapcart />
                    ) : (
                        <Empty
                            url="https://as2.ftcdn.net/v2/jpg/04/65/69/89/1000_F_465698993_YtBOZQSTiQyIl4EZjy9oXmIdSf2lmdet.jpg"
                            title="Shopping cart is empty"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default memo(Cart);
