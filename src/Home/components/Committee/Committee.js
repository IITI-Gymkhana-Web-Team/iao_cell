import React from "react";
import { PeopleCard } from "../PeopleCard/PeopleCard";
import { Row } from "react-bootstrap";
import "./Committee.css";

export const Committee = ({ committee }) => {
	return (
		<>
			<div className="container-fluid">
				<h1 className="p-3 m-2 mainTitle text-center">{committee.title}</h1>
			</div>
			<div className="peopleCards">
				{committee.members.map((persons) => {
					return (
						<Row>
							{persons.map((person) => {
								return <PeopleCard person={person} key={person.email} />;
							})}
						</Row>
					);
				})}
			</div>
		</>
	);
};
