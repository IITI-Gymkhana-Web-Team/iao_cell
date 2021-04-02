import React from "react";
import { CustomTable } from "../../reusables/CustomTable";
import { data } from "./data";

export const Grants = ({ dept }) => {
	return (
		<div className="container">
			<h1 className="mainTitle mt-4 mb-3">
				Grants in the department of {dept == "ME" && "Mechanical Engineering"}
				{dept == "BSBE" && "Biosciences and Bioengineering"}
				{dept == "Chemistry" && "Chemistry"}
				{dept == "CSE" && "Computer Science and Engineering"}
				{dept == "HSS" && "Humanities and Social Sciences"}
				{dept == "Mathematics" && "Mathematics"}
				{dept == "MEMS" && "Metallurgical Engineering and Material Science"}
				{dept == "Physics" && "Physics"}
			</h1>
			<CustomTable
				data={data[dept]}
				cols={[
					"Name of the Faculty",
					"Department",
					"Funding Agency",
					"Title of the Grant",
					"Foreign Collaborator(s)",
					"Amount",
					"Year of Award - Year of Completion",
				]}
			/>
		</div>
	);
};
