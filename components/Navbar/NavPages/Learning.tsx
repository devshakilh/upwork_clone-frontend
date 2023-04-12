import Image from "next/image";
import Link from "next/link";
import card1 from '../../public/images/cardImg/image 75.png'
const Learning = () => {
    return (
        <div className="mx-3 bg-white">
            <div className="flex px-3 gap-5 py-3">
                <Link className="hover:text-sky-500 text-black" href="">Web development</Link>
                <Link className="hover:text-sky-500 text-black" href="">Mobile app development</Link>
                <Link className="hover:text-sky-500 text-black" href="">Software Development</Link>
                <Link className="hover:text-sky-500 text-black" href="">Web Design</Link>
                <Link className="hover:text-sky-500 text-black" href="">English</Link>

            </div>
            <h1 className="border-b-2 mx-4 border-slate-500"></h1>


            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mx-4 gap-12">
                <div className="card w-72 p-4 bg-[#F5F8FD]">

                    <Image src={card1} width="250" height="200" alt="card-img" />
                    <h1 className="text-black">Python</h1>
                    <p className="w-full text-blue-600 mt-3 ">Developer services and tools automate the software development lifecycle (SDLC)</p>

                </div>
                <div className="card w-72 p-4 bg-[#F5F8FD]">

                    <Image src={card1} width="250" height="200" alt="card-img" />
                    <h1 className="text-black">MERN</h1>
                    <p className="w-full text-blue-600 mt-3 ">Developer services and tools automate the software development lifecycle (SDLC)</p>

                </div>
                <div className="card w-72 p-4 bg-[#F5F8FD]">

                    <Image src={card1} width="250" height="200" alt="card-img" />
                    <h1 className="text-black">Javascript</h1>
                    <p className="w-full text-blue-600 mt-3 ">Developer services and tools automate the software development lifecycle (SDLC)</p>

                </div>
                <div className="card w-72 p-4 bg-[#F5F8FD]">

                    <Image src={card1} width="250" height="200" alt="card-img" />
                    <h1 className="text-black">Python</h1>
                    <p className="w-full text-blue-600 mt-3 ">Developer services and tools automate the software development lifecycle (SDLC)</p>

                </div>
                <div className="card w-72 p-4 bg-[#F5F8FD]">

                    <Image src={card1} width="250" height="200" alt="card-img" />
                    <h1 className="text-black">MERN</h1>
                    <p className="w-full text-blue-600 mt-3 ">Developer services and tools automate the software development lifecycle (SDLC)</p>

                </div>
                <div className="card w-72 p-4 bg-[#F5F8FD]">

                    <Image src={card1} width="250" height="200" alt="card-img" />
                    <h1 className="text-black">MERN</h1>
                    <p className="w-full text-blue-600 mt-3 ">Developer services and tools automate the software development lifecycle (SDLC)</p>

                </div>

            </div>
        </div>
    );
};

export default Learning;