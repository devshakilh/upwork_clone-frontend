import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import NavLinks from "./NavLinks";
import logo from '../../assests/logo.png'
import { GrMenu, GrSearch } from "react-icons/gr";
import { useRouter } from "next/router";
import { useDebounce } from "use-debounce";
import MobileNav from "./MobileNav";
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openInput, setOpenInput] = useState<boolean>(false);
  const [mobileOpenInput, setMobileOpenInput] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  // const [searchValue, setSearchValue] = useState<string>("");

  const [data] = useDebounce(searchValue, 1000);

  const router = useRouter();
  // console.log(router.pathname.slice(1,router.pathname.length));



  const clickRef = useRef<any>();
  const searchRef = useRef<any>();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("click", handleSearchOutside);
  }, []);

  const handleSearchOutside = (e: any) => {
    if (!searchRef?.current?.contains(e.target)) {
      setSearchValue("");
    }
  };
  const handleClickOutside = (e: any) => {
    if (!clickRef?.current?.contains(e.target)) {
      // console.log("clicked outside");
      setOpenModal(false);
      // setSearchValue("")
    } else {
      // console.log("clicked inside");
      setOpenModal(true);
    }
  };

  return (
    <nav
      className={`bg-white ${openInput && "border-t-2 border-t-[ffb70a]"
        } z-[999] sticky top-0 font-[Segoe UI] h-[70px] border-b-[1px] border-gray-200`}
    >
      <div
        className={
          "w-11/12 mx-auto h-full flex items-center justify-between font-medium"
        }
      >
        {!mobileOpenInput && (
          <>
            <div className="md:mb-2 md:w-auto text-[#14a800] text-2xl w-full flex justify-between">
              <Link href="/">
                {" "}
                UpWork
              </Link>
            </div>
            <ul
              className={`${openInput && "md:hidden lg:hidden"
                } md:flex items-center hidden uppercase text-black md:justify-between px-2`}
            >
              <NavLinks />
            </ul>
          </>
        )}

        {/* mobile device  */}
        <MobileNav open={open} setOpen={setOpen} />
        <div className="lg:flex gap-2 items-center hidden ">
          <p className="absolute px-2 "><FiSearch /></p>
          <input className="text-gray40 bg-[#e4ebe4] py-2 rounded-3xl px-10 " type="search" placeholder="Search" name="" id="" />
          <select className="selec absolute bg-[#e4ebe4] border-l-[1px] pl-2 border-gray-400  ml-44">
            <option disabled selected>Talent</option>
            <option>Homer</option>
            <option>Marge</option>

            <option>Maggie</option>
          </select>
        </div>
        {!mobileOpenInput && (
          <div className="hidden md:flex items-center gap-3 h-full">


            <div ref={clickRef} className="">
              <div
                className={`flex justify-center items-center text-sm lg:text-lg relative cursor-pointer ${openModal && "text-[#14a800]"
                  } -20 md:mt-[0.5px]`}
              >
                <span className="text-sm bg-[#14a800]  text-white py-2 px-6 rounded-3xl">
                  Sign Up
                </span>{" "}

              </div>

            </div>
          </div>
        )
        }

        {/* mobile */}
        {
          mobileOpenInput && (
            <div className="md:hidden w-[80%]">
              <input
                type="text"
                className="border-2 pl-3 focus:outline-none rounded-md w-full border-gray-400 h-[40px]"
                placeholder="Search..."
              />
            </div>
          )
        }


        <div className="text-3xl md:hidden z-50" onClick={() => setOpen(!open)}>

          <GrMenu />
        </div>
      </div >
    </nav >
  );
};

export default Navbar;
