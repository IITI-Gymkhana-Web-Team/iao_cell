import React, { useState } from "react";
import { CustomTable } from "../../reusables/CustomTable";
import { data } from "./data";
import { Form } from "react-bootstrap";

export const Publications = () => {
	const [dept, setDept] = useState("");
	const [faculty, setFaculty] = useState("");

	return (
		<div className="container mhrdPage">
			<h1 className="mainTitle mt-4 mb-5 text-center">Publications</h1>
			<Form>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label>Search By Department</Form.Label>
					<Form.Control
						type="text"
						placeholder="Chemistry"
						onChange={(e) => {
							setDept(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput4">
					<Form.Label>Search By Faculty</Form.Label>
					<Form.Control
						type="text"
						placeholder="Dr. ABC"
						onChange={(e) => {
							setFaculty(e.target.value);
						}}
					/>
				</Form.Group>
			</Form>
			<CustomTable
				data={data}
				cols={[
					"Name of the Faculty",
					"Department",
					"Author(s)",
					"Title",
					"Book/ Journal/ Book chapter/ Conference Name",
					"Volume/ Page",
					"Year",
				]}
				vars={[
					{ var: dept, colValue: 1 },
					{ var: faculty, colValue: 0 },
				]}
				sort={true}
			/>
		</div>
	);
};
