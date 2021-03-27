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
			<div className="peopleCards mb-5">
				{committee.members.map((persons) => {
					return (
						<Row key={persons[0]["email"]}>
							{persons.map((person) => {
								return (
									<>
										{person.dept && (
											<h2 className="font-acme text-center mt-5">
												{person.dept}
											</h2>
										)}
										<PeopleCard person={person} key={person.email} />
									</>
								);
							})}
						</Row>
					);
				})}
			</div>
		</>
	);
};
