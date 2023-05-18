import Link from "next/link";
import Navigation from "./Navigation";


const Footer = () => {
    return ( 
        <footer className="md:w-[32rem] h-16 bg-[#4300a8]/60 fixed bottom-0 rounded-full backdrop-blur-sm my-4 w-[20rem] mx-16 md:mx-[20%] lg:mx-[35%] shadow-neutral-800/80 text-white">
            <Navigation />
        </footer>
     );
}
 
export default Footer;