import React from "react";
import { Card } from "react-bootstrap";
import img from "../../assets/image2.jpg";
export default function ({ news }) {
	return news.map((News) => {
		return (
			<div>
				<Card style={{ width: "18rem", background: '#CEDCEA', transition: 'all 0.2s', border: '1px solid #0484CF' }}>
					<div className="img-holder">
						<Card.Img variant="top" src={img} />
					</div>
					<Card.Body>
						<Card.Title style={styles.title}>
							<a href="#">{News["title"]}</a>
						</Card.Title>
						<small className="text-muted">{News["date"]}</small>
						<Card.Text style={styles.text}>{News["text"]}</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);
	});
}

const styles = {
	title: {
		fontWeight: "bolder",
		borderBottom: "2px solid #e2e2e2 ",
		width: "fit-content",
	},
	text: {
		marginTop: "15%",
		textAlign: "justify",
	},
};
