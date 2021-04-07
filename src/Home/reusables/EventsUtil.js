import React from "react";
import { Card } from "react-bootstrap";
import { BiCalendar } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ({ event, i }) {
	return (
		<div>
			<Card className="eventsPage">
				<div className="img-holder">
					<Card.Img variant="top" src={event.img} />
				</div>
				<Card.Body className="font-ubuntu">
					<Link to={"/outreach/events/" + i}>
						<Card.Title style={styles.title} className="font-acme">
							{event["title"]}
						</Card.Title>
					</Link>
					<Card.Text style={styles.text}>
						<BiCalendar />
						&nbsp; {event.date}
					</Card.Text>
					<Card.Text style={styles.text}>
						<AiOutlineClockCircle />
						&nbsp; {event.time}
					</Card.Text>
					<Card.Text className="stuff">
						<FaMapMarkerAlt />
						&nbsp;{event.venue}
					</Card.Text>
					<Card.Text style={styles.text}>
						<BsFillPersonFill />
						&nbsp; {event.speakers[0].name}
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
