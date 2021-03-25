import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { data } from "./data";
import { Form } from "react-bootstrap";

export const Mou2 = ({ name }) => {
	const [country, setCountry] = useState("");
	const [title, setTitle] = useState("");
	const [faculty, setFaculty] = useState("");
	const [institution, setInstitution] = useState("");

	return (
		<div className="container mhrdPage">
			<h1 className="pt-4 mainTitle text-center mb-5">{name + " MoUs"}</h1>
			<Form>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label>Search By Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Academic Cooperation"
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput2">
					<Form.Label>Search By Institution</Form.Label>
					<Form.Control
						type="text"
						placeholder="ABC University"
						onChange={(e) => {
							setInstitution(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput3">
					<Form.Label>Search By Country</Form.Label>
					<Form.Control
						type="text"
						placeholder="India"
						onChange={(e) => {
							setCountry(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput4">
					<Form.Label>Search By Faculty</Form.Label>
					<Form.Control
						type="text"
						placeholder="DOIA"
						onChange={(e) => {
							setFaculty(e.target.value);
						}}
					/>
				</Form.Group>
			</Form>
			<Table striped bordered hover variant="success" responsive className="mb-5">
				<thead>
					<tr>
						<th>#</th>
						<th>Institution/Organization/Country</th>
						<th>Nature</th>
						<th>Purpose/Title</th>
						<th>Coordinating faculty</th>
						<th>Signed on</th>
						<th>Duration</th>
						<th>Country</th>
					</tr>
				</thead>
				<tbody>
					{data[name].map((reg, index) => {
						return (
							(country == "" ||
								reg["Country with which there is collation"]
									.toLowerCase()
									.indexOf(country) != -1) &&
							(title == "" ||
								reg["Purpose/Title"].toLowerCase().indexOf(title.toLowerCase()) !=
									-1) &&
							(institution == "" ||
								reg["Institutions/Organization/Country"]
									.toLowerCase()
									.indexOf(institution.toLowerCase()) != -1) &&
							(faculty == "" ||
								reg["Coordinating faculty member"]
									.toLowerCase()
									.indexOf(faculty.toLowerCase()) != -1) && (
								<tr key={index} style={{ whiteSpace: "pre-wrap" }}>
									<td>{index + 1}</td>
									<td>{reg["Institutions/Organization/Country"]}</td>
									<td>{reg["Nature"]}</td>
									<td>{reg["Purpose/Title"]}</td>
									<td>{reg["Coordinating faculty member"]}</td>
									<td>{reg["Signed on"]}</td>
									<td>{reg["Duration"]}</td>
									<td>{reg["Country with which there is collation"]}</td>
								</tr>
							)
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
