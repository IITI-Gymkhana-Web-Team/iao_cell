import React from "react";
import "./MHRD.css";
import { Card, CardDeck } from "react-bootstrap";
import { asem, vajra, sparc, gian } from "../../../assets";

export const MHRD = () => {
	return (
		<div className="container bg-light mt-5 mb-5 pb-5">
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
