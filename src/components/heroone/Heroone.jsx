import React, { memo } from "react";
import Hero from "../hero/Hero";

const Heroone = () => {
    return (
        <Hero
            title="Fresh Vegetables Big discount"
            text="Save up to 50% off on your first order"
        />
    );
};

export default memo(Heroone);
