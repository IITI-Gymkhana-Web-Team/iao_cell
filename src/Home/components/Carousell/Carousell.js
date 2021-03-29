import React, { useState } from "react";
import { image15, grp2, grp3 } from "../../../assets";
import "./Carousell.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const Carousell = () => {
	const [images] = useState([{ img: image15 }, { img: grp2 }, { img: grp3 }]);

	return (
		<OwlCarousel
			className="owl-theme"
			loop
			margin={10}
			nav={true}
			items={1}
			autoplay={true}
			autoplaySpeed={1500}
			navSpeed={1500}
			dotsSpeed={1500}
			autoplayTimeout={7000}
		>
			{images.map((img, index) => {
				return (
					<div className="item" key={index}>
						<img src={img.img} />
					</div>
				);
			})}
		</OwlCarousel>
	);
};
