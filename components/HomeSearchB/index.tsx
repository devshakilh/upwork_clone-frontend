import React from 'react';
import styles from './styles.module.css'
import { FiEdit } from 'react-icons/fi';
import { BsCodeSquare, BsVirus2, BsCheckCircleFill } from 'react-icons/bs';
import { AiOutlineArrowRight, AiFillDollarCircle, AiFillStar } from 'react-icons/ai';
import img9 from '../../assests/reaching-person@2x.png'
import { MdEditOff } from 'react-icons/md';
import { AiFillPushpin, AiTwotoneSecurityScan } from 'react-icons/ai';
import Image from 'next/image';
import img1 from '../../assests/microsoft.svg'
import img2 from '../../assests/nasdaq.svg'
import img3 from '../../assests/airbnb.svg'
import img4 from '../../assests/coty.svg'
import img5 from '../../assests/automatic.svg'
import img6 from '../../assests/bissell.svg'
import img7 from '../../assests/bissell.svg'
import img8 from '../../assests/coty.svg'
import human from '../../assests/hxwn-enterprise-image-mobile@1x.webp'
import img10 from '../../assests/find-great-work@2x.jpg'
import HomeCategory from './HomeCategory';
const HomeSearch = () => {
    return (
        <div className='lg:px-16 px-6'>
            <h1 className="text-6xl pt-[80px] pb-[55px] font-bold text-center hidden lg:block text-[#001e00]">Find the best people
                <br /> for your job</h1>
            <h1 className="text-5xl pt-[80px] pb-[55px] font-bold text-center lg:hidden  text-[#001e00]">Find the best people
                <br /> for your job</h1>
            <div className='items-center justify-center flex'>
                <input className={`py-5 pl-6 lg:pr-96  bg-gray-100 border-[1px] text-black justify-center border-gray-300 rounded-full relative `} type="search" placeholder='Try data entry or build a website' name="" id="" />
                <button className='bg-[#14a800] hidden lg:block -mr-96 absolute rounded-3xl text-white font-semibold -m40 my-1 px-8 py-3 '>Get Started</button>
            </div>


            <div className='hidden lg:block'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8 mb-12 lg:px-20 font-semibold text-center gap-8'>
                    <h2 className='text-[#001e00] hover:bg-[#d5e0d5] rounded-3xl py-2 justify-center text-center lg:flex items-center  mx-4 gap-4 text-[16px] font-[500]'><span><BsCodeSquare /></span> Development & IT</h2>
                    <h2 className='text-[#001e00] hover:bg-[#d5e0d5] rounded-3xl py-2 justify-center lg:flex items-center mx-4  gap-4 text-[16px] font-[500]'><span><BsCodeSquare /></span> Development & IT</h2>
                    <h2 className='text-[#001e00] hover:bg-[#d5e0d5] rounded-3xl py-2 justify-center lg:flex items-center mx-4  gap-4 text-[16px] font-[500]'><span><BsCodeSquare /></span> Development & IT</h2>
                    <h2 className='text-[#001e00] hover:bg-[#d5e0d5] rounded-3xl py-2 justify-center lg:flex items-center mx-4 gap-4 text-[16px] font-[500]'><span><BsCodeSquare /></span> Development & IT</h2>
                    <h2 className='text-[#001e00] hover:bg-[#d5e0d5] rounded-3xl py-2 justify-center lg:flex items-center mx-4 gap-4 text-[16px] font-[500]'><span><BsCodeSquare /></span> Development & IT</h2>
                    <h1 className='hover:bg-[#d5e0d5] rounded-3xl py-2 mx-4 justify-center'>Design & Creative</h1>
                </div>
            </div>
            <div className='lg:hidden'>
                <div className='grid sm:block grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8 mb-12 lg:px-20 font-semibold text-center gap-4'>
                    <h2 className='text-[#001e00] bg-[#d5e0d5] rounded-3xl py-2 justify-center text-center lg:flex items-center  mx-4 gap-4 text-[16px] font-[500] p-3'><span><BsCodeSquare className='ml-9' /></span> Development & IT</h2>
                    <h2 className='text-[#001e00] bg-[#d5e0d5] rounded-3xl py-2 justify-center lg:flex items-center mx-4  gap-4 text-[16px] font-[500] p-3'><span ><BsCodeSquare className='ml-9' /></span> Development & IT</h2>
                    <h2 className='text-[#001e00] bg-[#d5e0d5] rounded-3xl py-2 justify-center text-center lg:flex items-center  mx-4 gap-4 text-[16px] font-[500] p-3'><span><BsCodeSquare className='ml-9' /></span> Development & IT</h2>
                    <h2 className='text-[#001e00] bg-[#d5e0d5] rounded-3xl py-2 justify-center lg:flex items-center mx-4  gap-4 text-[16px] font-[500] p-3'><span ><BsCodeSquare className='ml-9' /></span> Development & IT</h2>
                    <h2 className='text-[#001e00] bg-[#d5e0d5] rounded-3xl py-2 justify-center text-center lg:flex items-center  mx-4 gap-4 text-[16px] font-[500] p-3'><span><BsCodeSquare className='ml-9' /></span> Development & IT</h2>
                    <h2 className='text-[#001e00] bg-[#d5e0d5] rounded-3xl py-2 justify-center lg:flex items-center mx-4  gap-4 text-[16px] font-[500] p-3'><span ><BsCodeSquare className='ml-9' /></span> Development & IT</h2>


                    <h1 className='hover:bg-[#d5e0d5] rounded-3xl py-2 mx-4 justify-center'>Design & Creative</h1>
                </div>
            </div>


            <div className='hidden lg:block'>
                <div className='flex gap-20 items-center '>
                    <Image className='lg:w-32 lg:h-32' src={img1} alt='' />
                    <Image className='w-16 h-16' src={img2} alt='' />
                    <Image className='w-24 h-24' src={img3} alt='' />
                    <Image className='w-24 h-24' src={img4} alt='' />
                    <Image className='w-32 h-32' src={img5} alt='' />
                    <Image className='w-16 h-16' src={img6} alt='' />
                    <Image className='w-24 h-24' src={img8} alt='' />
                </div>

            </div>
            <div className='lg:hidden' >
                <div className='flex gap-7 items-center '>
                    <Image className='w-20 h-20' src={img1} alt='' />
                    <Image className='w-12 h-12' src={img2} alt='' />
                    <Image className='w-16 h-16' src={img3} alt='' />
                    <Image className='w-16 h-16' src={img4} alt='' />

                </div>

            </div>

            <div>
                <h2 className='text-[40px] text-[#001e00] mb-[16px]'>Up your work game, it’s free.</h2>
                <div className='flex gap-4 text-[#001e00]'>
                    <p className='mt-2 font-[500] text-[24px]'><span ><FiEdit /></span></p>
                    <div>
                        <h2 className='text-[18px] font-[500]'>No cost to join.</h2>
                        <p className='text-black'>Register and browse professionals, explore projects, or even book a consultation.</p>
                    </div>
                </div>
                <div className='flex py-6 gap-4 text-[#001e00]'>
                    <p className='mt-2 font-[500] text-[24px]'><span ><AiFillPushpin /></span></p>
                    <div>
                        <h2 className='text-[18px] font-[500]'>Post a job and hire top talent.</h2>
                        <p className='text-black'>Finding talent doesn’t have to be a chore. Post a job or we can search for you!</p>
                    </div>
                </div>
                <div className='flex py- gap-4 text-[#001e00]'>
                    <p className='mt-2 font-[500] text-[24px]'><span ><AiTwotoneSecurityScan /></span></p>
                    <div>
                        <h2 className='text-[18px] font-[500]'>Work with the best—without breaking the bank.</h2>
                        <p className='text-black text-[16px] pb-6'>Upwork makes it affordable to up your work and take advantage of low transaction rates</p>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <button className='text-white px-6 py-2 rounded-3xl bg-[#14a800] font-semibold'>Sign up for free</button>
                    <button className='rounded-3xl text-[16px] text-[#14a800] font-semibold py-2 px-6 border-[2px] border-[#14a800]'>Learn how to hire</button>
                </div>


                <div className='lg:flex mt-16 text-white rounded-3'>
                    <div className='lg:w-3/5 rounded-md rounded-r-none lg:p-12 p-4 bg-[#13544e]'>
                        <h2 className='font-semibold text-[22px]'>Enterprise Suite</h2>
                        <h1 className='text-6xl font-semibold pt-2 pb-'>This is how</h1>
                        <h3 className='text-[#91e6b3] text-5xl pb-4 py-0'>good companies <br /> find good company.</h3>
                        <p className='text-[18px]'>Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.</p>
                        <p className='pt-3 flex gap-2 items-center text-[16px]'><span className='text-[#91e6b3] '><MdEditOff /></span> Access expert talent to fill your skill gaps</p>
                        <p className='py-2 flex gap-2 items-center text-[16px]'><span className='text-[#91e6b3] '><MdEditOff /></span> Access expert talent to fill your skill gaps</p>
                        <p className='py- flex gap-2 items-center text-[16px]'><span className='text-[#91e6b3] '><MdEditOff /></span> Access expert talent to fill your skill gaps</p>
                        <button className='bg-white rounded-3xl py-2 px-6 mt-8 text-[#13544e] font-semibold'>Learn more</button>
                    </div>
                    <Image className='lg:w-2/5 rounded-md rounded-l-none' src={human} alt='' />
                </div>
            </div>
            <div className={`mt-12 ${styles.bgHuman}`}>
                <h1 className='text-[32px] font-[450] mb-[100px] text-white'>For clients</h1>
                <h2 className='text-6xl text-white font-semibold mb-8'>Find talent
                    <br /> your way</h2>
                <p className={`text-[18px] text-white ${styles.work} font-[450px]`}>Work with the largest network of independent <br /> professionals and get things done—from quick <br /> turnarounds to big transformations.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8'>
                    <div className=' bg-[#108a00] hover:text-[#108a00] hover:bg-white text-white rounded-md p-4'>
                        <h2 className='mb-[20px] text-4xl  font-semibold'>Post a job <br /> and hire a pro</h2>
                        <p className=' pb-2 text-[18px] font-semibold flex gap-2 items-center'>Talent Marketplace <span><AiOutlineArrowRight /></span></p>
                    </div>
                    <div className='bg-[#108a00] hover:text-[#108a00] hover:bg-white text-white rounded-md p-4'>
                        <h2 className='mb-[20px] text-4xl  font-semibold'>Post a job <br /> and hire a pro</h2>
                        <p className=' pb-2 text-[18px] font-semibold flex gap-2 items-center'>Talent Marketplace <span><AiOutlineArrowRight /></span></p>
                    </div>
                    <div className='bg-[#108a00] hover:text-[#108a00] hover:bg-white  text-white rounded-md p-4'>
                        <h2 className='mb-[20px] text-4xl  font-semibold'>Post a job <br /> and hire a pro</h2>
                        <p className=' pb-2 text-[18px] font-semibold flex gap-2 items-center'>Talent Marketplace <span><AiOutlineArrowRight /></span></p>
                    </div>
                </div>
            </div>


            <div className='lg:flex mt-16 gap-20 justify-between'>
                <div>
                    <h1 className='text-6xl pt-16 font-semibold text-[#021202]'>Why businesses
                        <br />   turn to Upwork</h1>
                    <div>
                        <h3 className='text-3xl pt-8 font-semibold text-[#021202] flex gap-4 items-center'> <span> < AiFillStar /></span>Proof of quality</h3>
                        <p className='text-[16px] font-[500] text-gray-500 pt-2'>Check any pro’s work samples, client reviews, and identity verification</p>

                    </div >
                    <div>
                        <h3 className='text-3xl pt-8 font-semibold text-[#021202] flex gap-4 items-center'> <span> <AiFillDollarCircle /></span>Proof of quality</h3>
                        <p className='text-[16px] font-[500] text-gray-500 pt-2'>Check any pro’s work samples, client reviews, and identity verification</p>

                    </div >
                    <div>
                        <h3 className='text-3xl pt-8 font-semibold text-[#021202] flex gap-4 items-center'> <span> <BsCheckCircleFill /></span>Proof of quality</h3>
                        <p className='text-[16px] font-[500] text-gray-500 pt-2'>Check any pro’s work samples, client reviews, and identity verification</p>

                    </div >
                </div >
                <div className='lg:flex'>
                    <Image src={img9} className='-ml- abslute  w-[347px]  h-[677px]' alt='' />
                    <div className='- text-white rounded-md p-8  bg-[#108a00]'>
                        <h1 className='text-5xl font-semibold'>We re
                            <br />  the worlds work
                            <br /> marketplace</h1>
                        <p className='text-3xl font-semibold'>Award winner</p>
                    </div>
                </div>
            </div >
            <div className='mt-12  lg:flex rounded-md'>
                <Image src={img10} className='rounded-md rounded-r-none lg:w-[600px] lg:h-[630px]' alt='' />
                <div className='text-white p-7 bg-[#1f57c3]'>
                    <p className='py-6 text-[22px]'>For talent</p>

                    <h1 className='text-6xl font-bold'>Find great <br /> work</h1>
                    <h3 className='text-[16px] py-8'>Meet clients you’re excited to work with and take
                        <br />   your career or business to new heights.
                    </h3>
                    <div className='border-t-[1px] flex gap-8 text-[18px] border-white mb-6 mt-28'>
                        <p>Find opportunities for every stage of your freelance career</p>
                        <p>Control when, where, and how you work</p>
                        <p>Explore different ways to earn</p>
                    </div>
                    <button className='px-4 py-2 font-[450] text-blue-500 bg-white rounded-3xl my-'>Find opportutites</button>
                </div>
            </div>
            <div>
                <h1 className='text-6xl font-semibold mt-16 hidden lg:block text-[#001e00]'> Trusted by leading
                    <br />   brands and startups</h1>

                <h1 className='text-5xl font-semibold mt-16 lg:hidden text-[#001e00]'> Trusted by leading
                    brands and startups</h1>


            </div>
            <div className='lg:flex gap-12'>
                <div className='text-white mt-12 p-8 bg-[#001e00] rounded-md'>
                    <h4 className='mb-[10px] text-[22px] font-semibold'>
                        NASDAQ Logo
                        “Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”
                    </h4>

                    <p className='text-[#d5e0d5] font-semibold'>Josh Machiz, Chief Digital Officer</p>
                    <h2 className='text-[#d5e0d5] border-b-[1px] pb-4'>Results</h2>


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
                <div className='text-white mt-12 p-8 bg-[#bc511b] rounded-md'>
                    <h4 className='mb-[10px] text-[22px] font-semibold'>
                        NASDAQ Logo
                        “Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”
                    </h4>

                    <p className='text-[#d5e0d5] font-semibold'>Josh Machiz, Chief Digital Officer</p>
                    <h2 className='text-[#d5e0d5] border-b-[1px] pb-4'>Results</h2>


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

            </div>
            <HomeCategory />
        </div >
    );
};
export default HomeSearch;