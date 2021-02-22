import React from "react";
import "./PeopleCard.css";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export const PeopleCard = ({ img, person }) => {
	return (
		<div className="personCard">
			<img src={img} alt="display picture" className="pdp" />
			<div className="personCardBody font-ubuntu">
				<h3 className="font-acme upper" style={{ color: "#34639D" }}>
					{person.name}
				</h3>
				<h5 className="font-acme upper" style={{ color: "rgb(54, 54, 54)" }}>
					{person.designation}
				</h5>
				<p>
					<a href={"mailto:" + person.email}>{person.email}</a>
				</p>
				<p>
					<a href={"tel:" + person.phno}>{person.phno}</a>
				</p>
				<p>
					{person.fb != "" && (
						<a href={person.fb}>
							<FaFacebookSquare className="socIcon" />
						</a>
					)}
					{person.ig != "" && (
						<a href={person.ig}>
							<FaInstagram className="socIcon" />
						</a>
					)}
					{person.lin != "" && (
						<a href={person.lin}>
							<FaLinkedin className="socIcon" />
						</a>
					)}
				</p>
			</div>
		</div>
	);
};
