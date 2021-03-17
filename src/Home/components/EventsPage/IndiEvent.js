import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { PersonCard } from "./PersonCard";

export const IndiEvent = ({ event, setIndex }) => {
	return (
		<div className="indiEvent font-ubuntu">
			<button
				onClick={() => {
					setIndex(-1);
				}}
				className="backBtn btn btn-light"
			>
				<BiArrowBack /> Back
			</button>
			<div className="eventPart1 mt-4 mb-5">
				<img src={event.img} />
				<div className="eventPart2">
					<h2 className="font-acme">{event.title}</h2>
					<p>{event.duration}</p>
					<p>{event.description}</p>
				</div>
			</div>

			<h2 className="font-acme">Speaker(s)</h2>
			<div className="speakers cardsStuff">
				{event.speakers.map((speaker, i) => {
					return <PersonCard person={speaker} key={i} />;
				})}
			</div>

			<h2 className="font-acme">Organizing Committee</h2>
			<div className="cardsStuff">
				{event.oc.map((oc1, i) => {
					return <PersonCard person={oc1} key={i} />;
				})}
			</div>
		</div>
	);
};
