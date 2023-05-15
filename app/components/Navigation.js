import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi"
import { FiInfo } from "react-icons/fi"
import { AiOutlinePicture } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"

const Navigation = () => {

    

    return ( 
        <nav className="flex justify-around my-3.5 text-xs">
            <Link href={"/"} className="text-center hover:text-[#B066FA] hover:font-bold transition-all "><BiHomeAlt2 className="mx-3 text-xl"/>Home</Link>
            <Link href={"/about"} className="text-center hover:text-[#B066FA] hover:font-bold transition-all "><FiInfo className="mx-3 text-xl"/>About</Link>
            <Link href={"/gallery"} className="text-center hover:text-[#B066FA] hover:font-bold transition-all "><AiOutlinePicture className="mx-3 text-xl"/>Gallery</Link>
            <Link href={"/contact"} className="text-center hover:text-[#B066FA] hover:font-bold transition-all "><BsTelephone className="mx-3 text-xl"/>Contact</Link>
        </nav>
     );
}
 
export default Navigation;