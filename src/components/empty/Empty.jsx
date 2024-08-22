import React from "react";
import { Link } from "react-router-dom";

const Empty = ({ title, url }) => {
    return (
        <div className="text-center flex flex-col items-center m-h-[60vh] p-16">
            <img
                className="w-[330px] h-[330px] object-contain"
                src={url}
                alt="img"
            />
            <p className="text-3xl text-[#253D4E] font-bold mb-2">{title}</p>
            <Link className="py-2 px-4 rounded-md bg-[#DEF9EC]" to={"/"}>
                Go home
            </Link>
        </div>
    );
};

export default Empty;
