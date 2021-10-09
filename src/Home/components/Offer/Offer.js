import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Offer.css";
import ScrollAnimation from "react-animate-on-scroll";
import { computer, phy, bbse, space, civil, philosophy, metall, mech, elec, chem, math } from "../../../assets";

export const Offer = () => {
	const [images] = useState([
		{
			img: space,
			head: "Astronomy, Astrophysics and Space Engineering",
			link: "http://astronomy.iiti.ac.in/",
		},
		{
			img: bbse,
			head: "Bio-Sciences & Bio-medical Engineering",
			link: "http://bsbe.iiti.ac.in/",
		},
		{ img: chem, head: "Chemistry", link: "http://chemistry.iiti.ac.in/" },
		{
			img: civil,
			head: "Civil Engineering",
			link: "http://ce.iiti.ac.in/",
		},
		{
			img: computer,
			head: "Computer Science & Engineering",
			link: "http://cse.iiti.ac.in/",
		},
		{
			img: elec,
			head: "Electrical Engineering",
			link: "http://ee.iiti.ac.in/",
		},
		{
			img: philosophy,
			head: "Humanities & Social Sciences",
			link: "http://hss.iiti.ac.in/",
		},
		{ img: math, head: "Mathematics", link: "http://math.iiti.ac.in/" },
		{
			img: mech,
			head: "Mechanical Engineering",
			link: "http://me.iiti.ac.in/",
		},
		{
			img: metall,
			head: "Metallurgy Engineering & Material Sciences",
			link: "http://mems.iiti.ac.in/",
		},
		{ img: phy, head: "Physics", link: "http://physics.iiti.ac.in/" },
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
				<h2 className="mainTitle text-underline">Programs Offered</h2>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
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
							<a href={img.link} target="_blank" rel="noreferrer" key={index}>
								<div className="off card mx-3 mb-0">
									<div className="image-holder">
										<img className="card-img-top" src={img.img} alt="Card" />
									</div>
									<div className="card-body">
										<h4 className="card-title mainTitle">{img.head}</h4>
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
