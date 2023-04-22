import React from "react";
import Navbar from "../navbar/Navbar";
import Card from "../card/Card";

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<Card nombreArchivo={"CV_YerkoMedinaPichún.pdf"} />
		</>
	);
};

export default LandingPage;
