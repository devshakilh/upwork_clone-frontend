import Image from "next/image";
import Link from "next/link";
import React from "react";
import Select from "react-select";
import styles from "./TopNav.module.css";
import bangladesh from "../../assets/countries/bangladesh.png";
import usa from "../../assets/countries/usa.png";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const TopNav = ({ className }: { className?: string }) => {
  const languages = [
    {
      value: "english",
      label: "English",
      image: usa,
    },
    {
      value: "bangla",
      label: "Bangla",
      image: bangladesh,
    },
  ];
  return (
    <div className={`w-11/12 mx-auto h-[38px] bg-[#F7F7F7] ${className}`}>
      <div className="h-full mx-auto flex text-black justify-center md:justify-end items-center">
        <a
          href="tel:+8801819474454"
          className="text-[16px] mx-auto hidden md:flex items-center z-50 mr-5"
        >
          <span className="mr-2">Call Time - (10:00 AM - 9:00 PM)</span>
          <BsTelephone />{" "}
          <span className="ml-2 hover:underline hover:text-orange-500 ">
            +8801819474454
          </span>
        </a>
        <div className="flex pl-[22px] md:pl-0 gap-2 md:flex-none md:justify-end justify-start mr-12 md:mr-5">
          <HiOutlineMail fontSize={20} />
          <a href="mailto:support@ameliasoft.com" className="text-[14px]">
            <span className="hidden md:block">support@ameliasoft.com</span>
            <span className="block md:hidden">E-Mail</span>
          </a>
        </div>
        <Select
          className={`${styles.languageChange} border-none flex-1 md:flex-none justify-end`}
          classNamePrefix="select"
          options={languages}
          isSearchable={false}
          styles={{
            control: (base) => ({
              ...base,
              border: 0,
              // This line disable the blue border
              boxShadow: "none",
              backgroundColor: "#f7f7f7",
            }),
          }}
          defaultValue={languages[0]}
          formatOptionLabel={(option) => (
            <div className="flex items-center gap-2">
              {option.image ? (
                <Image
                  style={{
                    width: "30px",
                    objectFit: "contain",
                  }}
                  src={option.image}
                  alt={option.label}
                  className="w-5 md:max-w-none"
                />
              ) : (
                ""
              )}
              <span className="text-[14px] md:text-[14px]">{option.label}</span>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default TopNav;
