import React from "react";

import "./scrollbutton.css";

const ScrollButton = () => {
	const ScrollToTopButton = () => {
		const handleScrollToTop = () => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		};

		return (
			<>
				<div class="botonarriba" onClick={handleScrollToTop}>
					<i class="fa-solid fa-arrow-up"></i>
				</div>
			</>
		);
	};

	return <ScrollToTopButton />;
};

export default ScrollButton;
