import React from "react";
import "./CarouselCards.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Col, Container, Row } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { chemR, phyR, NSDImg, FrenchConsultImg, BUL, NIDB, MoU } from "../../../assets";
import { useHistory } from "react-router-dom";

const CarousellCards = () => {
	const history = useHistory();

	const data1 = [
		{
			image: BUL,
			title: "Forecasting crude oil futures prices by Prof. Date",
			desc: "Dr. Paresh Date, Reader and Director of Research in Mathematics, Brunel University, London, UK has given talk on “Forecasting crude oil futures prices using the Kalman filter and news sentiment” on August 27, 2021 under IAO International Outreach event of IIT Indore. The talk was coordinated by Dr. Abhinoy K. Singh, Department of Electrical Engineering, IIT Indore.",
			link: "https://www.brunel.ac.uk/people/paresh-date",
		},
		{
			image: NIDB,
			title: "National Institute of Design Bhopal visited IIT Indore",
			desc: "Officials from National Institute of Design, Bhopal visited International Affairs & Outreach office, IIT Indore on August 23, 2021. During the visit, we had a constructive discussion with NID team to extend our support to establish international office at NID Bhopal. ",
			link: "/outreach/news/nidBhopal",
		},
		{
			image: phyR,
			title: "Origin of natural and magnetic field induced polar order",
			desc: "The group of Dr. Sagdeo, IIT Indore and STFC Rutherford Appleton Laboratory, UK have reported the possible origin of natural and magnetic field induced switchable polar order near room temperature (RT) in PrFe1/2Cr1/2O3",
			link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.035101",
		},
	];
	const data2 = [
		{
			image: FrenchConsultImg,
			title: "French Consulate General in Mumbai visited IIT Indore",
			desc: "Mrs. Sonia Barbry, French Consulate General in Mumbai and Mr. Thomas Simoes, Director, Alliance Francaise, Bhopal visited IIT Indore on March 18, 2021, and had fruitful discussions on escalating and strengthening the bilateral research work, exchange of students and faculties and many more aspects. ",
			link: "/outreach/news/frenchConsulate",
		},
		{
			image: NSDImg,
			title: "IIT Indore celebrated National Science Day in virtual mode",
			desc: "IIT Indore is celebrating the National Science Day on Feb. 28, 2021, where several activities such as daily life physics experiments, chemical illusion, journey through cosmos, mathematical magic, biology talk, will be organized for school kids in virtual mode.",
			link: "https://www.freepressjournal.in/indore/indore-iit-indore-to-celebrate-national-science-day-in-virtual-mode",
		},
	];
	const data3 = [
		{
			image: MoU,
			title: "MoU signed with University of Alberta, Canada",
			desc: "IIT Indore and University of Alberta, Canada has signed an MOU to escalate the research activities and exchange on the mutually agreeable domains, covering the exchange of students, faculties and staffs, development of joint curriculum, organising joint workshops and conferences, and also to explore the possibilities of joint degree programmes. This MOU has been signed in 2021 and will remain valid for 5 years.",
			link: "https://clt1249866.bmeurl.co/C8589D3",
		},
		{
			image: chemR,
			title: "Direct H2O2 synthesis",
			desc: "Catalysis group, IIT Indore and KIT Germany reported their work on shape-selective Pd3Pb nanocrystals based catalysts for direct H2O2 synthesis. Their findings inferred the tuning in electronic structure and lack of Pd ensembles retarted O-O cleavage.",
			link: "https://pubs.acs.org/doi/abs/10.1021/acscatal.0c03561",
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

	const handleCardClick = (url) => {
		if (url[0] === "h") window.open(url);
		else history.push(url);
	};

	return (
		<Container>
			<Row className="carousel-row mt-1 mb-5">
				<h2 className="owl-card-title font-acme mb-3">News & Activities</h2>
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
												handleCardClick(card.link);
											}}
										>
											<img
												className="carousel-card-img"
												variant="top"
												src={card.image}
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
												handleCardClick(card.link);
											}}
										>
											<img
												className="carousel-card-img"
												variant="top"
												src={card.image}
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
												handleCardClick(card.link);
											}}
										>
											<img
												className="carousel-card-img"
												variant="top"
												src={card.image}
												alt={card.title}
											/>
											<div className="carousel-div">
												<p className="carousel-title">{card.title}</p>
												<p className="carousel-text">
													{card.desc !== "" ? card.desc : card.speakers[0].desc}
												</p>
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
