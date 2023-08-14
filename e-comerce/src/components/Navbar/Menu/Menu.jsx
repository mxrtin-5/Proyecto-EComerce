import { useState } from 'react';
import  Menulist  from './Menulist'


const Menu = () => {
    const[showMenu, setShowMenu] = useState(false)

    const handleClose = () =>{
        setShowMenu(false)
    }
    return ( 
        <div className={showMenu ? "menu-active" : ""}>
            <div className='menu__backdrop' onClick={handleClose}>

                <Menulist close={handleClose}/>


            </div>
        </div>
    );
}

export default Menu;