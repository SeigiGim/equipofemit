import React from "react";

const Link = ({ link, nombre }) => {
	return (
		<>
			<a href={link} target="_blank" rel="noreferrer noopener">
				{nombre}
			</a>
		</>
	);
};

export default Link;
