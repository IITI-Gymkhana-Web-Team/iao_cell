import React from "react";
import { Card } from "react-bootstrap";
import { chem_talks_news } from "../../assets";
import { nsd2020 } from "../../assets";
import { Link } from "react-router-dom";

export default function () {
	return (
		<div>
			<Card className="newsCard">
				<Card.Body>
					<Card.Title style={styles.title} className="font-acme">
						<Link to={"/outreach/news/0"}>Lecture by Dr. Paresh Date</Link>
					</Card.Title>
					<p className="text-muted font-ubuntu">Aug 27, 2021</p>
					<p className="text-muted font-ubuntu">2:00 PM - 3:00 PM</p>
					<Card.Text className="font-ubuntu" style={styles.text}>
						Forecasting Crude Oil Futures Prices Using the Kalman Filter and News
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

const styles = {
	title: {
		fontWeight: "bolder",
		borderBottom: "2px solid #e2e2e2 ",
	},
	text: {
		marginTop: "10%",
	},
	btn: {
		fontSize: "25px",
	},
};
