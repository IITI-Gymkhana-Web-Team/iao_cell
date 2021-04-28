import React, { useState } from "react";
import { data } from "./data";
import { Form, Table } from "react-bootstrap";

export const Publications = () => {
	const [dept, setDept] = useState("");
	const [faculty, setFaculty] = useState("");

	const cols = [
		"Name of the Faculty",
		"Department",
		"Author(s)",
		"Title",
		"Book/ Journal/ Book chapter/ Conference Name",
		"Volume/ Page",
		"Year",
	];

	const vars = [
		{ var: dept, colValue: 1 },
		{ var: faculty, colValue: 0 },
	];

	const ifAllowed = (row) => {
		var i = 0;
		while (vars[i]) {
			if (
				vars[i].var != "" &&
				row[cols[vars[i].colValue]].toLowerCase().indexOf(vars[i].var.toLowerCase()) == -1
			)
				return false;
			i++;
		}
		return true;
	};

	return (
		<div className="container-fluid mhrdPage">
			<h1 className="mainTitle mt-4 mb-5 text-center">Publications</h1>
			<Form className="container">
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label>Search By Department</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the name of the department"
						onChange={(e) => {
							setDept(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput4">
					<Form.Label>Search By Faculty</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the name of the faculty"
						onChange={(e) => {
							setFaculty(e.target.value);
						}}
					/>
				</Form.Group>
			</Form>
			<Table striped bordered hover variant="primary" responsive className="mb-5">
				<thead>
					<tr>
						<th>S.No</th>
						<th>Name of the Faculty</th>
						<th>Department</th>
						<th style={{ minWidth: "400px" }}>Author(s)</th>
						<th>Title</th>
						<th>Book/ Journal</th>
						<th>Volume/ Page</th>
						<th>Year</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => {
						return (
							ifAllowed(row) && (
								<tr key={index} style={{ whiteSpace: "pre-wrap" }}>
									<td>{index + 1}</td>
									<td>{row["Name of the Faculty"]}</td>
									<td>{row["Department"]}</td>
									<td>{row["Author(s)"]}</td>
									<td>{row["Title"]}</td>
									<td>{row["Book/ Journal/ Book chapter/ Conference Name"]}</td>
									{row["Volume/ Page"][0] == "l" &&
										row["Volume/ Page"][1] == "k" && (
											<td>
												<a
													href={row["Volume/ Page"].slice(3)}
													target="_blank"
												>
													Link
												</a>
											</td>
										)}
									{row["Volume/ Page"][0] != "l" &&
										row["Volume/ Page"][1] != "k" && (
											<td>{row["Volume/ Page"]}</td>
										)}

									<td>{row["Year"]}</td>
								</tr>
							)
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
