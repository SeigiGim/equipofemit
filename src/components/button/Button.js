import React from "react";
import "./button.css";
const Button = ({ nombreArchivo }) => {
	return (
		<a
			className="button-cv"
			download={nombreArchivo}
			href={`./assets/${nombreArchivo}`}
		>
			Descargar CV
		</a>
	);
};

export default Button;
