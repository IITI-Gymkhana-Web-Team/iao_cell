import React from "react";
import "./MHRD.css";
import { Card, CardDeck } from "react-bootstrap";
import asem from "../../../assets/asemDuo.png";
import gian from "../../../assets/gian.jpg";
import sparc from "../../../assets/sparc.png";
import vajra from "../../../assets/vajra.png";

export const MHRD = () => {
	return (
		<div className="container bg-light mt-5 mb-5">
			<div class="container-fluid">
				<h1 className="p-2 pl-5 pt-5 pr-5 mainTitle text-center">MHRD Initiatives</h1>
			</div>
			<CardDeck className="container-fluid mt-4 mhrd">
				<Card>
					<a href="#">
						<Card.Img variant="top" src={gian} />
					</a>
				</Card>
				<Card>
					<a href="#">
						<Card.Img variant="top" src={vajra} />
					</a>
				</Card>
				<Card>
					<a href="#">
						<Card.Img variant="top" src={sparc} />
					</a>
				</Card>
				<Card>
					<a href="#">
						<Card.Img variant="top" src={asem} />
					</a>
				</Card>
			</CardDeck>
		</div>
	);
};
