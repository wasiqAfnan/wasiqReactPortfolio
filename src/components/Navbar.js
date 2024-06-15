import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';


let Navbar = () => {
    let [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <nav id="home">
            <div className={showMobileMenu? "navContainer flex mobileNavContainer":"navContainer flex"}>
                <div className='navLogo'>
                    <a>&lt;WasiqPortfolio/&gt;</a>
                </div>

                <div className='hamBurgerIcon'>
                    <MenuIcon
                        style={{ fontSize: "2.5rem", color: "white" }}
                        onClick={() => { setShowMobileMenu(!showMobileMenu) }}
                    />
                </div>

                <div className={showMobileMenu? "navWrapper flex mobileNavWrapper":"navWrapper flex"}>
                    <BrowserRouter>
                        <Link to="#home" className='navLink' smooth>Home</Link>
                        <Link to="#about" className='navLink' smooth>About</Link>
                        <Link to="#resume" className='navLink' smooth>Resume</Link>
                        <Link to="#projects" className='navLink' smooth>Projects</Link>
                        <Link to="#contactus" className='navLink' smooth>Say Hello</Link>
                    </BrowserRouter>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

