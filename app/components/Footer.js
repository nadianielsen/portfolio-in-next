import Link from "next/link";
import Navigation from "./Navigation";


const Footer = () => {
    return ( 
        <div className="flex justify-center">
            <footer className="md:w-[32rem] h-16 bg-[#4300a8]/60 fixed bottom-0 rounded-full backdrop-blur-sm my-4 w-[20rem] shadow-neutral-800/80 text-white">
                <Navigation />
            </footer>
        </div>
     );
}
 
export default Footer;

