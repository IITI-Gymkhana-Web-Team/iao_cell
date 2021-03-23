import React from "react";
import "./OutreachEvent.css";
import { Card } from "react-bootstrap";
import { BiCalendar, BiChevronRight, BiTimeFive } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const OutreachEvent = ({ Events, i }) => {
	return (
		<Card className="outreach">
			<div className="img-holder">
				<Card.Img variant="top" src={Events.img} />
			</div>
			<Card.Body className="font-ubuntu">
				<Link to={"/outreach/events/" + i}>
					<Card.Title>
						<span className="font-acme">{Events.title}</span>
					</Card.Title>
				</Link>
				<Card.Text className="stuff">
					<BiCalendar />
					&nbsp;
					<span>{Events.date}</span>
				</Card.Text>
				<Card.Text className="stuff">
					<BiTimeFive />
					&nbsp;
					<span>{Events.time}</span>
				</Card.Text>
				<Card.Text className="stuff">
					<FaMapMarkerAlt />
					&nbsp;{Events.venue}
				</Card.Text>
				<Card.Text>Speaker(s)</Card.Text>
				<ul>
					{Events.speakers.map((speaker, index) => {
						return (
							<li key={index}>
								<BiChevronRight /> {speaker.name}
							</li>
						);
					})}
				</ul>
			</Card.Body>
		</Card>
	);
};
