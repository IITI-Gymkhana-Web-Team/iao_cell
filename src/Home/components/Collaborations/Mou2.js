import React from "react";
import { Table } from "react-bootstrap";
import { data } from "./data";

export const Mou2 = ({ name }) => {
	return (
		<div className="container">
			<Table striped bordered hover variant="success" responsive className="mt-5 mb-5">
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
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
