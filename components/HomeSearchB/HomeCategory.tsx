import React, { useState } from "react";
import styles from "./BlogCompo.module.css";
import { BlogCard, BlogCat } from "@/fake-_data/blogData";

const HomeCategory = () => {
    const [selectedCat, setSelectedCat] = useState<string>("All Topics");
    const [HoverEffect, setHoverEffect] = useState<string>("");

    const filtered = BlogCard.filter(
        (item) => item.category.name === selectedCat
    );
    return (
        <div className="mx-4 md:mx-0 pb-16">

            <section className="mt-10">
                <div className="">
                    <div className="text-[#3b3c3d]">

                        <div className="hidden md:flex flex-wrap mt-5">
                            {BlogCat?.map((catego) => (
                                <div
                                    className={` px-4 py-2  mr- my-2 cursor-pointer text-4xl font-bold text-gray-300 hover:text-[#14a800] ${selectedCat === catego.title &&
                                        "text-[#14a800] "
                                        }`}
                                    key={catego.id}
                                    onClick={() => setSelectedCat(catego.title)}
                                >
                                    <p className="">{catego.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 md:hidden">
                            <select
                                onChange={(e) => setSelectedCat(e.target.value)}
                                className="select select-bordered w-full"
                            >
                                {/* <option disabled selected></option> */}
                                {BlogCat?.map((catego) => (
                                    <option
                                        className={`bg-[#d6eaf7] px-4 py-2 rounded-2xl mr-5 my-2 cursor-pointer hover:bg-[#b8d9f8] ${selectedCat === catego.title &&
                                            "bg-[#14a800] hover:bg-[#0c2f50] text-white"
                                            }`}
                                        key={catego.id}
                                    >

                                    </option>
                                ))}
                            </select>
                        </div>
                        <div
                            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 md:mt-20`}
                        >
                            {/* {
                                BlogCard?.filter((item) => item.category?.map((ii) => console.log(ii)))
                            } */}
                            {/* style={{ boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.12)" }} */}
                            {selectedCat === "All Topics" ? (
                                BlogCard.map((item) => (
                                    <div
                                        className={`w-full cursor-pointer `}
                                        key={item.id}
                                        onMouseEnter={() => setHoverEffect(item.id)}
                                        onMouseLeave={() => setHoverEffect("")}
                                    >

                                        <div className="p-4 ">
                                            <p className="text-[12px] text-[f59000]">

                                            </p>
                                            <h4 className="text-[18px] font-bold my-3">

                                            </h4>

                                        </div>

                                    </div>
                                ))
                            ) : filtered.length === 0 ? (
                                <div className="text-center w-full">
                                    <p className="text-[24px] font-bold">No Data Found</p>
                                </div>
                            ) : (
                                filtered.map((item) => (
                                    <div
                                        className={`w-full cursor-pointer `}
                                        key={item.id}
                                        onMouseEnter={() => setHoverEffect(item.id)}
                                        onMouseLeave={() => setHoverEffect("")}
                                    >

                                        <div className="p-4 h-52">
                                            <p className="text-[12px] text-[#f59000]">
                                                {item.category.name}
                                            </p>
                                            <h4 className="text-[18px] font-bold my-3">

                                            </h4>

                                        </div>

                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default HomeCategory;
