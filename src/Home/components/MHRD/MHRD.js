import React, { useState } from "react";
import "./MHRD.css";
import { Card, CardDeck } from "react-bootstrap";
import { asem, vajra, sparc, gian } from "../../../assets";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

export const MHRD = () => {
	const [images] = useState([
		{ img: gian, link: "/mhrd/gian" },
		{ img: vajra, link: "/mhrd/vajra" },
		{ img: sparc, link: "/mhrd/sparc" },
		{ img: asem, link: "/mhrd/asem" },
	]);

	return (
		<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
			<div className="MHRDBG container mt-3 mb-5 pb-5">
				<div className="container-fluid">
					<h1 className="p-2 pl-5 pt-5 pr-5 mainTitle text-center">MHRD Initiatives</h1>
				</div>
				<CardDeck className="container-fluid mt-4 mhrd">
					{images.map((img, index) => {
						return (
							<Card className="mhrdCard" key={index}>
								<Link to={img.link}>
									<Card.Img variant="top" src={img.img} />
								</Link>
							</Card>
						);
					})}
				</CardDeck>
			</div>
		</ScrollAnimation>
	);
};
