import React from "react";
import { Card } from "react-bootstrap";
import { chem_talks_news } from "../../assets";
import { nsd2020 } from "../../assets";
import { Link } from "react-router-dom";

export default function ({ announcement }) {
	return (
		<div>
			<Card className="newsCard">
				<Card.Body>
					{/* <Card.Title style={styles.title} className="font-acme">
                        <Link to={"/outreach/news/" + index}>
                            IIT Indore mai corona
						</Link>
                    </Card.Title> */}
					<Card.Text className="font-ubuntu" style={styles.text}>
						lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
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
		color: "blue",
		fontWeight: "bold",
	},
	btn: {
		fontSize: "25px",
	},
};
