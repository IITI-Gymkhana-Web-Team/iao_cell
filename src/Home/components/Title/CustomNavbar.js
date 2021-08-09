import React from "react";
import "./CustomNavbar2.css";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";

export const CustomNavbar = ({ setVal }) => {
	return (
		<div className="customNavbar2 font-ubuntu">
			<div className="mainLink2">
				<p className="mainLink-heading2">
					<Link
						to="/"
						onClick={() => {
							setVal(0);
						}}
					>
						<ImHome />
					</Link>
				</p>
			</div>
			<div className="mainLink2">
				<p className="mainLink-heading2">|</p>
			</div>
			<div className="mainLink2 mr-3">
				<p className="mainLink-heading2">
					<Link
						to="/contact"
						onClick={() => {
							setVal(1);
						}}
					>
						Reach Us
					</Link>
				</p>
			</div>
			<div className="mainLink2" style={{ position: "relative", top: "-3px" }}>
				<input type="text" className="searchBox2" placeholder="Search..." />
			</div>
		</div>
	);
};
