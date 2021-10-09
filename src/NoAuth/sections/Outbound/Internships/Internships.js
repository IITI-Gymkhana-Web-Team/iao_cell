import React from "react";
import { data } from "./data";
import { FiLink } from "react-icons/fi";
import { Table } from "react-bootstrap";

export const Internships = () => {
	return (
		<div className="container mt-1">
			<h2 className="pt-4 mainTitle pb-4 text-center">Internships</h2>
			<Table striped bordered hover variant="primary" responsive>
				<tbody>
					<tr>
						<th>S.No</th>
						<th>Type of Program</th>
						<th>Name of Program</th>
						<th>Offered by</th>
						<th>Deadline</th>
						<th>Website</th>
					</tr>
					{data.map((item, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{item["Type of Program"] || "-"}</td>
								<td>{item["Name of Program"] || "-"}</td>
								<td>{item["Offered by"] || "-"}</td>
								<td>{item["Deadline"] || "-"}</td>
								<td style={{ textAlign: "center" }}>
									{item["Link"] && (
										<a href={item["Link"]}>
											<FiLink></FiLink>
										</a>
									)}
									{!item["Link"] && "-"}
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
