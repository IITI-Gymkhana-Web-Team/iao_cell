import React from "react";
import { data } from "./data";
import { NotFound } from "../../../Others";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export const IndiNews = ({ match }) => {
	const id = match.params.id || -1;

	console.log(id);

	const currData = data.filter((dat) => {
		return dat.name === id;
	});

	if (currData.length > 0)
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
					<img alt="News" src={currData[0].image} style={{ minWidth: "400px", minHeight: "250px" }} />
					<div className="eventPart2">
						<h2 className="font-acme">{currData[0].title}</h2>
						<p className="text-muted">{currData[0].date}</p>
						<p style={{ whiteSpace: "pre-wrap" }}>{currData[0].desc}</p>
						{currData[0].link !== "" && currData[0].link !== undefined && (
							<p style={{ whiteSpace: "pre-wrap" }}>
								To know more,{" "}
								<a href={currData[0].link} target="_blank" rel="noreferrer">
									Click Here
								</a>
							</p>
						)}
					</div>
				</div>
			</div>
		);
	else return <NotFound />;
};
