import Shop from "@/components/shop/Shop";
import Satay from "@/components/stay/Satay";
import Vendor from "@/components/vendor/Vendor";
import React, { memo } from "react";

const Detail = () => {
    return (
        <>
            <Shop />
            <Vendor />
            <Satay />
        </>
    );
};

export default memo(Detail);
