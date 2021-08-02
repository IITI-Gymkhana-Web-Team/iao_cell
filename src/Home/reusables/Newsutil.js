import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NewsUtil({ News, index, type }) {
	return (
		<div>
			<Card className="newsCard" style={{ overflow: "hidden", paddingBottom: "10px" }}>
				<div className="img-holder">
					<Card.Img variant="top" src={News.image || News.img} style={{ minHeight: "150px" }} />
				</div>
				<Card.Body>
					<Card.Title style={styles.title} className="font-acme">
						<Link to={"/outreach/" + type + "/" + index}>{News.title}</Link>
					</Card.Title>
					<Card.Text className="font-ubuntu" style={styles.text}>
						{News.desc !== "" && News.desc}
						{News.desc === "" && News.speakers[0].desc}
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
