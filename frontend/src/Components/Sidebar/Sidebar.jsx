import React, { useState, useEffect } from 'react';
import "./Sidebar.css";
import { Link } from "react-router-dom";
import menu_icon from '../../assets/menu-icon.png';
import logo from '../../assets/logo.png';

const Sidebar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        setMobileMenu(prev => !prev);
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={isMobile ? "" : "sidebar"}>
            <img src={logo} alt='' className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link className='text' to='/home'>Home</Link></li>
                <li><Link className='text' to='/model'>Predict</Link></li>
                <li><Link className='text' to='/home'>Contact us</Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
}

export default Sidebar;
