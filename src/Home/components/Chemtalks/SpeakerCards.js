import React from "react";
import "./scard.css";
import { VscCalendar } from "react-icons/vsc";
import { MdAccountBalance } from "react-icons/md";

export const SpeakerCards = ({ person }) => {
	return (
		<div className="scard font-ubuntu mt-3 mb-5">
			<div className="scardimg ">
				<img src={person.img} alt="person" />
			</div>
			<div className="p-2 pl-4 pr-4">
				<h5 className="font-acme">{person.topic}</h5>
				<h4 className="font-acme">{person.name}</h4>
				<p style={{ marginBottom: 10, marginTop: 30 }}>
					<MdAccountBalance />
					{person.university}
				</p>
				<p style={{ marginBottom: 0 }}>
					<VscCalendar />
					{person.datetime}
				</p>
			</div>
		</div>
	);
};
