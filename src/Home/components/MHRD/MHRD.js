import React, { useState } from "react";
import "./MHRD.css";
import { Card, CardDeck } from "react-bootstrap";
import { asem, vajra, sparc, gian } from "../../../assets";

export const MHRD = () => {
	const [images, setImages] = useState([
		{ img: gian, link: "#" },
		{ img: vajra, link: "#" },
		{ img: sparc, link: "#" },
		{ img: asem, link: "#" },
	]);

	return (
		<div className="MHRDBG container mt-5 mb-5 pb-5">
			<div className="container-fluid">
				<h1 className="p-2 pl-5 pt-5 pr-5 mainTitle text-center">MHRD Initiatives</h1>
			</div>
			<CardDeck className="container-fluid mt-4 mhrd">
				{images.map((img, index) => {
					return (
						<Card className="mhrdCard" key={index}>
							<a href={img.link}>
								<Card.Img variant="top" src={img.img} />
							</a>
						</Card>
					);
				})}
			</CardDeck>
		</div>
	);
};
