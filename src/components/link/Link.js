import React from "react";

import "./link.css";

const Link = ({ link, nombre, icon }) => {
	return (
		<>
			<div class="linkIcon-container">
				<a href={link} target="_blank" rel="noreferrer noopener">
					{nombre}
					<i class={`icon link ${icon}`} />
				</a>
			</div>
		</>
	);
};

export default Link;
