import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { image15 } from "../../../assets";
import "./Carousell.css";

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
		<Carousel>
			{images.map((img) => {
				return (
					<Carousel.Item key={img.id}>
						<img className="d-block w-100" src={img.img} alt="First slide" />
						<Carousel.Caption>
							<h3 className="font-acme">{img.captionHeading}</h3>
							<p className="font-ubuntu">{img.captionDesc}</p>
						</Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};
