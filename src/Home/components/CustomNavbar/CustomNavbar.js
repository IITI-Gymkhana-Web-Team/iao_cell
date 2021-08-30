import React, { useEffect, useState } from "react";
import "./CustomNavbar.css";
import { NavAboutUs } from "./NavAboutUs";
import { NavCooperation } from "./NavCooperation";
import { NavInbound } from "./NavInbound";
import { NavOutbound } from "./NavOutbound";
import { NavOutreach } from "./NavOutreach";
import { FiChevronDown } from "react-icons/fi";

export const CustomNavbar = ({ val, setVal }) => {
	const [showDiv, setShowDiv] = useState(false);
	const [currentVal, setCurrentVal] = useState(0);
	const [hoverVal, setHoverVal] = useState(0);

	const showMyDiv = (value) => {
		setShowDiv(true);
		setCurrentVal(value);
		setHoverVal(value);
	};

	useEffect(() => {
		console.log(hoverVal);
	}, [hoverVal]);

	const hideMyDiv = () => {
		setShowDiv(false);
		setCurrentVal(0);
		setHoverVal(0);
	};

	const handleLinkClick = (value) => {
		setVal(value);
		hideMyDiv();
	};

	return (
		<div className="customNavbar font-ubuntu" style={{ overflow: "visible", height: "50px", width: "100vw" }}>
			<div onMouseLeave={hideMyDiv} style={{ overflow: "visible", height: "50px" }}>
				<div className="customNavbarLinks">
					<div className="mainLink">
						<p
							className="mainLink-heading"
							onMouseEnter={() => {
								showMyDiv(1);
							}}
							style={
								hoverVal === 1
									? { color: "#00467f", backgroundColor: "#fff" }
									: val === 1
									? { color: "#fff", backgroundColor: "#0066b9" }
									: {}
							}
						>
							About Us <FiChevronDown />
						</p>
					</div>
					<div className="mainLink">
						<p
							className="mainLink-heading"
							onMouseEnter={() => {
								showMyDiv(2);
							}}
							style={
								hoverVal === 2
									? { color: "#00467f", backgroundColor: "#fff" }
									: val === 2
									? { color: "#fff", backgroundColor: "#0066b9" }
									: {}
							}
						>
							Inbound <FiChevronDown />
						</p>
					</div>
					<div className="mainLink">
						<p
							className="mainLink-heading"
							onMouseEnter={() => {
								showMyDiv(3);
							}}
							style={
								hoverVal === 3
									? { color: "#00467f", backgroundColor: "#fff" }
									: val === 3
									? { color: "#fff", backgroundColor: "#0066b9" }
									: {}
							}
						>
							Outbound <FiChevronDown />
						</p>
					</div>
					<div className="mainLink">
						<p
							className="mainLink-heading"
							onMouseEnter={() => {
								showMyDiv(4);
							}}
							style={
								hoverVal === 4
									? { color: "#00467f", backgroundColor: "#fff" }
									: val === 4
									? { color: "#fff", backgroundColor: "#0066b9" }
									: {}
							}
						>
							Cooperation & Engagements <FiChevronDown />
						</p>
					</div>
					<div className="mainLink">
						<p
							className="mainLink-heading"
							onMouseEnter={() => {
								showMyDiv(5);
							}}
							style={
								hoverVal === 5
									? { color: "#00467f", backgroundColor: "#fff" }
									: val === 5
									? { color: "#fff", backgroundColor: "#0066b9" }
									: {}
							}
						>
							Outreach <FiChevronDown />
						</p>
					</div>
				</div>
				{showDiv && currentVal !== 0 && (
					<div className="navDiv">
						{currentVal === 1 && <NavAboutUs handleLinkClick={handleLinkClick} />}
						{currentVal === 2 && <NavInbound handleLinkClick={handleLinkClick} />}
						{currentVal === 3 && <NavOutbound handleLinkClick={handleLinkClick} />}
						{currentVal === 4 && <NavCooperation handleLinkClick={handleLinkClick} />}
						{currentVal === 5 && <NavOutreach handleLinkClick={handleLinkClick} />}
					</div>
				)}
			</div>
		</div>
	);
};
