import React, { useState } from "react";
import { CustomTable } from "../../reusables/CustomTable";
import { data } from "./data";
import { Form } from "react-bootstrap";

export const Grants = () => {
	const [dept, setDept] = useState("");
	const [faculty, setFaculty] = useState("");

	return (
		<div className="container-fluid mhrdPage">
			<h1 className="mainTitle mt-4 mb-5 text-center">Bilateral International Grants</h1>
			<Form className="container">
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label>Search By Department</Form.Label>
					<Form.Control
						type="text"
						placeholder="Search by Department"
						onChange={(e) => {
							setDept(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput4">
					<Form.Label>Search By Faculty</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the name of the faculty member"
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
					"Funding Agency",
					"Title of the Grant",
					"Foreign Collaborator(s)",
					"Amount",
					"Year of Award - Year of Completion",
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
