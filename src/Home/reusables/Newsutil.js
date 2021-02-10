import React, { useState } from "react";
import { Card } from "react-bootstrap";
import img from "../../assets/image2.jpg";
import { CgEditFlipH } from "react-icons/cg";
import ReactCardFlip from "react-card-flip";

export default function ({ News }) {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<div>
			<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
				<Card
					className="newsCard"
					style={{ width: "18rem", transition: "all 0.2s", border: "1px solid #0484CF", height: "350px" }}
					onClick={() => setIsFlipped(!isFlipped)}
				>
					<div className="img-holder">
						<Card.Img variant="top" src={img} />
					</div>
					<Card.Body>
						<Card.Title style={styles.title}>
							<a href="#">{News["title"]}</a>
						</Card.Title>
						<small className="text-muted">{News["date"]}</small>
						<Card.Text style={styles.icon}>
							<CgEditFlipH />
						</Card.Text>
					</Card.Body>
				</Card>
				<Card
					className="newsCard"
					style={{ width: "18rem", transition: "all 0.2s", border: "1px solid #0484CF", height: "350px" }}
					onClick={() => setIsFlipped(!isFlipped)}
				>
					<Card.Body>
						<small className="text-muted">{News["date"]}</small>
						<Card.Text style={styles.text}>{News["text"].slice(0, 190) + (News["text"].length > 190 ? "..." : "")}</Card.Text>
						<Card.Text style={styles.btn}>
							<a href="#">
								<button className="btn btn-primary">Read More</button>
							</a>
						</Card.Text>
						<Card.Text style={styles.icon}>
							<CgEditFlipH />
						</Card.Text>
					</Card.Body>
				</Card>
			</ReactCardFlip>
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
		textAlign: "justify",
	},
	btn: {
		textAlign: "center",
	},
	icon: {
		textAlign: "center",
		position: "absolute",
		bottom: "10px",
		left: "47%",
	},
};
