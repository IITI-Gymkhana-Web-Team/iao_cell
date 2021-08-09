import React from "react";
import "./CustomNavbar.css";
import { NavAboutUs } from "./NavAboutUs";
import { NavCooperation } from "./NavCooperation";
import { NavInbound } from "./NavInbound";
import { NavOutbound } from "./NavOutbound";
import { NavOutreach } from "./NavOutreach";

export const CustomNavbar = ({ val, setVal }) => {
	return (
		<div className="customNavbar font-ubuntu">
			<div className="container customNavbar">
				<NavAboutUs setVal={setVal} highlight={val === 1} />
				<NavInbound setVal={setVal} highlight={val === 2} />
				<NavOutbound setVal={setVal} highlight={val === 3} />
				<NavCooperation setVal={setVal} highlight={val === 4} />
				<NavOutreach setVal={setVal} highlight={val === 5} />
			</div>
		</div>
	);
};
