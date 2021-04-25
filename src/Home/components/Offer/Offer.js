import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Offer.css";
import ScrollAnimation from "react-animate-on-scroll";
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
	chem,
	math,
} from "../../../assets";

export const Offer = () => {
	const [images] = useState([
		{
			img: elec,
			head: "Electrical Sciences",
			text:
				"Electrical engineering | Communication & Signal Processing | VLSI Design & nanoelectronics",
			link: "http://ee.iiti.ac.in/",
		},
		{
			img: mech,
			head: "Mechanical Sciences",
			text:
				"Mechanical engineering | Production & Industrial engineering | Mechanical systems design",
			link: "http://me.iiti.ac.in/",
		},
		{
			img: material,
			head: "Material Sciences",
			text:
				"Metallurgy & Material Sciences | Material Sciences & engineering | Specialization in  Metallurgy",
			link: "http://mems.iiti.ac.in/",
		},
		{
			img: computer,
			head: "Computer Sciences",
			text: "Computer Science & Engineering",
			link: "http://cse.iiti.ac.in/",
		},
		{ img: chem, head: "Chemistry", text: "Chemistry", link: "http://chemistry.iiti.ac.in/" },
		{ img: phy, head: "Physics", text: "Physics", link: "http://physics.iiti.ac.in/" },
		{ img: math, head: "Mathematics", text: "Mathematics", link: "http://math.iiti.ac.in/" },
		{
			img: bio,
			head: "Life Sciences",
			text: "Bio-Sciences & Bio-medical Engineering | Biotechnology",
			link: "http://bsbe.iiti.ac.in/",
		},
		{
			img: space,
			head: "Space Sciences",
			text: "Astronomy | Astrophysics & Space Engineering",
			link: "http://astronomy.iiti.ac.in/",
		},
		{
			img: civil,
			head: "Infrastructure",
			text: "Civil Engineering",
			link: "http://ce.iiti.ac.in/",
		},
		{
			img: philosophy,
			head: "Humanities & Social Sciences",
			text: "English | Philosophy | Economics | Psychology | Sociology",
			link: "http://hss.iiti.ac.in/",
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
		800: {
			items: 2,
		},
		0: {
			items: 1,
		},
	};

	return (
		<div className="OfferCar text-center mb-0">
			<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
				<h1 className="mainTitle text-underline">Programs Offered</h1>
			</ScrollAnimation>
			<ScrollAnimation animateIn="slideInUp" animateOnce={true}>
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
							<a href={img.link} target="_blank" key={index}>
								<div className="off card mx-3 mb-0">
									<div className="image-holder">
										<img
											className="card-img-top"
											src={img.img}
											alt="Card image cap"
										/>
									</div>
									<div className="card-body">
										<h4 className="card-title text-uppercase mainTitle">
											{img.head}
										</h4>
										<p className="card-text">{img.text}</p>
									</div>
								</div>
							</a>
						);
					})}
				</OwlCarousel>
			</ScrollAnimation>
		</div>
	);
};
