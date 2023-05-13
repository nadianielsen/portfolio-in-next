import Link from "next/link";


const Navigation = () => {
    return ( 
        <nav className="flex justify-around my-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/gallery"}>Gallery</Link>
            <Link href={"/contact"}>Contact</Link>
        </nav>
     );
}
 
export default Navigation;