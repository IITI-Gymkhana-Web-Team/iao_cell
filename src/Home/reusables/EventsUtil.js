import React from "react";
import { Card } from "react-bootstrap";
import { eventsImg } from "../../assets";
import { BiCalendar, BiLink } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoArrowRedo } from "react-icons/io5";

export default function ({ event }) {
	return (
		<div>
			<Card className="eventsPage">
				<div className="img-holder">
					<Card.Img variant="top" src={eventsImg} />
				</div>
				<Card.Body className="font-ubuntu">
					<a href="#">
						<Card.Title style={styles.title} className="font-acme">
							{event["title"]}
						</Card.Title>
					</a>
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
						&nbsp; <a href={event.link}>Link</a>
					</Card.Text>
					<Card.Text style={styles.text}>
						<BsFillPersonFill />
						&nbsp; {event.organizer}
					</Card.Text>
					<Card.Text style={styles.text}>
						{event.description.slice(0, 80) +
							(event.description.length > 80 ? "..." : "")}
					</Card.Text>
					<Card.Text style={styles.text}>
						<a href="#">
							<IoArrowRedo style={styles.btn} />
						</a>
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
		marginBottom: "5%",
	},
	text: {
		marginBottom: "10px",
		textAlign: "justify",
	},
	btn: {
		fontSize: "25px",
	},
};
