import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export const NavOutreach = () => {
	const [show, setShow] = useState(false);

	const hideNav = () => {
		setShow(false);
	};

	const showNav = () => {
		setShow(true);
	};

	return (
		<div className="mainLink" onMouseLeave={hideNav}>
			<p className="mainLink-heading" onMouseEnter={showNav}>
				Outreach <FiChevronDown />
			</p>
			{show && (
				<div style={{ maxHeight: "50vh" }}>
					<div style={{ minWidth: "100%" }}>
						<div className="d-flex flex-wrap" style={{ justifyContent: "space-between" }}>
							<div>
								<p className="navHeading nh1">MoUs</p>
								<div>
									<p>
										<Link onClick={hideNav} to="/mou/asia">
											Asian Universities
										</Link>
									</p>
									<p>
										<Link onClick={hideNav} to="/mou/australia">
											Australian Universities
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
