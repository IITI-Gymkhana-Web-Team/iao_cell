import React from "react";
import "./CustomNavbar.css";
import { NavAboutUs } from "./NavAboutUs";
import { NavInbound } from "./NavInbound";
import { NavOutbound } from "./NavOutbound";
import { Link } from "react-router-dom";

export const CustomNavbar = () => {
	return (
		<div className="customNavbar font-ubuntu">
			<NavAboutUs />
			<NavInbound />
			<NavOutbound />
			<div className="mainLink">
				<p className="mainLink-heading">
					<Link to="/contact">Reach Us</Link>
				</p>
			</div>
			<div className="mainLink" style={{ position: "relative", top: "-3px" }}>
				<input type="text" className="searchBox" placeholder="Search..." style={{ padding: "5px" }} />
			</div>
		</div>
	);
};
