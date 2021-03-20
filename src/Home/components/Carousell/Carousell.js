import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { image15 } from "../../../assets";
import "./Carousell.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const Carousell = () => {
	const [images, setImages] = useState([
		{
			id: 1,
			img: image15,
			captionHeading: "First slide label",
			captionDesc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
		},
		{
			id: 2,
			img: image15,
			captionHeading: "Second slide label",
			captionDesc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
		},
		{
			id: 3,
			img: image15,
			captionHeading: "Third slide label",
			captionDesc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
		},
		{
			id: 4,
			img: image15,
			captionHeading: "Fourth slide label",
			captionDesc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
		},
		{
			id: 5,
			img: image15,
			captionHeading: "Fifth slide label",
			captionDesc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
		},
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
