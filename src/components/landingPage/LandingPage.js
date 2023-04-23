import React from "react";
import Navbar from "../navbar/Navbar";
import Card from "../card/Card";
import Link from "../link/Link";
import "./landingPage.css";

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<div id="femit"></div>
			<div id="nosotros" className="container-cards">
				<Card nombre={"Seigi Gim"} nombreArchivo={"nombredelpdf"} />
				<Card
					nombre={"Javiera Sepúlveda"}
					nombreArchivo={"CVJavieraSepulveda.pdf"}
				/>
				<Card nombre={"Victor Caro"} nombreArchivo={"nombredelpdf"} />
				<Card
					nombre={"Carolina Zúñiga"}
					nombreArchivo={"CV Carolina Zúñiga Cancino.pdf"}
				/>
				<Card
					// foto={require("./assets/YerkoMedinaPichún.png")}
					foto={require("./assets/YerkoMedinaPichún.png")}
					nombre={"Yerko Medina Pichún"}
					resumen={
						"Hola! Soy Yerko Medina Pichún, egresado de la carrera de Analista Programador y solo me queda pendiente realizar la práctica profesional para titularme.  A lo largo de la carrera me fui dando cuenta que me gustaría dedicarme el resto de mi vida laboral a la programación y específicamente en área de Back end, rol que cumplí en nuestro proyecto FEM-IT. Soy una persona proactiva, analítica, autodidacta y empática, por lo que si me contratan daré lo mejor de mi para potenciar su empresa."
					}
					rol={"Backend"}
					nombreArchivo={"CV_YerkoMedinaPichún.pdf"}
				>
					<Link
						link="https://www.linkedin.com/in/yerko-medina-pich%C3%BAn/"
						nombre="Ir a LinkedIn"
					/>
					<Link
						link="https://github.com/YerkoMedinaPichun"
						nombre="Ir a Github"
					/>
					<Link
						link="https://portafolio-yerkomedinapichun.netlify.app/"
						nombre="Ir a Portafolio"
					/>
				</Card>
			</div>
		</>
	);
};

export default LandingPage;
