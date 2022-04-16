import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
    return ( 
        <div className="w-[1200px] mx-auto flex justify-between items-end">
            <Logo/>
            <Menu/>
        </div>
     );
}
 
export default Header;