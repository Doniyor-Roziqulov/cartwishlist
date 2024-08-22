import React from "react";
import logo from "@/images/logo.svg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterestP,
    FaYoutube,
} from "react-icons/fa";
import {
    footerone,
    footertwo,
    footerthere,
    footerfour,
    footerfive,
} from "@/static";
import app from "@/images/app.png";
import play from "@/images/play.png";
import pay from "@/images/pay.png";

const Footer = () => {
    const onelist = footerone?.map((e, inx) => (
        <span key={inx} className="flex items-start gap-x-1">
            <img src={e.img} alt="img" />
            <p className="text-[15px] font-semibold">{e.title}</p>
            <a className="text-[15px]" href="#">
                {e.text}
            </a>
        </span>
    ));
    const twolist = footertwo?.map((e, inx) => (
        <a key={inx} href="#">
            {e}
        </a>
    ));
    const therelist = footerthere?.map((e, inx) => (
        <a key={inx} href="#">
            {e}
        </a>
    ));
    const fourlist = footerfour?.map((e, inx) => (
        <a key={inx} href="#">
            {e}
        </a>
    ));
    const fivelist = footerfive?.map((e, inx) => (
        <a key={inx} href="#">
            {e}
        </a>
    ));
    return (
        <footer>
            <div className="container x-[10px] lg:w-[1500px] lg:px-5 mx-auto">
                <div className="text-[#253D4E] flex flex-wrap min-[444px]:justify-between gap-x-3 gap-y-4 justify-center items-start pb-11 border-b border-[#BCE3C9]">
                    <div className="w-[300px]">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <p className="text-[17px] mt-5 mb-9">
                            Awesome grocery store website template
                        </p>
                        <div className="flex flex-col gap-y-4">{onelist}</div>
                    </div>
                    <div>
                        <p className="text-2xl font-bold mb-5">Company</p>
                        <div className="flex flex-col gap-y-4">{twolist}</div>
                    </div>
                    <div>
                        <p className="text-2xl font-bold mb-5">Account</p>
                        <div className="flex flex-col gap-y-4">{therelist}</div>
                    </div>
                    <div>
                        <p className="text-2xl font-bold mb-5">Corporate</p>
                        <div className="flex flex-col gap-y-4">{fourlist}</div>
                    </div>
                    <div>
                        <p className="text-2xl font-bold mb-5">Popular</p>
                        <div className="flex flex-col gap-y-4">{fivelist}</div>
                    </div>
                    <div>
                        <p className="text-2xl font-bold mb-5">Install App</p>
                        <p className="mb-6">From App Store or Google Play</p>
                        <div className="flex items-center gap-x-1 mb-12">
                            <a href="#">
                                <img src={app} alt="app" />
                            </a>
                            <a href="#">
                                <img src={play} alt="play" />
                            </a>
                        </div>
                        <p className="mb-5">Secured Payment Gateways</p>
                        <a href="#">
                            <img src={pay} alt="pay" />
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center min-[767px]:justify-between flex-wrap pt-9 pb-28 gap-y-4">
                    <span className="text-[#7E7E7E]">
                        © 2022, <p className="text-[#3BB77E] inline">Nest</p> -
                        HTML Ecommerce Template <br /> All rights reserved
                    </span>
                    <div className="flex items-center gap-x-12">
                        <div className="flex items-center gap-x-3">
                            <MdOutlinePhoneInTalk className="text-[#7E7E7E] text-3xl" />
                            <div>
                                <a
                                    className="text-[#3BB77E] text-[26px] font-bold"
                                    href="tel:+19006666">
                                    1900 - 6666
                                </a>
                                <p className="text-xs text-[#7E7E7E]">
                                    Working 8:00 - 22:00
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <MdOutlinePhoneInTalk className="text-[#7E7E7E] text-3xl" />
                            <div>
                                <a
                                    className="text-[#3BB77E] text-[26px] font-bold"
                                    href="tel:+19008888">
                                    1900 - 8888
                                </a>
                                <p className="text-xs text-[#7E7E7E]">
                                    24/7 Support Center
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-x-2">
                            <p className="text-[#253D4E] text-base font-bold">
                                Follow Us
                            </p>
                            <a
                                className="text-white p-2 rounded-full bg-[#3BB77E] inline-block"
                                href="#">
                                <FaFacebook />
                            </a>
                            <a
                                className="text-white p-2 rounded-full bg-[#3BB77E] inline-block"
                                href="#">
                                <FaTwitter />
                            </a>
                            <a
                                className="text-white p-2 rounded-full bg-[#3BB77E] inline-block"
                                href="#">
                                <FaInstagram />
                            </a>
                            <a
                                className="text-white p-2 rounded-full bg-[#3BB77E] inline-block"
                                href="#">
                                <FaPinterestP />
                            </a>
                            <a
                                className="text-white p-2 rounded-full bg-[#3BB77E] inline-block"
                                href="#">
                                <FaYoutube />
                            </a>
                        </div>
                        <p className="text-[#7E7E7E]">
                            Up to 15% discount on your first subscribe
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
