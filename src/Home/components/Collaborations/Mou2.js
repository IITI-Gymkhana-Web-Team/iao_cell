import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { data } from "./data";
import { Form } from "react-bootstrap";

export const Mou2 = ({ name }) => {
	const [country, setCountry] = useState("");
	const [institution, setInstitution] = useState("");

	return (
		<div className="container-fluid mhrdPage">
			<h1 className="pt-4 mainTitle text-center mb-5">
				{name == "Americas" && "MoUs with American Universities"}
				{name == "Asia" && "MoUs with Asian Universities"}
				{name == "Australia" && "MoUs with Australian Universities"}
				{name == "Europe" && "MoUs with European Universities"}
			</h1>
			<Form className="container">
				<Form.Group controlId="exampleForm.ControlInput2">
					<Form.Label>Search By Institution</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the name of the Institution"
						onChange={(e) => {
							setInstitution(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput3">
					<Form.Label>Search By Country</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the name of the Country"
						onChange={(e) => {
							setCountry(e.target.value);
						}}
					/>
				</Form.Group>
			</Form>
			<Table striped bordered hover variant="primary" responsive className="mb-5">
				<thead>
					<tr>
						<th>#</th>
						<th>Institution/Organization/Country</th>
						<th>Nature</th>
						<th>Purpose/Title</th>
						<th>Coordinating faculty</th>
						<th>Signed on</th>
						<th>Duration</th>
					</tr>
				</thead>
				<tbody>
					{data[name].map((reg, index) => {
						return (
							(country == "" ||
								reg["Country with which there is collation"]
									.toLowerCase()
									.indexOf(country) != -1) &&
							(institution == "" ||
								reg["Institutions/Organization/Country"]
									.toLowerCase()
									.indexOf(institution.toLowerCase()) != -1) && (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{reg["Institutions/Organization/Country"]}</td>
									<td>{reg["Nature"]}</td>
									<td>{reg["Purpose/Title"]}</td>
									<td>{reg["Coordinating faculty member"]}</td>
									<td>{reg["Signed on"]}</td>
									<td>{reg["Duration"]}</td>
								</tr>
							)
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
