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
                <h4 className="font-acme">{person.topic}</h4>
				<h2 className="font-acme">{person.name}</h2>
				<p>
                    <MdAccountBalance/>
					{person.university}
				</p>
                <p>
                    <VscCalendar/>
					{person.datetime}
				</p>
			</div>
		</div>
	);
};
