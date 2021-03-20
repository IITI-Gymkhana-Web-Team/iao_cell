import React, { useState } from "react";
import { image15 } from "../../../assets";
import "./Carousell.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const Carousell = () => {
	const [images, setImages] = useState([
		{ img: image15 },
		{ img: image15 },
		{ img: image15 },
		{ img: image15 },
		{ img: image15 },
	]);

	return (
		<OwlCarousel className="owl-theme" loop margin={10} nav={true} items={1} autoplay={true}>
			{images.map((img, index) => {
				return (
					<div class="item" key={index}>
						<img src={img.img} />
					</div>
				);
			})}
		</OwlCarousel>
	);
};
