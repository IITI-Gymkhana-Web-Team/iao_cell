import React from "react";
import { Table } from "react-bootstrap";

export const CustomTable = ({ cols, data, sort, vars }) => {
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
		<Table striped bordered hover variant="primary" responsive className="mb-5">
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
						(!sort || ifAllowed(row)) && (
							<tr key={index} style={{ whiteSpace: "pre-wrap" }}>
								{cols.map((col) => {
									return <td>{row[col] || "-"}</td>;
								})}
							</tr>
						)
					);
				})}
			</tbody>
		</Table>
	);
};
