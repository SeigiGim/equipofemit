import React from "react";

const Link = ({ link, nombre }) => {
	return (
		<>
			<a href={link}>{nombre}</a>
		</>
	);
};

export default Link;
