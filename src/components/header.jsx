import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="w-full h-[100px] bg-accent flex relative">
            <img src="/logo.png" alt="logo" className="h-full" />
            <div className="w-full h-full flex text-xl text-primary justify-center items-center gap-[30px]">
                <Link to="/">Home</Link>
                <Link to="/products">products</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </div>
            <Link to="/cart" className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl">
                <BiShoppingBag />
            </Link>

        </header>       
    )
}