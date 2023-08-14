import { Link } from "react-router-dom";
import  Menu  from "./Menu/Menu"
import './Navbar.css'



const Navbar = () => {
    return (
        <header>
            <div className="header_container">
                <h2 className="title"> <Link className="title-content" to={'/'}> <img className="img-logo" src='../../../public/20230814_105315_0000.png' alt="" /></Link> </h2>

                <Menu/>


            </div>
        </header>
    );
}

export default Navbar;