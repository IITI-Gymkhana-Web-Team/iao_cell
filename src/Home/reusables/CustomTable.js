import React from "react";
import { Table } from "react-bootstrap";

export const CustomTable = ({ cols, data }) => {
	return (
		<Table striped bordered hover variant="success" responsive className="mb-5">
			<thead>
				<tr>
					{cols.map((col) => {
						return <th>{col}</th>;
					})}
				</tr>
			</thead>
			<tbody>
				{data.map((row, index) => {
					return (
						<tr key={index} style={{ whiteSpace: "pre-wrap" }}>
							{cols.map((col) => {
								return <td>{row[col]}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};
