import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import EventsUtil from "../../reusables/EventsUtil";
import "./Events.css";
import { Link } from "react-router-dom";

export const Events = () => {
	const [events, setEvents] = useState([
		{
			date: "February 4, 2021",
			title: "Heading One",
			time: "10:00-12:00 am",
			link: "zoom_meeting_first.com",
			description:
				"Aliqua velit est anim adipisicing. Consequat ad id deserunt ad. Nostrud id ullamco aute ipsum deserunt excepteur eiusmod mollit sunt enim.",
			organizer: "organizer",
		},
		{
			date: "February 5, 2021",
			title: "Heading Two",
			time: "10:00-1:00 pm",
			link: "zoom_meeting_second.com",
			description:
				"Nisi do labore cupidatat dolore aliquip nulla. Nisi sit aute eu ipsum dolor quis consequat esse amet sit magna quis labore. Consectetur ipsum aliqua ad pariatur culpa tempor duis nostrud sunt et sunt cupidatat exercitation. Lorem sint mollit ea duis occaecat deserunt consectetur aliquip esse. Aliqua id in eiusmod elit eiusmod duis. Anim cillum non ex velit occaecat nisi cillum labore dolore ipsum culpa. Elit occaecat anim sit consectetur cupidatat proident quis duis in ea ad.",
			organizer: "organizer2",
		},
		{
			date: "February 6, 2021",
			title: "Heading Three",
			time: "9:00-1:00 pm",
			link: "zoom_meeting_third.com",
			description:
				"Proident ea culpa non pariatur non culpa adipisicing adipisicing aute et laboris. Labore laboris duis non sit qui proident aliqua nisi ex laborum esse. Reprehenderit esse esse occaecat officia ea non aliquip aute incididunt dolor elit. Magna excepteur incididunt ullamco cillum. Qui culpa id ad anim.",
			organizer: "organizer3",
		},
	]);
	return (
		<div className="news events">
			<div>
				<h1 className="pr-5 pb-3 mainTitle">Events</h1>
			</div>
			<div>
				{events.map((event, i) => {
					return <EventsUtil event={event} key={i} />;
				})}
			</div>
			<Link to="/outreach/events">
				<button className="moreStuff">More Events</button>
			</Link>
		</div>
	);
};
