import React from "react";
import data from "./data";
import { FiLink } from "react-icons/fi";
import { Table } from "react-bootstrap";

export const Pg_Phd = () => {
	console.log(data);
	return (
		<div className="container mt-1">
			<h2 className="pt-4 mainTitle pb-4 text-center">PG / PhD / Post Doc</h2>
			<Table striped bordered hover variant="success" responsive>
				<tbody>
					<tr>
						<th>S.No</th>
						<th>Nature of job</th>
						<th>Name</th>
						<th>University</th>
						<th>Country</th>
						<th>Application End Date</th>
						<th>Website</th>
					</tr>
					{data.map((item, index) => {
						return (
							<tr key={index}>
								<td>{item["S.No"]}</td>
								<td>{item["Nature of job"]}</td>
								<td>{item["Name"]}</td>
								<td>{item["University"]}</td>
								<td>{item["Country"]}</td>
								<td>{item["Application End Date"]}</td>
								<td>
									<a href={item["Website"]}>
										<FiLink></FiLink>
									</a>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
