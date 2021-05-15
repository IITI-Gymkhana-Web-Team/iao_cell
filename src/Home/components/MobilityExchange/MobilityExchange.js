import React from "react";
import { data } from "./data";
import { CustomTable } from "../../reusables/CustomTable";
import "./mePage.css";

export const MobilityExchange = ({ type, category }) => {
	return (
		<div className="container push-footer">
			{type == "faculty" && <h2 className="mainTitle text-center mt-4">Faculty Visits</h2>}
			{type == "student" && <h2 className="mainTitle text-center mt-4">Student Visits</h2>}
			<div className="mt-5">
				{data[type][category].map((table) => {
					return (
						<div>
							<h3 className="font-acme">{table.title}</h3>
							<CustomTable cols={table.cols} data={table.data} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
