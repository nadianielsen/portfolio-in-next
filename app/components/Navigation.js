"use client"
import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi"
import { FiInfo } from "react-icons/fi"
import { AiOutlinePicture } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
import { useRouter } from "next/navigation";

const Navigation = () => {
    const router = useRouter()
    

    return ( 
        <nav className="flex justify-around my-3.5 text-xs text-center">
            <Link href={"/"} className={router.pathname == "/" ? "text-red-500" : ""}><BiHomeAlt2 className="mx-3 text-xl"/>Home</Link>
            <Link href={"/about"} className={router.pathname == "/about" ? "text-red-500" : ""}><FiInfo className="mx-3 text-xl"/>About</Link>
            <Link href={"/gallery"} className={router.pathname == "/gallery" ? "text-red-500" : ""}><AiOutlinePicture className="mx-3 text-xl"/>Gallery</Link>
            <Link href={"/contact"} className={router.pathname == "/contact" ? "text-red-500" : ""}><BsTelephone className="mx-3 text-xl"/>Contact</Link>
        </nav>
     );
}
 
export default Navigation;