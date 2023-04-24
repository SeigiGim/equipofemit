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
				<Card
					foto={require("./assets/SeigiGim.jpg")}
					nombre={"Seigi Gim"}
					rol={"Frontend"}
					nombreArchivo={"CV Seigi Gim.pdf"}
					resumen={
						"¡Hola! Mi nombre es Seigi Gim, soy un desarrollador apasionado por aplicar la disciplina que adquirí en mis 10 años de experiencia como guitarrista y compositor. Me encanta crear soluciones en equipo y aprender de mis compañeros, tal como lo hice en FemIT, donde disfruté al máximo al desarrollar el frontend con React, aplicando mi creatividad, detallismo, empatía y resiliencia. Tomo los desafíos como oportunidades de mejora y creo en el feedback como una herramienta fundamental en un entorno laboral sano y eficaz. Estoy buscando una empresa que confíe en mi y me permita aportar valor, aprender y crecer. ¡Hablemos!"
					}>
					<Link
						link="https://www.linkedin.com/in/seigigim/"
						nombre="Ir a LinkedIn"
					/>
					<Link link="https://github.com/SeigiGim" nombre="Ir a GitHub" />
				</Card>

				<Card
					nombre={"Javiera Sepúlveda"}
					nombreArchivo={"CVJavieraSepulveda.pdf"}
				/>
				<Card
					foto={require("./assets/Victor Caro.jpg")}
					nombre={"Víctor Caro"}
					resumen={
						"Me fascina la tecnología y todas las oportunidades que ofrece. Trabajé durante mucho tiempo como maestro de cocina, donde adquirí muchas habilidades y aprendí la importancia de trabajar en equipo. Sin embargo, mi pasión por la programación me llevo a dar un gran paso para ingresar a la industria tech, en la cual deseo aprender y crecer para poder contribuir con mis habilidades técnicas y creativas en un entorno colaborativo."
					}
					rol={"Product Owner"}
					nombreArchivo={"CV Victor Caro.pdf"}>
					<Link
						link="https://www.linkedin.com/in/victorcaror/"
						nombre="Ir a LinkedIn"
					/>
					<Link link="https://github.com/VictorCaro" nombre="Ir a Github" />
				</Card>
				<Card
					foto={require("./assets/Carolina Zuñiga (1).jpg")}
					nombre={"Carolina Zúñiga"}
					resumen={
						"Hola! Soy Carolina Zuñiga y soy ingenieria industrial. Tengo 3 años de experiencia laboral en Entel, en el área de soporte técnico pero ahora quiero darle un impulso a mi carrera laboral y me quiero desarrollar en el mundo de la programación back end y eventualmente especializarme como analista de datos. Me considero una persona calmada y constante, con la capacidad de adaptarme a nuevos desafíos y capaz de insertarme y potenciar los equipos en los que formo parte. En mis 3 años de experiencia laboral, desarrollé habilidades como la orientación al detalle, la eficacia y la productividad."
					}
					rol={"Backend"}
					nombreArchivo={"CV Carolina Zúñiga Cancino.pdf"}>
					<Link
						link="https://www.linkedin.com/in/carolinazu%C3%B1igacancino/"
						nombre="Ir a LinkedIn"
					/>
					<Link link="https://github.com/magdazu" nombre="Ir a Github" />
				</Card>
				<Card
					// foto={require("./assets/YerkoMedinaPichún.png")}
					foto={require("./assets/YerkoMedinaPichún.png")}
					nombre={"Yerko Medina Pichún"}
					resumen={
						"Hola! Soy Yerko Medina Pichún, egresado de la carrera de Analista Programador y solo me queda pendiente realizar la práctica profesional para titularme.  A lo largo de la carrera me fui dando cuenta que me gustaría dedicarme el resto de mi vida laboral a la programación y específicamente en área de Back end, rol que cumplí en nuestro proyecto FEM-IT. Soy una persona proactiva, analítica, autodidacta y empática, por lo que si me contratan daré lo mejor de mi para potenciar su empresa."
					}
					rol={"Backend"}
					nombreArchivo={"CV_YerkoMedinaPichún.pdf"}>
					<Link
						link="https://www.linkedin.com/in/yerko-medina-pich%C3%BAn/"
						nombre="Ir a LinkedIn"
					/>
					<Link
						link="https://github.com/YerkoMedinaPichun"
						nombre="Ir a GitHub"
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
