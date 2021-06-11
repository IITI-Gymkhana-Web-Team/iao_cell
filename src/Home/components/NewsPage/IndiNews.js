import React from "react";
import { data } from "./data";
import { NotFound } from "../NotFound/NotFound";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export const IndiNews = ({ match }) => {
	const id = match.params.id || -1;

	console.log(id);

	if (id >= 0 && id < data.length)
		return (
			<div
				className="indiEvent font-ubuntu container-fluid"
				style={{
					minHeight: "50vh",
					padding: "2%",
				}}
			>
				<Link to="/outreach/news">
					<button className="backBtn btn btn-light">
						<BiArrowBack /> Back
					</button>
				</Link>
				<div className="eventPart1 mt-4 mb-5">
					<img src={data[id].image} style={{ minWidth: "400px", minHeight: "250px" }} />
					<div className="eventPart2">
						<h2 className="font-acme">{data[id].title}</h2>
						<p className="text-muted">{data[id].date}</p>
						<p style={{ whiteSpace: "pre-wrap" }}>{data[id].desc}</p>
					</div>
				</div>
			</div>
		);
	else return <NotFound />;
};
