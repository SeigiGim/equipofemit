import React from "react";
import Button from "../button/Button";
import "./card.css";

const Card = ({ foto, nombre, rol, resumen, nombreArchivo, children }) => {
	return (
		<>
			<article className="card">
				<div>
					<div className="container-image">
						<img src={foto} alt={"Foto" + { nombre }} />
					</div>
					<header>
						<h1 className="name">{nombre}</h1>
					</header>
					<div>
						<h4 className="rol">
							Rol en FemIT: <span>{rol}</span>
						</h4>
					</div>
					<div className="summary">
						<p>{resumen}</p>
					</div>
					<main>
						<div className="container-links">{children}</div>
					</main>
				</div>
				<Button nombreArchivo={nombreArchivo} />
			</article>
		</>
	);
};

export default Card;
