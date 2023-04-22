import React from "react";
import Logo from "../logo/Logo";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav class="navbar">
			<div class="logo">
				<Logo />
			</div>
			<div class="links">
				<a href="#nosotros">
					<h1 class="nosotros">Nosotros</h1>
				</a>
				<a href="#femit">
					<h1 class="femit">FemIT</h1>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
