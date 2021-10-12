import React from "react";
import "./CarouselCards.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Col, Container, Row } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { useHistory } from "react-router-dom";
import { data as newsData } from "../../../Outreach/Outreach/NewsPage/data";

const CarousellCards = () => {
	const history = useHistory();

	const data1 = newsData.slice(0, newsData.length / 3).slice(0, Math.min(6, newsData.length / 3));
	const data2 = newsData
		.slice(newsData.length / 3, (2 * newsData.length) / 3)
		.slice(0, Math.min(6, newsData.length / 3));
	const data3 = newsData.slice((2 * newsData.length) / 3, newsData.length).slice(0, Math.min(6, newsData.length / 3));

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
		if (url && url[0] === "h") window.open(url);
		else history.push("/outreach/news");
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
												handleCardClick(card.link || "");
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
