import React from "react";
import { Card } from "react-bootstrap";
import { chem_talks_news } from "../../assets";
import { nsd2020 } from "../../assets";
import { Link } from "react-router-dom";
import img from "../../assets/abhijeet.webp";

export default function ({ News, index }) {
	return (
		<div>
			<Card className="newsCard">
				<Link to={"/outreach/news/" + index}>
					<div className="img-holder">
						<Card.Img variant="top" src={News.image} style={{ minHeight: "150px" }} />
					</div>
					<Card.Body>
						<Card.Title style={styles.title} className="font-acme">
							{News.title}
						</Card.Title>
						{/* <p className="text-muted font-ubuntu">27-10-10</p> */}
						<Card.Text className="font-ubuntu" style={styles.text}>
							lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
							lorem lorem lorem lorem
						</Card.Text>
					</Card.Body>
				</Link>
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
		color: "black",
	},
	btn: {
		fontSize: "25px",
	},
};
