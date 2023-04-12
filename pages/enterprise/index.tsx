import Image from 'next/image';
import React from 'react';
import img1 from '../../assests/enterprise/635a4db7ed3737f83460db80_img (1).jpg'
import img2 from '../../assests/enterprise/606ad17043ba40d94531ff42_Airbnb.svg'
import img3 from '../../assests/enterprise/606ad17089ad7f5f01b74d27_Bissell.svg'
import img4 from '../../assests/enterprise/606ad171bd184644e7f53d6c_Microsoft.svg'
import img5 from '../../assests/enterprise/606ad171e5289d3760cfac09_logo-automatic.svg'
import img6 from '../../assests/enterprise/60c6f358639e8cc66cee6e64_NASDAQ_Logo.svg'
import img7 from '../../assests/enterprise/62f365a1e38c6d5e7f1e8f87_Photo (3) (1).jpg'
import img8 from '../../assests/enterprise/62f365e45a0566f2b8ac55a7_Photo (5) (1).jpg'
import img9 from '../../assests/enterprise/62f365e0e8660c716155f514_Photo (4) (1).jpg'
import img10 from '../../assests/enterprise/62ebb481cb265c86225715e4_completed.svg'
import img11 from '../../assests/enterprise/62ebb4812edcdb50c07ae1f0_welcome-freelancer.svg'
import img12 from '../../assests/enterprise/62ebb483cb265c26da5715e9_move-outside.svg'
import img13 from '../../assests/enterprise/62ebb483227cd87f82e009a3_avatar-customer-service-female-one.svg'
import img14 from '../../assests/enterprise/62f3667ce8660c20ed55f97c_Frame 8220 (3) (1).jpg'
import img15 from '../../assests/enterprise/62f3667fd64065c307f13e6a_Frame 8220 (4) (1).jpg'
import img16 from '../../assests/enterprise/62ebd6ad861f6f4f4fdab528_freelancer.svg'
import img17 from '../../assests/enterprise/62ebd6aea2b05a14e0442413_expertise.svg'
import img18 from '../../assests/enterprise/62ebd6ae7ba900a0f14512d0_rating.svg'
import img19 from '../../assests/enterprise/62ebd6ad0e99ef7bffceb84c_client.svg'
import { AiOutlineCheck } from "react-icons/ai";
import img20 from '../../assests/enterprise/62f366e603388ad2e190051a_Mask Group (7) (1).jpg'
import img21 from '../../assests/enterprise/64256a077b99eade1c086fde_Frame 55673 (1).svg'
import img22 from '../../assests/enterprise/64256a2e3b49e1e91458a329_Frame 55673 (2).svg'
import img23 from '../../assests/enterprise/64256a204c408957a87ba67a_Frame 55673 (1) (1).png'
import Slider from './slidere';
import ReactPlayer from 'react-player'

