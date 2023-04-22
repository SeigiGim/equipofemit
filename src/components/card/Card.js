import React from "react";

import Button from "../button/Button";

const Card = ({ foto, nombre, rol, resumen, nombreArchivo, children }) => {
	return (
		<>
			<article class="card">
				<div>
					<hero>
						<div>
							<img src={foto} alt={"Foto" + { nombre }} />
						</div>
					</hero>
					<header>
						<h1>{nombre}</h1>
					</header>
					<main>
						<div>{children}</div>
						<div>
							<Button nombreArchivo={nombreArchivo} />
						</div>
						<div>
							<h4>Rol en FemIT: {rol}</h4>
						</div>
						<div>
							<p>{resumen}</p>
						</div>
					</main>
				</div>
			</article>
		</>
	);
};

export default Card;
