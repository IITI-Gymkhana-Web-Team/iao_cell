import React from "react";
import { Card } from "react-bootstrap";
import { eventsImg } from "../../assets";
import { BiCalendar, BiLink } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function ({ events }) {
	return events.map((event) => {
		return (
			<div>
				<Card className="eventsPage" style={{ width: "80%", transition: "all 0.2s", border: "1px solid #0484CF" }}>
					<div className="img-holder">
						<Card.Img variant="top" src={eventsImg} />
					</div>
					<Card.Body className="font-ubuntu">
						<Card.Title style={styles.title} className="font-acme">
							{event["title"]}
						</Card.Title>
						<Card.Text style={styles.text}>
							<BiCalendar />
							&nbsp; {event.date}
						</Card.Text>
						<Card.Text style={styles.text}>
							<AiOutlineClockCircle />
							&nbsp; {event.time}
						</Card.Text>
						<Card.Text style={styles.text}>
							<BiLink />
							&nbsp; <a href={event.link}>{event.link}</a>
						</Card.Text>
						<Card.Text style={styles.text}>
							<BsFillPersonFill />
							&nbsp; {event.organizer}
						</Card.Text>
						<Card.Text style={styles.text}>{event.description.slice(0, 80) + (event.description.length > 80 ? "..." : "")}</Card.Text>
						<Card.Text style={styles.text}>
							<a href="#">
								<button className="btn btn-primary" style={{ float: "right" }}>
									Know More
								</button>
							</a>
						</Card.Text>
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
		marginBottom: "5%",
	},
	text: {
		marginTop: "5%",
		textAlign: "justify",
	},
};
