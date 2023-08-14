import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import './Menu.css'


const Menulist = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        )
    };

    return (
        <div className="nav-container">

            <nav ref={navRef} onClick={(e) => e.stopPropagation()} className="menulist">
                <Link onClick={showNavbar} className="menulist__link active" to="/">Inicio</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/productos/hileras-de-bolas">Hilera de bolas</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/productos/manguitos">Manguito</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/productos/combinados">Combinados</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/productos/agujas">Agujas</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/productos/rodillos">Rodillo</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/contacto">Contacto</Link>

                <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<AiOutlineClose />
			</button>

            </nav>

            <button onClick={showNavbar} className="nav-btn"><AiOutlineBars/></button>

            <div className="cart-icon"><BsFillCartFill/></div>

        </div>
    );
}

export default Menulist;