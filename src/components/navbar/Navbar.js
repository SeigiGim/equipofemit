import React from "react";
import Logo from "../logo/Logo";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="logo">
				<Logo />
			</div>
			<div className="links">
				<a href="#femit">
					<h1 className="femit">FemIT</h1>
				</a>
				<a href="#nosotros">
					<h1 className="nosotros">Nosotros</h1>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
