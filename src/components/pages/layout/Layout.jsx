import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React, { memo } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="mt-[108px]">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default memo(Layout);
