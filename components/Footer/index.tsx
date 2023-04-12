import React from 'react';

const Footer = () => {
    return (
        <div className=' text-white bg-[#001e00] lg:mx-16 rounded-md'>
            <div className='lg:flex mt-20  gap-16'>
                < div className='pt-16  px-16' >
                    < p className='py-4' > For Clients</p >
                    <p>How to Hire</p>
                    <p>
                        Project Catalog

                        <br />    Talent Scout
                        <br />   Hire an Agency
                        <br />    Enterprise
                        <br /> Payroll Services
                        <br />Direct Contracts
                        <br />   Hire Worldwide
                        Hire in the USA
                    </p>
                </div >
                < div className='pt-16 px-16' >
                    < p className='py-4' > For Talents</p >
                    <p>
                        How to Find Work
                        <br /> Direct Contracts
                        <br /> Find Freelance Jobs Worldwide
                        Find Freelance Jobs in the USA
                    </p>
                </div >
                < div className='pt-16 px-16' >
                    < p className='py-4' > Resources</p >
                    <p>
                        Help & Support
                        <br /> Success Stories
                        <br />    Upwork Reviews
                        <br /> Resources
                        <br />    Blog
                        <br />   Community
                        <br />   Affiliate Program
                        Free Business tools
                    </p>
                </div >
                < div className='pt-16 px-16 ' >
                    < p className='py-4' >Company</p >
                    <p>
                        About Us
                        <br />  Leadership
                        <br /> Investor Relations
                        <br />   Careers
                        <br /> Our Impact
                        <br /> Press
                        <br />   Contact Us
                        <br />   Trust, Safety & Security
                        Modern Slavery Statement
                    </p>
                </div >

            </div>
            <div className='lg:flex px-16  gap-6 border-t-[1px] mt-4 mb-4 pb-20 pt-4 lg:mx-16'>
                <p>  © 2015 - 2023 Upwork® Global Inc.</p>

                <p> Terms of Service</p>
                <p> Privacy Policy</p>
                <p>   CA Notice at Collection</p>
                <p> Cookie Settings</p>
                <p> Accessibility</p>
            </div>
        </div >
    );
};

export default Footer;