import React from "react";
import { Card } from "react-bootstrap";
import { chem_talks_news } from "../../assets";
import { nsd2020 } from "../../assets";
import { Link } from "react-router-dom";

export default function ({ News, index }) {
	return (
		<div>
			<Card className="newsCard">
				<Card.Body>
					<Card.Title style={styles.title} className="font-acme">
						<Link to={"/outreach/news/" + index}>Talk</Link>
					</Card.Title>
					<p className="text-muted font-ubuntu">May 2019</p>
					<p className="text-muted font-ubuntu">1:00 PM 1B-201</p>
					<Card.Text className="font-ubuntu" style={styles.text}>
					Kick-off workshop of IITI - LUH DAAD project organized in Hannover, May 2019.
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
