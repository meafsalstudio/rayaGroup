import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.webp';
import { PiSparkle } from "react-icons/pi";
import { Link, NavLink } from 'react-router-dom';
import { TfiClose } from "react-icons/tfi";

const Nav = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 80) { // scrolling down
                    setIsVisible(false);
                } else { // scrolling up
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (

        <>

            <nav className={`nav ${!isVisible ? 'nav--hidden' : ''}`}>
                <div className="container">
                    <div className="navMain">
                        <div className="navCol1">
                            <Link to="/" className="navLogo">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="navCol2">
                            <ul>
                                <li>
                                    <NavLink to="/" className={({ isActive }) => (isActive ? 'navLinkActive' : '')}>
                                        Home <div className="icon"><PiSparkle /></div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'navLinkActive' : '')}>
                                        About <div className="icon"><PiSparkle /></div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services" className={({ isActive }) => (isActive ? 'navLinkActive' : '')}>
                                        Services <div className="icon"><PiSparkle /></div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/team" className={({ isActive }) => (isActive ? 'navLinkActive' : '')}>
                                        Team <div className="icon"><PiSparkle /></div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="navCol3">
                            <div className="navContact">
                                <Link to="/contact">Connect Now</Link>
                            </div>
                            <div className="navBar" onClick={() => setIsSidemenuOpen(true)}>
                                <div className="navBarBox">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`sidemenu ${isSidemenuOpen ? 'sidemenuActive' : ''}`}>
                <div className="sidemenuBox">
                    <div className="closeSidemenu" onClick={() => setIsSidemenuOpen(false)}>
                        <TfiClose />
                    </div>
                    <div className="sidemenuCol2">
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'navLinkActive' : '')} onClick={() => setIsSidemenuOpen(false)}>
                                    <div className="icon"><PiSparkle /></div>Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => (isActive ? 'navLinkActive' : '')} onClick={() => setIsSidemenuOpen(false)}>
                                    <div className="icon"><PiSparkle /></div>About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" className={({ isActive }) => (isActive ? 'navLinkActive' : '')} onClick={() => setIsSidemenuOpen(false)}>
                                    <div className="icon"><PiSparkle /></div>Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/team" className={({ isActive }) => (isActive ? 'navLinkActive' : '')} onClick={() => setIsSidemenuOpen(false)}>
                                    <div className="icon"><PiSparkle /></div>Team
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="sidemenuCol3">
                        <div className="navContact">
                            <Link to="/contact" onClick={() => setIsSidemenuOpen(false)}>Connect Now</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Nav;
