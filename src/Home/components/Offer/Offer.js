import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Offer.css";
import {
	computer,
	phy,
	bio,
	space,
	civil,
	philosophy,
	material,
	mech,
	elec,
} from "../../../assets";

export const Offer = () => {
	const [images] = useState([
		{
			img: elec,
			head: "Electrical Sciences",
			text:
				"Electrical engineering | Communication & Signal Processing | VLSI Design & nanoelectronics",
		},
		{
			img: mech,
			head: "Mechanical Sciences",
			text:
				"Mechanical engineering | Production & Industrial engineering | Mechanical systems design",
		},
		{
			img: material,
			head: "Material Sciences",
			text:
				"Metallurgy & Material Sciences | Material Sciences & engineering | Specialization in  Metallurgy",
		},
		{ img: computer, head: "Computer Sciences", text: "Computer Science & Engineering" },
		{ img: phy, head: "Natural Sciences", text: "Chemistry | Physics | Mathematics" },
		{
			img: bio,
			head: "Life Sciences",
			text: "Bio-Sciences & Bio-medical Engineering | Biotechnology",
		},
		{
			img: space,
			head: "Space Sciences",
			text: "Astronomy | Astrophysics & Space Engineering",
		},
		{ img: civil, head: "Infrastructure", text: "Civil Engineering" },
		{
			img: philosophy,
			head: "Humanities & Social Sciences",
			text: "English | Philosophy | Economics | Psychology | Sociology",
		},
	]);
	const responsive = {
		3000: {
			items: 5,
		},
		1400: {
			items: 4,
		},
		1024: {
			items: 3,
		},
		464: {
			items: 2,
		},
		0: {
			items: 1,
		},
	};

	return (
		<div className="OfferCar text-center mb-0">
			<h1 className="mainTitle text-underline">Programs Offered</h1>
			<OwlCarousel
				className="owl-theme"
				loop={true}
				nav={true}
				dots={false}
				autoplay={true}
				autoplayTimeout={4000}
				items={4}
				responsive={responsive}
			>
				{images.map((img, index) => {
					return (
						<div className="off card mx-3 mb-0" key={index}>
							<div className="image-holder">
								<img className="card-img-top" src={img.img} alt="Card image cap" />
							</div>
							<div className="card-body">
								<h4 className="card-title text-uppercase mainTitle">{img.head}</h4>
								<p className="card-text">{img.text}</p>
							</div>
						</div>
					);
				})}
			</OwlCarousel>
		</div>
	);
};
