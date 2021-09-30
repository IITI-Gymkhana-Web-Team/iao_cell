import React from "react";
import { PersonCard } from "./PersonCard";
import { data } from "./data";
import { Link } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { BiArrowBack } from "react-icons/bi";

export const IndiEvent = ({ match }) => {
	const id = match.params.id || -1;

	if (id >= 0 && id < data.length)
		return (
			<div className="indiEvent font-ubuntu container-fluid">
				<Link to="/outreach/events">
					<button className="backBtn btn btn-light">
						<BiArrowBack /> Back
					</button>
				</Link>
				<div className="eventPart1 mt-4 mb-5">
					<img src={data[id].img} />
					<div className="eventPart2">
						<h2 className="font-acme">{data[id].title}</h2>
						<p>{data[id].date + " @" + data[id].time}</p>
						<p style={{ whiteSpace: "pre-wrap" }}>{data[id].desc}</p>
					</div>
				</div>

				<h2 className="font-acme">Speaker(s)</h2>
				<div className="speakers cardsStuff">
					{data[id].speakers.map((speaker, i) => {
						return <PersonCard person={speaker} key={i} />;
					})}
				</div>

				<h2 className="font-acme">Organizing Committee</h2>
				<div className="cardsStuff oc">
					{data[id].oc.map((oc1, i) => {
						return <PersonCard person={oc1} key={i} />;
					})}
				</div>
			</div>
		);
	else return <NotFound />;
};
