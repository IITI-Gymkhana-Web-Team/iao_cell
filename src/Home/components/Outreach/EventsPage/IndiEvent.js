import React from "react";
import { PersonCard } from "./PersonCard";
import { data } from "./data";
// import { Link } from "react-router-dom";
import { NotFound } from "../../NotFound/NotFound";
// import { BiArrowBack } from "react-icons/bi";

export const IndiEvent = ({ match }) => {
	const name = match.params.name;

	const event = data.filter((dat) => {
		return dat.name === name;
	});

	if (event.length === 0) return <NotFound />;

	return (
		<div className="indiEvent font-ubuntu container-fluid">
			{/*<Link to="/outreach/events">
				<button className="backBtn btn btn-light">
					<BiArrowBack /> Back
				</button>
			</Link>*/}
			<div className="eventPart1 mt-4 mb-5">
				<img src={event[0].img} alt="event" />
				<div className="eventPart2">
					<h2 className="font-acme">{event[0].title}</h2>
					<p>{event[0].date + " @" + event[0].time}</p>
					<p>{event[0].desc}</p>
				</div>
			</div>

			<h2 className="font-acme">Speaker(s)</h2>
			<div className="speakers cardsStuff">
				{event[0].speakers.map((speaker, i) => {
					return <PersonCard person={speaker} key={i} />;
				})}
			</div>

			<h2 className="font-acme">Organizing Committee</h2>
			<div className="cardsStuff oc">
				{event[0].oc.map((oc1, i) => {
					return <PersonCard person={oc1} key={i} />;
				})}
			</div>
		</div>
	);
};
