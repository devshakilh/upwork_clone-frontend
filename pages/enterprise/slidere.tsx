import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img6 from '../../assests/enterprise/60c6f358639e8cc66cee6e64_NASDAQ_Logo.svg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import styles from "./styles.module.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import Image from "next/image";

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className={`${styles.mySwiper} `}
            >
                <SwiperSlide>
                    <div className='border-[1px] rounded-md p-8 text-[#001e00] mb-8 border-[#9aaa97]'>
                        <Image src={img6} alt='' />
                        <h4 className='mb-[10px] text-[24px] font-semibold'>

                            “Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”
                        </h4>

                        <p className='text-[d5e0d5] font-semibold'>Josh Machiz, Chief Digital Officer</p>
                        <h2 className='border-[#d5e0d5] border-b-[1px] pb-4'>Results</h2>


                        <div className='lg:flex gap-20 '>
                            <div>
                                <h1 className='text-3xl font-semibold py-3'>Emmy Winning</h1>
                                <p>Facebook Watch</p>
                                <p>program</p>
                            </div>
                            <div>
                                <h1 className='text-3xl font-semibold py-3'>Emmy Winning</h1>
                                <p>Facebook Watch</p>
                                <p>program</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border-[1px] rounded-md p-8 mb-8 text-[#001e00] border-[#9aaa97]'>
                        <Image src={img6} alt='' />
                        <h4 className='mb-[10px] text-[24px] font-semibold'>

                            “Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”
                        </h4>

                        <p className='text-[d5e0d5] font-semibold'>Josh Machiz, Chief Digital Officer</p>
                        <h2 className='border-[#d5e0d5] border-b-[1px] pb-4'>Results</h2>


                        <div className='lg:flex gap-20 '>
                            <div>
                                <h1 className='text-3xl font-semibold py-3'>Emmy Winning</h1>
                                <p>Facebook Watch</p>
                                <p>program</p>
                            </div>
                            <div>
                                <h1 className='text-3xl font-semibold py-3'>Emmy Winning</h1>
                                <p>Facebook Watch</p>
                                <p>program</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border-[1px] rounded-md p-8 text-[#001e00] mb-8 border-[#9aaa97]'>
                        <Image src={img6} alt='' />
                        <h4 className='mb-[10px] text-[24px] font-semibold'>

                            “Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”
                        </h4>

                        <p className='text-[d5e0d5] font-semibold'>Josh Machiz, Chief Digital Officer</p>
                        <h2 className='border-[#d5e0d5] border-b-[1px] pb-4'>Results</h2>


                        <div className='lg:flex gap-20 '>
                            <div>
                                <h1 className='text-3xl font-semibold py-3'>Emmy Winning</h1>
                                <p>Facebook Watch</p>
                                <p>program</p>
                            </div>
                            <div>
                                <h1 className='text-3xl font-semibold py-3'>Emmy Winning</h1>
                                <p>Facebook Watch</p>
                                <p>program</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border-[1px] rounded-md p-8 text-[#001e00] mb-8  border-[#9aaa97]'>
                        <Image src={img6} alt='' />
                        <h4 className='mb-[10px] text-[24px] font-semibold'>

                            “Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”
                        </h4>

                        <p className='text-[d5e0d5] font-semibold'>Josh Machiz, Chief Digital Officer</p>
                        <h2 className='border-[#d5e0d5] border-b-[1px] pb-4'>Results</h2>


                        <div className='lg:flex gap-20 '>
                            <div>
                                <h1 className='text-3xl font-semibold py-3'>Emmy Winning</h1>
                                <p>Facebook Watch</p>
                                <p>program</p>
                            </div>
                            <div>
                                <h1 className='text-3xl font-semibold py-3'>Emmy Winning</h1>
                                <p>Facebook Watch</p>
                                <p>program</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
