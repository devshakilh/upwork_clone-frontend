import Image from "next/image";
import card1 from '../../public/images/cardImg/image 75.png'
import { AiOutlineRight } from "react-icons/ai";

const Investor = () => {
    return (
        <div className="bg-white px-4">
            <div className="flex mx-4 justify-center font-semibold pt-14">
                <div className="text-blue-600 mx-24"><h1> Invest for product </h1></div>
                <div className="text-blue-600 mx-24"><h1> Invest for industries </h1></div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 mx-4 gap-2">
                <div className="card w-72 p-4 bg-[#F5F8FD]">

                    <Image src={card1} width="250" height="200" alt="card-img" />

                    <p className="w-full text-black mt-3 ">The software development lifecycle</p>
                    <h4 className="py-3 flex text-blue-700">Invest <span className="mt-1 mx-2"><AiOutlineRight /></span></h4>
                </div>
                <div className="card w-72 p-4 bg-[#F5F8FD]">

                    <Image src={card1} width="250" height="200" alt="card-img" />

                    <p className="w-full text-black mt-3 ">The E-commerce Business lifestyle</p>
                    <h4 className="py-3 flex text-blue-700">Invest <span className="mt-1 mx-2"><AiOutlineRight /></span></h4>
                </div>
                <div className="card w-72 p-4 bg-[#F5F8FD]">

                    <Image src={card1} width="250" height="200" alt="card-img" />

                    <p className="w-full text-black mt-3 ">The Academic Department </p>
                    <h4 className="py-3 flex text-blue-700">Invest <span className="mt-1 mx-2"><AiOutlineRight /></span></h4>
                </div>
                <div className="card w-72 p-4 bg-[#F5F8FD]">

                    <Image src={card1} width="250" height="200" alt="card-img" />

                    <p className="w-full text-black mt-3 ">The Academic Department </p>
                    <h4 className="py-3 flex text-blue-700">Invest <span className="mt-1 mx-2"><AiOutlineRight /></span></h4>
                </div>
            </div>
        </div>
    );
};

export default Investor;