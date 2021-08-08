import React from "react";
import "./CustomNavbar2.css";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { IoCallSharp } from "react-icons/io5";

export const CustomNavbar = () => {
	return (
		<div className="customNavbar2 font-ubuntu">
			<div className="mainLink2">
				<p className="mainLink-heading2">
					<Link to="/">
						<ImHome />
					</Link>
				</p>
			</div>
			<div className="mainLink2">
				<p className="mainLink-heading2">|</p>
			</div>
			<div className="mainLink2 mr-3">
				<p className="mainLink-heading2">
					<Link to="/contact">
						<IoCallSharp />
					</Link>
				</p>
			</div>
			<div className="mainLink2" style={{ position: "relative", top: "-3px" }}>
				<input type="text" className="searchBox2" placeholder="Search..." />
			</div>
		</div>
	);
};
