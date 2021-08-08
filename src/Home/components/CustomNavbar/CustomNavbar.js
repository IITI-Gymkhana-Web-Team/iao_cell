import React from "react";
import "./CustomNavbar.css";
import { NavAboutUs } from "./NavAboutUs";
import { NavCooperation } from "./NavCooperation";
import { NavInbound } from "./NavInbound";
import { NavOutbound } from "./NavOutbound";
import { NavOutreach } from "./NavOutreach";

export const CustomNavbar = () => {
	return (
		<div className="customNavbar font-ubuntu">
			<div className="container customNavbar">
				<NavAboutUs />
				<NavInbound />
				<NavOutbound />
				<NavCooperation />
				<NavOutreach />
			</div>
		</div>
	);
};
