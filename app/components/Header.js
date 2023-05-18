import Navigation from "./Navigation";


const Header = () => {
    return ( 
        // <header className="w-full h-16">
        <header className="w-full fixed top-0 bg-neutral-500/40 backdrop-blur-sm ">
           <Navigation /> 
        </header>
     );
}
 
export default Header;