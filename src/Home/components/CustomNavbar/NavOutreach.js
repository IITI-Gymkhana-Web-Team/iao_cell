import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export const NavOutreach = ({ setVal, highlight }) => {
	const [show, setShow] = useState(false);

	const hideNav = () => {
		setShow(false);
	};

	const showNav = () => {
		setShow(true);
	};

	const handleLinkClick = () => {
		setVal(5);
		hideNav();
	};

	return (
		<div className="mainLink" onMouseLeave={hideNav}>
			<p
				className="mainLink-heading"
				onMouseEnter={showNav}
				style={highlight ? { color: "#fff", backgroundColor: "#0066b9" } : {}}
			>
				Outreach <FiChevronDown />
			</p>
			{show && (
				<div style={{ width: "70%", left: "15%", maxHeight: "40vh" }}>
					<div style={{ minWidth: "100%" }}>
						<div className="d-flex flex-wrap" style={{ justifyContent: "space-evenly" }}>
							<div style={{ margin: "10px 20px" }}>
								<Link to="/" onClick={handleLinkClick}>
									<p className="navHeading nh2">Conference & Seminars</p>
								</Link>
							</div>
							<div style={{ margin: "10px 20px" }}>
								<Link to="/" onClick={handleLinkClick}>
									<p className="navHeading nh2">Public lectures</p>
								</Link>
							</div>
							<div style={{ margin: "10px 20px" }}>
								<Link to="/" onClick={handleLinkClick}>
									<p className="navHeading nh2">National Science Day</p>
								</Link>
							</div>
							<div style={{ margin: "10px 20px" }}>
								<Link to="/" onClick={handleLinkClick}>
									<p className="navHeading nh2">Engagement with Engineering Colleges</p>
								</Link>
							</div>
							<div style={{ margin: "10px 20px" }}>
								<Link to="/" onClick={handleLinkClick}>
									<p className="navHeading nh2">Events & Activities</p>
								</Link>
							</div>
							<div style={{ margin: "10px 20px" }}>
								<Link to="/" onClick={handleLinkClick}>
									<p className="navHeading nh2">Visits of School kids</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
