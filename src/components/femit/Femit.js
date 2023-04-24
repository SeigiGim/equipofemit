import React from "react";
import Logo from "../logo/Logo";

import "./femit.css";

const Femit = () => {
	return (
		<>
			<section class="femit-container">
				<div>
					<Logo />
				</div>
				<div class="femit-resumen">
					<p>
						¡Con FemIT cerramos la brecha de género en TI! Creamos una
						aplicación web que ofrece espacios integrales para promover la
						participación activa de más mujeres en la industria, generando
						comunidad y dando solución a la problemática existente. Nuestra
						plataforma cuenta con secciones de mentoría, bolsa de empleos
						exclusivos para mujeres, recursos educativos, inspiración y
						visibilización de talento. En FemIT creemos en la importancia de
						fomentar la diversidad para mantenerse competitivo y relevante en un
						mercado de constante cambio. Únete a nuestra comunidad hoy y creemos
						juntos una industria más inclusiva y equitativa.
					</p>
				</div>
			</section>
		</>
	);
};

export default Femit;
