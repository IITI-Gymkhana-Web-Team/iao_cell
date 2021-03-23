import React from "react";
import { Card } from "react-bootstrap";
import { news } from "../../assets";
import { Link } from "react-router-dom";

export default function ({ News, index }) {
	return (
		<div>
			<Card className="newsCard">
				<div className="img-holder">
					<Card.Img variant="top" src={news} />
				</div>
				<Card.Body>
					<Card.Title style={styles.title} className="font-acme">
						<Link to={"/outreach/news/" + index}>{News["title"]}</Link>
					</Card.Title>
					<p className="text-muted font-ubuntu">{News["date"]}</p>
					<Card.Text className="font-ubuntu" style={styles.text}>
						{News["text"].slice(0, 120) + (News["text"].length > 120 ? "..." : "")}
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
		width: "fit-content",
	},
	text: {
		marginTop: "10%",
	},
	btn: {
		fontSize: "25px",
	},
};
