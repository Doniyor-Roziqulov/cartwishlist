import Best from "@/components/best/Best";
import Feat from "@/components/feat/Feat";
import Hero from "@/components/hero/Hero";
import Heroone from "@/components/heroone/Heroone";
import Popular from "@/components/popular/Popular";
import Satay from "@/components/stay/Satay";
import React, { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Heroone />
            <Feat />
            <Popular />
            <Satay />
            <Best />
        </>
    );
};

export default Home;
