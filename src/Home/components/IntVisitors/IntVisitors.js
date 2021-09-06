import React from "react";
import { data } from "./data";
import "./IntVisitors.css";

export const IntVisitors = () => {
	return (
		<div className="container pb-5 text-left">
			<h2 className="mainTitle text-center m-3 mb-4">International Visitors</h2>
			<p className="font-ubuntu text-center" style={{ fontSize: "20px" }}>
				IIT Indore proud to host many eminent and young researchers and students at our campus.{" "}
			</p>
			<div className="visitorCardDiv">
				{data.map((dat) => {
					return (
						<div className="visitorCard">
							<img src={dat.img} alt={dat.name} />
							<h4 className="mt-3 font-acme" style={{ color: "#007bff", textDecoration: "underline" }}>
								{dat.name}
							</h4>
							<p className="mb-2 font-ubuntu">{dat.designation}</p>
							<p className="mb-2 font-ubuntu">{dat.institute}</p>
							<p className="mb-2 font-ubuntu" style={{ fontWeight: "bold" }}>
								{dat.title}
							</p>
							<p className="mb-2 font-ubuntu">{dat.host}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
