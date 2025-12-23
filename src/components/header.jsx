import { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { LuListCollapse } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import UserData from "./userData";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";

export default function Header() {
    const [sideBarOpen, setSideBarOpen] = useState(false)
    
    const location = useLocation();
    const page = location.pathname

    return(
        <header className="w-full h-[100px] bg-accent flex items-center relative">
            <LuListCollapse onClick={()=>{setSideBarOpen(true)}} className="text-white my-auto text-2xl mx-6 lg:hidden"/>
            <img src="/logo.png" alt="logo" className="h-[65px] lg:h-full" />
            <div className="w-full h-full hidden lg:flex text-2xl text-primary justify-center items-center contacts gap-[30px]">
                <Link to="/" className="flex flex-col items-center gap-1 pt-2">Home<FaChevronUp className={`text-sm transition duration-500 ${page == "/" ? "opacity-100" : "opacity-0"}`} /></Link>
                <Link to="/products" className="flex flex-col items-center gap-1 pt-2">products<FaChevronUp className={`text-sm transition duration-500 ${page.startsWith("/products") ? "opacity-100" : "opacity-0"}`} /></Link>
                <Link to="/about" className="flex flex-col items-center gap-1 pt-2">About<FaChevronUp className={`text-sm transition duration-500 ${page == "/about" ? "opacity-100" : "opacity-0"}`} /></Link>
                <Link to="/contact" className="flex flex-col items-center gap-1 pt-2">Contact<FaChevronUp className={`text-sm transition duration-500 ${page == "/contact" ? "opacity-100" : "opacity-0"}`} /></Link>
            </div>
            <div className="hidden absolute right-24 top-0 h-full lg:flex items-center">
                <UserData />
            </div>
            <Link to="/cart" className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl">
                <BiShoppingBag />
            </Link>
           
            <div className={`fixed top-0 left-0 w-full h-screen z-20 transition ${ sideBarOpen ? "pointer-events-auto" : "pointer-events-none"}`}
>
            <div
                // onClick={() => setSideBarOpen(false)}
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                sideBarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            />

            <div className="relative w-[250px] h-screen">
                <div className={` absolute top-0 left-0 h-full w-[250px] z-30  bg-white transition-transform duration-800 ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="h-[100px] w-full bg-accent flex justify-center items-center">
                        <img src="/logo.png" alt="logo" className="h-[80px]" />
                        <LuListCollapse
                        onClick={() => setSideBarOpen(false)}
                        className="text-white my-auto text-2xl ml-6 rotate-180"
                        />
                    </div>
                    <div className="w-full flex bg-accent p-6">
                        <UserData />
                    </div>
                <div className="w-full h-full flex flex-col text-xl text-secondary pl-6 pt-4 gap-3">
                    <Link
                    to="/"
                    className="flex flex-row items-center"
                    onClick={() => {
                        setSideBarOpen(false);
                    }}
                    >
                    <FaChevronRight className={`text-sm ${page == "/" ? "opacity-100" : "opacity-0"}`} />
                    Home
                    </Link>

                    <Link
                    to="/products"
                    className="flex flex-row items-center"
                    onClick={() => {
                        setSideBarOpen(false);
                    }}
                    >
                    <FaChevronRight className={`text-sm ${page.startsWith("/products") ? "opacity-100" : "opacity-0"}`} />
                    Products
                    </Link>

                    <Link
                    to="/about"
                    className="flex flex-row items-center"
                    onClick={() => {
                        setSideBarOpen(false);
                    }}
                    >
                    <FaChevronRight className={`text-sm ${page == "/about" ? "opacity-100" : "opacity-0"}`} />
                    About
                    </Link>

                    <Link
                    to="/contact"
                    className="flex flex-row items-center"
                    onClick={() => {
                        setSideBarOpen(false);
                    }}
                    >
                    <FaChevronRight className={`text-sm ${page == "/contact" ? "opacity-100" : "opacity-0"}`} />
                    Contact
                    </Link>
                </div>
                </div>
            </div>
            </div>


        </header>       
    )
}