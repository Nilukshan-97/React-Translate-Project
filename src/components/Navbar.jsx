import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/about">About Us</a>
				<a href="/pricing">Pricing</a>
				<a href="/services">Services</a>
                <a href="/contact ">Contact</a>
                <select name="" id="" className="language-select">
                    <option value="">English</option>
                    <option value="">Spanish</option>
                    <option value="">French</option>
                </select>
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
	);
}

export default Navbar;