import React from "react";
import { Link } from "react-router-dom";

export const NavOutreach = ({ handleLinkClick }) => {
	const linkClick = () => {
		handleLinkClick(5);
	};

	return (
		<div className="mainLink">
			<div style={{ maxHeight: "40vh" }} className="d-flex justify-content-center align-items-center">
				<div style={{ minWidth: "100%" }}>
					<div className="d-flex flex-wrap outreachTab" style={{ justifyContent: "space-evenly" }}>
						<div className="outreachDivs">
							<Link to="/" onClick={linkClick}>
								<p className="navHeading nh1">Conference & Seminars</p>
							</Link>
						</div>
						<div className="outreachDivs">
							<Link to="/" onClick={linkClick}>
								<p className="navHeading nh1">Public Lectures</p>
							</Link>
						</div>
						<div className="outreachDivs">
							<Link to="/" onClick={linkClick}>
								<p className="navHeading nh1">National Science Day</p>
							</Link>
						</div>
						<div className="outreachDivs">
							<Link to="/" onClick={linkClick}>
								<p className="navHeading nh1">Engagement with Engineering Colleges</p>
							</Link>
						</div>
						<div className="outreachDivs">
							<Link to="/outreach/events" onClick={linkClick}>
								<p className="navHeading nh1">Events & Activities</p>
							</Link>
						</div>
						<div className="outreachDivs">
							<Link to="/" onClick={linkClick}>
								<p className="navHeading nh1">Visits of School Kids</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
