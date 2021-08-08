import React from "react";
import "./CarouselCards.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Col, Container, Row } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { nsd2020, chem_talks_news, ai, d1, d2, gandhihall, g, chemR, phyR } from "../../../assets";

const CarousellCards = () => {
	const data1 = [
		{
			img: chemR,
			title: "Direct H2O2 synthesis",
			desc: "Catalysis group, IIT Indore and KIT Germany reported their work on shape-selective Pd3Pb nanocrystals based catalysts for direct H2O2 synthesis. Their findings inferred the tuning in electronic structure and lack of Pd ensembles retarted O-O cleavage.",
			link: "https://pubs.acs.org/doi/abs/10.1021/acscatal.0c03561",
		},
		{
			img: phyR,
			title: "Origin of natural and magnetic field induced polar order",
			desc: "The group of Dr. Sagdeo, IIT Indore and STFC Rutherford Appleton Laboratory, UK have reported the possible origin of natural and magnetic field induced switchable polar order near room temperature (RT) in PrFe1/2Cr1/2O3",
			link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.035101",
		},
	];
	const data2 = [
		{
			img: nsd2020,
			title: "Lorem Ipsum",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			link: "http://astronomy.iiti.ac.in/",
		},
		{
			img: d2,
			title: "Lorem Ipsum",
			desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
			link: "http://bsbe.iiti.ac.in/",
		},
		{
			img: chem_talks_news,
			title: "Lorem Ipsum",
			desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			link: "http://chemistry.iiti.ac.in/",
		},
	];
	const data3 = [
		{
			img: nsd2020,
			title: "Lorem Ipsum",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			link: "http://astronomy.iiti.ac.in/",
		},
		{
			img: ai,
			title: "Lorem Ipsum",
			desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
			link: "http://bsbe.iiti.ac.in/",
		},
		{
			img: g,
			title: "Lorem Ipsum",
			desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			link: "http://chemistry.iiti.ac.in/",
		},
	];

	const responsive = {
		3000: {
			items: 1,
		},
		1400: {
			items: 1,
		},
		1024: {
			items: 1,
		},
		800: {
			items: 1,
		},
		0: {
			items: 1,
		},
	};

	const openURL = (url) => {
		window.open(url);
	};

	return (
		<Container>
			<Row className="carousel-row mt-5 mb-5">
				<p className="owl-card-title">NEWS & ACTIVITIES</p>
				<Col md={12} lg={4}>
					<div className="owl-card text-center">
						<ScrollAnimation animateIn="slideInUp" animateOnce={true}>
							<OwlCarousel
								className="owl-theme"
								loop={true}
								nav={true}
								dots={false}
								autoplay={true}
								autoplayTimeout={4000}
								items={3}
								responsive={responsive}
							>
								{data1.map((card, index) => {
									return (
										<div
											className="carousel-card"
											key={index}
											onClick={() => {
												openURL(card.link);
											}}
										>
											<img
												className="carousel-card-img"
												variant="top"
												src={card.img}
												alt={card.title}
											/>
											<div className="carousel-div">
												<p className="carousel-title">{card.title}</p>
												<p className="carousel-text">{card.desc}</p>
											</div>
										</div>
									);
								})}
							</OwlCarousel>
						</ScrollAnimation>
					</div>
				</Col>
				<Col md={12} lg={4}>
					<div className="owl-card text-center mb-0">
						<ScrollAnimation animateIn="slideInUp" animateOnce={true}>
							<OwlCarousel
								className="owl-theme"
								loop={true}
								nav={true}
								dots={false}
								autoplay={true}
								autoplayTimeout={4000}
								items={3}
								responsive={responsive}
							>
								{data2.map((card, index) => {
									return (
										<div
											className="carousel-card"
											key={index}
											onClick={() => {
												openURL(card.link);
											}}
										>
											<img
												className="carousel-card-img"
												variant="top"
												src={card.img}
												alt={card.title}
											/>
											<div className="carousel-div">
												<p className="carousel-title">{card.title}</p>
												<p className="carousel-text">{card.desc}</p>
											</div>
										</div>
									);
								})}
							</OwlCarousel>
						</ScrollAnimation>
					</div>
				</Col>
				<Col md={12} lg={4}>
					<div className="owl-card text-center">
						<ScrollAnimation animateIn="slideInUp" animateOnce={true}>
							<OwlCarousel
								className="owl-theme"
								loop={true}
								nav={true}
								dots={false}
								autoplay={true}
								autoplayTimeout={4000}
								items={3}
								responsive={responsive}
							>
								{data3.map((card, index) => {
									return (
										<div
											className="carousel-card"
											key={index}
											onClick={() => {
												openURL(card.link);
											}}
										>
											<img
												className="carousel-card-img"
												variant="top"
												src={card.img}
												alt={card.title}
											/>
											<div className="carousel-div">
												<p className="carousel-title">{card.title}</p>
												<p className="carousel-text">{card.desc}</p>
											</div>
										</div>
									);
								})}
							</OwlCarousel>
						</ScrollAnimation>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default CarousellCards;
