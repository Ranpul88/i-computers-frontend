import { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { LuListCollapse } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Header() {
    const [sideBarOpen, setSideBarOpen] = useState(false)

    return(
        <header className="w-full h-[100px] bg-accent flex items-center relative">
            <LuListCollapse onClick={()=>{setSideBarOpen(true)}} className="text-white my-auto text-2xl mx-6 lg:hidden"/>
            <img src="/logo.png" alt="logo" className="h-[80px] lg:h-full" />
            <div className="w-full h-full hidden lg:flex text-xl text-primary justify-center items-center gap-[30px]">
                <Link to="/">Home</Link>
                <Link to="/products">products</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </div>
            <Link to="/cart" className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl">
                <BiShoppingBag />
            </Link>
            {sideBarOpen && <div className="fixed lg:hidden w-[100vh] h-screen top-0 left-0 bg-black/50 z-20 transition-all duration-300">
                <div className="w-[250px] h-screen flex flex-col relative ">
                    <div className="w-full h-full absolute bg-white left-[-250px] transform-flat translate-x-[250px] transition-transform duration-1000 flex flex-col">
                        <div className="h-[100px] w-full bg-accent flex justify-center items-center">
                            <img src="/logo.png" alt="logo" className="h-[80px]" />
                            <LuListCollapse onClick={()=>{setSideBarOpen(false)}} className="text-white my-auto text-2xl ml-6 rotate-180"/>
                        </div>
                        <div className="w-full h-full flex flex-col text-xl text-secondary justify-start items-start gap-3">
                            <a href="/"  onClick={()=>{setSideBarOpen(false)}}>Home</a>
                            <a href="/products"  onClick={()=>{setSideBarOpen(false)}}>Products</a>
                            <a href="/about"  onClick={()=>{setSideBarOpen(false)}}>About</a>
                            <a href="/contact"  onClick={()=>{setSideBarOpen(false)}}>Contact</a>
                        </div>
                    </div>
                </div>
            </div>}

        </header>       
    )
}