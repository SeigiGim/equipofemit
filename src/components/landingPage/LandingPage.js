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
					foto={require("./assets/Carolina Zuñiga (1).jpg")}
					nombre={"Carolina Zúñiga"}
					resumen={
						"Hola! Soy Carolina Zuñiga y soy ingenieria industrial. Tengo 3 años de experiencia laboral en Entel, en el área de soporte técnico pero ahora quiero darle un impulso a mi carrera laboral y me quiero desarrollar en el mundo de la programación back end y eventualmente especializarme como analista de datos. Me considero una persona calmada y constante, con la capacidad de adaptarme a nuevos desafíos y capaz de insertarme y potenciar los equipos en los que formo parte. En mis 3 años de experiencia laboral, desarrollé habilidades como la orientación al detalle, la eficacia y la productividad."
					}
					rol={"Backend"}
					nombreArchivo={"CV Carolina Zúñiga Cancino.pdf"}
				>
					<Link
						link="https://www.linkedin.com/in/carolinazu%C3%B1igacancino/"
						nombre="Ir a LinkedIn"
					/>
					<Link 
						link="https://github.com/magdazu"
						nombre="Ir a Github"
					/>
				</Card>
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
