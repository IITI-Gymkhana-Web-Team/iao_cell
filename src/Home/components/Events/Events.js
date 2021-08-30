import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import EventsUtil from "../../reusables/EventsUtil";
import "./Events.css";
import { Link } from "react-router-dom";
import { data } from "../EventsPage/data";

export const Events = () => {
	const events = data.slice(0, 3);

	return (
		<div className="news events">
			<div>
				<h2 className="pr-5 pb-3 mainTitle">Events</h2>
			</div>
			<div>
				{events.map((event, i) => {
					return <EventsUtil event={event} key={i} i={i} />;
				})}
			</div>
			<Link to="/outreach/events">
				<button className="moreStuff">More Events</button>
			</Link>
		</div>
	);
};
