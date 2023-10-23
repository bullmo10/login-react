import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-scroll";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"resp_nav"
		);
	};

	return (
		<nav className="navbar">
			<span className="logo">NETWORKIA BZANI</span>
			<nav ref={navRef}>
				<Link className="nav-links" href="/#">HOME</Link>
				<Link className="nav-links" href="/#">DRIVER</Link>
				<Link className="nav-links" href="/#">RIDER</Link>
				<Link className="nav-links" href="/#">SIGN UP</Link>
				<Link className="nav-links" href="/#">LOGIN</Link>
				<button
					className="nav-btn nav-close"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</nav>
	);
}

export default Navbar;
