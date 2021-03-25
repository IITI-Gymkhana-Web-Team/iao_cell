import React, { useState } from "react";
import { data } from "./data";
import { CustomTable } from "../../reusables/CustomTable";
import "./mePage.css";

export const MobilityExchange = ({ type }) => {
	const [region, setRegion] = useState("Americas");

	return (
		<div className="container">
			<div className="meButtons">
				{/*<button
					className={region == "Asia" ? "active" : ""}
					onClick={() => setRegion("Asia")}
				>
					Asia
				</button>*/}
				<button
					className={region == "Americas" ? "active" : ""}
					onClick={() => setRegion("Americas")}
				>
					Americas
				</button>
				<button
					className={region == "Europe" ? "active" : ""}
					onClick={() => setRegion("Europe")}
				>
					Europe
				</button>
				{/*<button
					className={region == "Australia" ? "active" : ""}
					onClick={() => setRegion("Australia")}
				>
					Australia
                </button>*/}
			</div>
			<div className="mt-5">
				{data[type][region].map((table) => {
					return (
						<div>
							<h2 className="font-acme">{table.title}</h2>
							<CustomTable cols={table.cols} data={table.data} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
