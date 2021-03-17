import React from "react";
import "./OutreachEvent.css";
import { Card } from "react-bootstrap";
import { BiCalendar, BiChevronRight } from "react-icons/bi";
import { IoArrowRedoSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
export const OutreachEvent = ({ Events, setIndex, i }) => {
	return (
		<Card className="outreach">
			<div className="img-holder">
				<Card.Img variant="top" src={Events.img} />
			</div>
			<Card.Body className="font-ubuntu">
				<Card.Title
					onClick={() => {
						setIndex(i);
						window.scrollTo(0, 0);
					}}
					style={{ cursor: "pointer" }}
				>
					<span className="font-acme">{Events.title}</span>
				</Card.Title>
				<Card.Text className="stuff">
					<BiCalendar />
					&nbsp;
					<span>{Events.duration}</span>
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
				<Card.Text>
					<IoArrowRedoSharp
						onClick={() => {
							setIndex(i);
							window.scrollTo(0, 0);
						}}
						style={{ fontSize: "20px", cursor: "pointer" }}
					/>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