const Enterprise = () => {
    return (
        <div className='lg:px-12 px-6 text-white'>

            <h1>Enterprise Suite</h1>

            <div className='lg:flex '>
                <div className='lg:w-1/2 p-8 rounded-xl rounded-r-none bg-[#1f57c3]'>
                    <h4 className='text-[#d5e0d5] text-[22px] font-[500] pt-8'>Enterprise Suite</h4>

                    <h1 className='font-[500] mb-[24px] text-white text-2xl lg:text-5xl'>This is how</h1>

                    <h3 className='text-[#01cdbe] font-[500] text-3xl lg:text-6xl'>we jetpack over <br /> the skills gap.</h3>
                    <p className='mb-[48px] font-[500] text-[18px] pt-4'>Access the top 1% of talent on a full-service Enterprise platform, <br /> customized to meet your needs. This is how flexibility works now.</p>
                    <button className='bg-white py-2 font-[500] px-6 rounded-3xl text-blue-500'>Lets talk</button>
                </div>
                <Image className='lg:w-1/2 rounded-xl hidden lg:block lg:rounded-l-none' src={img1} alt='' />
            </div>
            <div className='py-12 hidden lg:flex  justify-between'>
                <Image src={img2} alt='' />
                <Image src={img3} alt='' />
                <Image src={img4} alt='' />
                <Image src={img5} alt='' />
                <Image src={img6} alt='' />
                <Image src={img2} alt='' />

            </div>
            <div className='py-12 lg:hidden flex  justify-between'>
                <Image src={img2} alt='' />
                <Image src={img3} alt='' />
                <Image src={img4} alt='' />


            </div>
            <div>
                <h1 className='text-[38px] font-[450] mb-[32px] text-[#001e00]'>Enterprise Suite is how work gets done at scale</h1>
                <div className='lg:flex '>
                    <Image className='lg:w-2/6 lg:h-2/6' src={img8} alt='' />
                    <div className='lg:w-2/6 bg-[#f2f7f2]  p-4 m-4'>
                        <h3 className='text-[#001e00] text-[28px] font-[500] py-8'>Handle blended workforce logistics in one place</h3>
                        <h4 className='text-[#5e6d55] font-[450] text-[20px]'>Source, manage, and pay your hybrid team with ease and flexibility</h4>
                        <p className='mt-28 border-gray-400 border-t-[1px] text-[24px] text-[#5e6d55]'>Classification coverage in 180+ countries</p>
                    </div>
                    <Image className='lg:w-2/6 lg:h-2/6' src={img7} alt='' />
                </div>
            </div>
            <div className='lg:flex gap-6' >
                <div className='lg:-mt-48 rounded-md bg-[#f2f7f2] lg:w-2/6 p-6'>
                    <h2 className='text-[#001e00] mb-[32px] text-[30px] font-[450]'>Enhance existing teams and expand skill sets</h2>
                    <p className='text-[#5e6d55] font-[450] mb-[123px] text-[22px]'>Connect with Expert-Vetted talent, prescreened for skills, experience, and professionalism.</p>
                    <p className='border-t-[1px] mt-5 lg:ml-[126px] w-40 text-[#5e6d55] font-[500] text-[24px] border-gray-400'>10,000+ skills</p>
                    <p className=' mt-5 lg:ml-[126px] w-44 text-[#5e6d55] font-[500] text-[24px]'>90+ categories</p>
                </div>
                <Image className='lg:w-2/6 lg:h-2/6' src={img9} alt='' />
                <div className='lg:-mt-48 rounded-md bg-[#f2f7f2] lg:w-2/6 p-6'>
                    <h2 className='text-[#001e00] mb-[32px] text-[30px] font-[450]'>Enhance existing teams and expand skill sets</h2>
                    <p className='text-[#5e6d55] font-[450] mb-[123px] text-[22px]'>Connect with Expert-Vetted talent, prescreened for skills, experience, and professionalism.</p>
                    <p className='border-t-[1px] mt-5 pt-4  text-[#5e6d55] font-[500] text-[24px] border-gray-400'>Hire in 3 days or less (on average)</p>
                    <p className=' mt-5   text-[#5e6d55] font-[500] text-[24px]'>Save money compared to traditional sources</p>
                </div>
            </div>
            <div >
                <h1 className='mb-[32px] text-[#001e00] font-[450] text-[38px]'>From small projects to complex initiatives, we can help</h1>
                <div className='lg:flex gap-6'>
                    <div>
                        <Image src={img10} alt='' />
                        <h2 className='mt-4 mb-[16px] text-[#001e00]  font-[500] text-[24px]'>Move projects across the finish line</h2>
                        <p className='mb-[20px] text-[#5e6d55] text-[16px] font-[500] '>Complete tasks and short-term projects with pros who can meet your business needs</p>
                    </div>
                    <div>
                        <Image src={img11} alt='' />
                        <h2 className='mt-4 mb-[16px] text-[#001e00]  font-[500] text-[24px]'>Move projects across the finish line</h2>
                        <p className='mb-[20px] text-[#5e6d55] text-[16px] font-[500] '>Complete tasks and short-term projects with pros who can meet your business needs</p>
                    </div>
                    <div>
                        <Image src={img12} alt='' />
                        <h2 className='mt-4 mb-[16px] text-[#001e00]  font-[500] text-[24px]'>Move projects across the finish line</h2>
                        <p className='mb-[20px] text-[#5e6d55] text-[16px] font-[500] '>Complete tasks and short-term projects with pros who can meet your business needs</p>
                    </div>
                    <div>
                        <Image src={img13} alt='' />
                        <h2 className='mt-4 mb-[16px] text-[#001e00]  font-[500] text-[24px]'>Move projects across the finish line</h2>
                        <p className='mb-[20px] text-[#5e6d55] text-[16px] font-[500] '>Complete tasks and short-term projects with pros who can meet your business needs</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='mb-[32px] text-[#001e00] mt-16 text-[38px] font-[450]'>Enterprise solutions to scale a winning talent strategy</h2>
                <div className='lg:flex gap-12 items-center'>
                    <Image className='lg:w-2/4 rounded-md' src={img14} alt='' />
                    <div>
                        <div>
                            <h2 className='text-[24px] font-[500] mb-[5px] text-[#001e00]'>Talent services and management</h2>
                            <p className='text-[#5e6d55] pb-6 mb-[8px] font-[500] text-[16px] border-b-[1px] border-gray-400'>Do it all in one place, from shortlisting top candidates to project management to collaboration tools.</p>
                        </div>
                        <div>
                            <h2 className='text-[24px] font-[500] mb-[5px] text-[#001e00]'>Talent services and management</h2>
                            <p className='text-[#5e6d55] pb-6 mb-[8px] font-[500] text-[16px] border-b-[1px] border-gray-400'>Do it all in one place, from shortlisting top candidates to project management to collaboration tools.</p>
                        </div>
                        <div>
                            <h2 className='text-[24px] font-[500] mb-[5px] text-[#001e00]'>Talent services and management</h2>
                            <p className='text-[#5e6d55] pb-6 mb-[8px] font-[500] text-[16px] border-b-[1px] border-gray-400'>Do it all in one place, from shortlisting top candidates to project management to collaboration tools.</p>
                        </div>
                        <button className='text-white font-[500] py-2 px-6 cursor-pointer rounded-3xl text-[16px] my-6 bg-[#14a800]'>Lets talk</button>
                    </div>
                </div>
            </div>
            <div>

                <div className='lg:flex gap-12 items-center'>
                    <Image className='lg:w-2/4 rounded-md' src={img15} alt='' />
                    <div className='pt-6'>
                        <div>
                            <h2 className='text-[24px] font-[500] mb-[5px] text-[#001e00]'>Talent services and management</h2>
                            <p className='text-[#5e6d55] pb-6 mb-[8px] font-[500] text-[16px] border-b-[1px] border-gray-400'>Do it all in one place, from shortlisting top candidates to project management to collaboration tools.</p>
                        </div>
                        <div>
                            <h2 className='text-[24px] font-[500] mb-[5px] text-[#001e00]'>Talent services and management</h2>
                            <p className='text-[#5e6d55] pb-6 mb-[8px] font-[500] text-[16px] border-b-[1px] border-gray-400'>Do it all in one place, from shortlisting top candidates to project management to collaboration tools.</p>
                        </div>
                        <div>
                            <h2 className='text-[24px] font-[500] mb-[5px] text-[#001e00]'>Talent services and management</h2>
                            <p className='text-[#5e6d55] pb-6 mb-[8px] font-[500] text-[16px] border-b-[1px] border-gray-400'>Do it all in one place, from shortlisting top candidates to project management to collaboration tools.</p>
                        </div>
                        <button className='text-white font-[500] py-2 px-6 cursor-pointer rounded-3xl text-[16px] my-6 bg-[#14a800]'>Lets talk</button>
                    </div>
                </div>
                <div className='rounded-md bg-blue-600 p-6 mt-36'>
                    <h3 className='lg:pl-16 mb-[12px] text-white text-[30px]'>Enterprise features</h3>
                    <p className='lg:pl-16 mb-[20px] font-[500]'>See how our features support every business need and flex to your process</p>
                    <button className='text-black bg-white px-6 py-2 rounded-3xl'>Learn more</button>
                </div>
                <div className='pt-40 bg-[#f2f7f2]'>
                    <h2 className='text-[#001e00] mb-[16px] text-[38px] font-[450]'>We’ll show you how, step by step</h2>
                    <p className='text-[#5e6d55] mb-[30px] text-[16px] font-[500]'>Enterprise clients benefit from dedicated support with top talent and a robust platform.</p>
                    <div className='lg:flex gap-8'>
                        <div className='p-4 rounded-md bg-white'>
                            <Image src={img16} alt='' />
                            <h2 className='text-[#001e00] mb-[8px] text-[18px]'>Account Manager</h2>
                            <p className='text-[16px] font-[500] text-[#5e6d55]'>Maintains your account and works with your team to maximize the return on your Upwork investment.</p>
                        </div>
                        <div className='p-4 rounded-md bg-white'>
                            <Image src={img17} alt='' />
                            <h2 className='text-[#001e00] mb-[8px] text-[18px]'>Account Manager</h2>
                            <p className='text-[16px] font-[500] text-[#5e6d55]'>Maintains your account and works with your team to maximize the return on your Upwork investment.</p>
                        </div>
                        <div className='p-4 rounded-md bg-white'>
                            <Image src={img18} alt='' />
                            <h2 className='text-[#001e00] mb-[8px] text-[18px]'>Account Manager</h2>
                            <p className='text-[16px] font-[500] text-[#5e6d55]'>Maintains your account and works with your team to maximize the return on your Upwork investment.</p>
                        </div>
                        <div className='p-4 rounded-md bg-white'>
                            <Image src={img19} alt='' />
                            <h2 className='text-[#001e00] mb-[8px] text-[18px]'>Account Manager</h2>
                            <p className='text-[16px] font-[500] text-[#5e6d55]'>Maintains your account and works with your team to maximize the return on your Upwork investment.</p>
                        </div>
                    </div>
                    <button className='text-white font-[500] px-6 py-2 bg-[#14a800] rounded-3xl my-6'>Lets talk</button>
                </div>
            </div>
            <div>
                <h2 className='mb-[32px] text-[#001e00] text-[38px] font-[450]'>How it works</h2>
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:w-4/12'>
                        <div className='flex gap-4 items-center'>
                            <span className=' font-[500] text-[#14a800]'><AiOutlineCheck /></span>
                            <p className='text-[#5e6d55] text-[16px] font-[500]'>Tell us about your project and the skills youre looking for</p>
                        </div>
                        <div className='flex gap-4 items-center py-4'>
                            <span className='font-[500] text-[#14a800]'><AiOutlineCheck /></span>
                            <p className='text-[#5e6d55] text-[16px] font-[500]'>Tell us about your project and the skills youre looking for</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <span className='font-[500] text-[#14a800]'><AiOutlineCheck /></span>
                            <p className='text-[#5e6d55] text-[16px] font-[500]'>Tell us about your project and the skills youre looking for</p>
                        </div>

                    </div>
                    <ReactPlayer className='lg:w-8/12 rounded-md' url='https://www.youtube.com/watch?v=wWgIAphfn2U' />
                </div>
            </div>
            <div>
                <h3 className='mb-[30px] text-[#001e00] text-[38px] pt-16 font-[450]'>Trusted by leading brands and startups</h3>
                <div className='lg:flex gap-12'>


                </div>

                <Slider />
            </div>

            <div className='pb-16'>
                <h1 className='text-[#001e00] mt-20 mb-6 text-[38px] font-[500]'>Resources to move your business forward</h1>
                <div className='lg:flex gap-8 '>
                    <div>
                        <Image className='mb-4  lg:w-[450px]' src={img21} alt='' />
                        <h4 className='text-[#001e00] text-[30px] font-[500]'>The Great Work Teardown</h4>
                    </div>
                    <div>
                        <Image className='mb-4  lg:w-[390px]' src={img22} alt='' />
                        <h4 className='text-[#001e00] text-[30px] font-[500]'>

                            Strategic Guide to Build and Scale <br /> a Blended Workforce</h4>
                    </div>
                    <div>
                        <Image className='mb-4 lg:w-[360px] ' src={img23} alt='' />
                        <h4 className='text-[#001e00] text-[30px] font-[500]'>Why Trust Is the Secret <br /> Ingredient to Scaling a Successful Talent  Solution</h4>
                    </div>
                </div>
            </div>

            <div className='lg:flex items-center rounded-md py6 bg-[#bda1e7]  mt-36'>

                <div className='w-3/4 p-6'>
                    <p className='text-3xl text-black mb-[20px] font-[500]'>Learn how Enterprise Suite can help you grow your business
                        Lets talk
                    </p>
                    <button className='text-black bg-white px-6 py-2 rounded-3xl font-[500] mt-4'>Lets talk</button>
                </div>
                <Image className='lg:2/6 rounded-l-none lg:w-1/4 rounded-md' src={img20} alt='' />
            </div>
        </div >
    );
};

export default Enterprise;