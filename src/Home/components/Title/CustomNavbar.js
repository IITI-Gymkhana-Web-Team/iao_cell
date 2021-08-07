import React from "react";
import "./CustomNavbar2.css";
import { Link } from "react-router-dom";

export const CustomNavbar = () => {
	return (
		<div className="customNavbar2 font-ubuntu">
			<div className="mainLink2">
				<p className="mainLink-heading2">
					<Link to="/">Home</Link>
				</p>
			</div>
			<div className="mainLink2">
				<p className="mainLink-heading2">
					<Link to="/contact">Contact</Link>
				</p>
			</div>
			<div className="mainLink2" style={{ position: "relative", top: "-3px" }}>
				<input type="text" className="searchBox2" placeholder="Search..." />
			</div>
		</div>
	);
};
