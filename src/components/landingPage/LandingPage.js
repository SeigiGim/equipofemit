import React from "react";
import Navbar from "../navbar/Navbar";
import Card from "../card/Card";

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<Card nombreArchivo={"CV_YerkoMedinaPichún.pdf"} />
			<Card nombreArchivo={"CV Carolina Zúñiga Cancino.pdf"} />
			<Card nombreArchivo={"CVJavieraSepulveda.pdf"} />
		</>
	);
};

export default LandingPage;
