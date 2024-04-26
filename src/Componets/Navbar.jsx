import { useState,useEffect } from 'react';
import { MdOutlineMyLocation } from "react-icons/md";
import getIcon from "../assets/weather_icons/getIcon";


const Navbar = ({ getLocation }) => {
  return (
    <div className="max-w-[1200px] sm:py-0 sticky  top-[-2px] border-b sm:border-none  py-2  sm:h-[17dvh] bg-[#31363F] sm:rounded-full   z-[100]  flex justify-between  px-5 items-center font-robo">
      <div
        className={
          "group  sm:scale-100 scale-75  cursor-pointer  logo w-fit h-full flex justify-around items-center gap-2"
        }
      >
        <img
          src={getIcon("logo")}
          alt="Wheather Logo"
          className="w-[5rem]  opacity-80 bg-transparent group-hover:opacity-65 group-hover:scale-95 transition-all duration-300 group-hover:rotate-[25deg]"
        />
        <span className="text-white font-extrabold bg-blue-400 px-2 py-1 rounded-md  text-sm absolute bottom-1/4   group-hover:bottom-1/3 group-hover:bg-transparent group-hover:scale-110 group-hover:font-extrabold group-hover:text-[14px] transition-all duration-300">
          Cloudyy
        </span>
      </div>

      <div className=""></div>

      <div onClick={getLocation} className="location z-0  cursor-pointer hover:opacity-70 sm:size-[70px]   transition-all duration-300 text-gray-700 w-fit flex justify-around text-center scale-90 items-center gap-3 bg-white px-5 py-5 rounded-s-full rounded-e-full">
        <MdOutlineMyLocation
         
          size={25}
          className="text-gray-700"
        />
      </div>
    </div>
  );
};
 
export default Navbar;