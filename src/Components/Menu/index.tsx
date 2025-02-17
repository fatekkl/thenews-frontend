"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu({aline = "", justify = ""}) {

    const color = "#000000"
    const [menuOpen, setMenuOpen] = useState(false)



    const transformMenu = () => {
        setMenuOpen(prev => !prev)
        console.log(menuOpen)
    }

    return (
        <div onClick={transformMenu} className={`w-full flex mt-10 pl-10 ${justify}  absolute z-50 max-sm:hidden`}>
            <div className={`flex flex-col gap-5 fixed  ${aline}  cursor-pointer transition-all duration-2000 ease-in-out z-50 mt-6 mr-10`}>
                <svg
                    className={`transition-all duration-500 ease-in-out ${menuOpen ? "-rotate-45" : "rotate-0"}`}
                    width={`${menuOpen ? "50" : "70"}`}
                    height="4"
                    viewBox={`${menuOpen ? "0 0 50 4" : "0 0 70 4"}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path className="transition-all duration-500 ease-in" d={`${menuOpen ? "M0 2H50" : "M0 2H70"}`} stroke={color} strokeWidth="4" />
                </svg>
                <svg
                    className={`transition-all duration-500 ease-in ${menuOpen ? "-rotate-45" : "rotate-0"}`}
                    width="50"
                    height="4"
                    viewBox="0 0 50 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path className="transition-all duration-500 ease-in" d="M0 2H50" stroke={color} strokeWidth="4" />
                </svg>
            </div>
            <div className={`flex flex-col gap-4  fixed w-80 h-96 mr-6 -mt-2 rounded-2xl transition-all duration-500 ease-in-out transform origin-top-left ${menuOpen ? "scale-100 bg-gray-50" : "scale-0"}`}>
                <div className="flex flex-col items-center gap-4 mt-20 h-full">
                    <Link to={"/authenticated"}>
                        <p className={`text-jet font-bold text-[1.275rem] ${menuOpen ? "opacity-100 " : "opacity-0"}`}>Seu desempenho</p>
                    </Link>
                    <Link to={"/dashboard"}>
                        <p className={`text-jet font-bold text-[1.275rem] ${menuOpen ? "opacity-100 " : "opacity-0"}`}>Dashboard Administrativo</p>
                    </Link>
                    <Link to={"/"}>
                        <p className={`text-jet font-bold text-[1.275rem] ${menuOpen ? "opacity-100 " : "opacity-0"}`}>Desconectar</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}


