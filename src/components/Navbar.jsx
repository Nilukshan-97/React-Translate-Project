import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';


function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <div>
           
            <div className="top-bar">
                <div className="top-bar-left">
					<div className="social">
						<FacebookIcon/>
						<TwitterIcon/>
						<LinkedInIcon/>
						<InstagramIcon/>
					</div>
                </div>
                <div className="top-bar-right">
                    <span><EmailIcon/></span> <span> Email: service@translantic.com</span>
                    <span><CallIcon /></span> <span>Phone: 021 3456 789</span>
                    <select className="language-select">
                        <option value="en">English</option>
                        <option value="ta">Tamil</option>
                    </select>
                </div>
            </div>

            <header>
                <h3 className="logo">Translatic</h3>
                <nav ref={navRef}>
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/pricing">Pricing</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                    <button className="translate-button">Translate Now</button>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        </div>
    );
}

export default Navbar;
