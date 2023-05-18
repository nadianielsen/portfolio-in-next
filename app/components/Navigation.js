"use client"
import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi"
import { FiInfo } from "react-icons/fi"
import { AiOutlinePicture } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
import { usePathname } from "next/navigation"

const Navigation = () => {
    const router = usePathname()
    

    return ( 
        // <nav className="flex justify-around my-3.5 text-xs text-center text-neutral-200">
        //     <Link href={"/"} className={router == "/" ? "text-[#ac59ff" : ""}><BiHomeAlt2 className="mx-3 text-xl"/>Home</Link>
        //     <Link href={"/about"} className={router == "/about" ? "text-[#BFA5D9" : ""}><FiInfo className="mx-3 text-xl"/>About</Link>
        //     <Link href={"/gallery"} className={router == "/gallery" ? "text-[#BFA5D9" : ""}><AiOutlinePicture className="mx-3 text-xl"/>Gallery</Link>
        //     <Link href={"/contact"} className={router == "/contact" ? "text-[#BFA5D9]" : ""}><BsTelephone className="mx-3 text-xl"/>Contact</Link>
        // </nav>
        <nav className="flex my-6 justify-around">
            <Link href={"/"}>NM</Link>
            <div className="text-[1.05rem] flex gap-x-10">
                <Link href={"/"} className={`hover:font-bold hover:border-b transition-all ease-in-out ${router == "/" ? "font-bold border-b" : ""}`}>Home</Link>
                <Link href={"/about"} className={`hover:font-bold hover:border-b transition-all ease-in-out ${router == "/about" ? "font-bold border-b" : ""}`}> About</Link>
                <Link href={"/gallery"} className={`hover:font-bold hover:border-b transition-all ease-in-out ${router == "/gallery" ? "font-bold border-b" : ""}`}>Gallery</Link>
                <Link href={"/contact"} className={`hover:font-bold hover:border-b transition-all ease-in-out ${router == "/contact" ? "font-bold border-b" : ""}`}>Contact</Link>
            </div>
        </nav>
     );
}
 
export default Navigation;