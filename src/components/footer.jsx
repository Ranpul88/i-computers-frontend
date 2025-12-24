import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full h-24 bg-accent text-white flex flex-col justify-center items-center pt-2 gap-4">
        <div className="w-full flex items-center justify-center gap-4">
            <Link to="https://lk.linkedin.com/"><FaLinkedin className="text-2xl pointer-cursor"/></Link>
            <Link to="https://www.youtube.com/"><FaYoutube className="text-2xl pointer-cursor" /></Link>
            <Link to="https://web.facebook.com/?_rdc=1&_rdr#"><FaFacebook className="text-2xl pointer-cursor" /></Link>
            <Link to="https://www.instagram.com/accounts/login/"><FaInstagram className="text-2xl pointer-cursor" /></Link>

        </div>
        <h1 className="text-lg">© 2025 i-Computers. All rights reserved.</h1>

    </div>
  )
}
