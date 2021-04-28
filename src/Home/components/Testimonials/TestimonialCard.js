import React from "react";
import "./tcard.css";
import { FaGraduationCap } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export const TestimonialCard = ({ person }) => {
	return (
		<div className="tcard font-ubuntu mt-3 mb-5">
			<img src={person.img} />
			<div className="p-2 pl-4 pr-4">
				<h2 className="font-acme">{person.name}</h2>
				<p>
					<FaGraduationCap />
					{person.program}
				</p>
				<p>
					<MdLocationOn />
					{person.country}
				</p>
				<p className="text-justify">
					"<i>{person.text}</i>"
				</p>
			</div>
		</div>
	);
};
