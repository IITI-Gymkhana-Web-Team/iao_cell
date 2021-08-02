import React from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";

import "owl.carousel/dist/assets/owl.theme.default.css";
import Newsutil from "../../reusables/Newsutil";

export const Carouselnews = () => {
	let title = "Coronavirus Lockdown";
	let text =
		"Some quick example text to build on the card title and make up the bulk of the card's content.";

	return (
		<div className="news container bg-light mt-5">
			<div className="container-fluid">
				<h1 className="p-2 pl-5 pt-5 pr-5 mainTitle">News</h1>
			</div>
			<div className="container-fluid" style={{ maxWidth: "1140px" }}>
				<OwlCarousel
					className="owl-theme"
					loop
					nav={true}
					margin={8}
					responsive={{
						0: {
							items: 1,
						},
						760: {
							items: 2,
						},
						1000: {
							items: 3,
						},
					}}
				>
					<div>
						<Newsutil text={text} title={title} />
					</div>
					<div>
						<Newsutil text={text} title={title} />
					</div>
					<div>
						<Newsutil text={text} title={title} />
					</div>
					<div>
						<Newsutil text={text} title={title} />
					</div>
					<div>
						<Newsutil text={text} title={title} />
					</div>
					<div>
						<Newsutil text={text} title={title} />
					</div>
					<div>
						<Newsutil text={text} title={title} />
					</div>
				</OwlCarousel>
			</div>
		</div>
	);
};
