import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "@/api";

const Search = () => {
    useEffect(() => {
        // axios
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setFilterData(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const handleFilter = (value) => {
        const res = filterData.products.filter((f) =>
            f.title.toLowerCase().includes(value)
        );
        setData(res);
        if (value === "") {
            setData([]);
        }
    };

    const list = data.map((d, inx) => (
        <Link to={`/product/${d.id}`}>
            <div
                className="bg-white flex items-center pl-3 gap-x-2 pb-1 hover:bg-neutral-100 border-b pt-1 cursor-pointer"
                key={inx}>
                <img
                    className="w-8 h-8 object-contain"
                    src={d.images[0]}
                    alt=""
                />
                <h3> {d.title}</h3>
            </div>
        </Link>
    ));
    return (
        <div className="w-full relative ">
            <form
                onChange={(e) => handleFilter(e.target.value)}
                action=""
                className="w-full">
                <input
                    className="py-4 pl-4 w-full"
                    type="search"
                    placeholder="Search for items..."
                />
            </form>

            <div className="absolute z-10  w-full h-96 overflow-y-auto pt-2 pl-4  flex flex-col">
                {list}
            </div>
        </div>
    );
};

export default Search;
