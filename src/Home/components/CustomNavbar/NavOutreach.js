import React from "react";
import { Link } from "react-router-dom";

export const NavOutreach = ({ handleLinkClick }) => {
	const linkClick = () => {
		handleLinkClick(5);
	};

	return (
		<div className="mainLink">
			<div style={{ maxHeight: "40vh" }}>
				<div style={{ minWidth: "100%" }}>
					<div className="d-flex flex-wrap" style={{ justifyContent: "space-evenly" }}>
						<div style={{ margin: "10px" }}>
							<Link to="/" onClick={linkClick}>
								<p className="navHeading nh2">Conference & Seminars</p>
							</Link>
						</div>
						<div style={{ margin: "10px" }}>
							<Link to="/" onClick={linkClick}>
								<p className="navHeading nh2">Public lectures</p>
							</Link>
						</div>
						<div style={{ margin: "10px" }}>
							<Link to="/" onClick={linkClick}>
								<p className="navHeading nh2">National Science Day</p>
							</Link>
						</div>
						<div style={{ margin: "10px" }}>
							<Link to="/" onClick={linkClick}>
								<p className="navHeading nh2">Engagement with Engineering Colleges</p>
							</Link>
						</div>
						<div style={{ margin: "10px" }}>
							<Link to="/" onClick={linkClick}>
								<p className="navHeading nh2">Events & Activities</p>
							</Link>
						</div>
						<div style={{ margin: "10px" }}>
							<Link to="/" onClick={linkClick}>
								<p className="navHeading nh2">Visits of School kids</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
