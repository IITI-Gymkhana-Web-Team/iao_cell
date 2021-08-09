import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export const NavCooperation = ({ setVal, highlight }) => {
	const [show, setShow] = useState(false);

	const hideNav = () => {
		setShow(false);
	};

	const showNav = () => {
		setShow(true);
	};

	const handleLinkClick = () => {
		setVal(4);
		hideNav();
	};

	return (
		<div className="mainLink" onMouseLeave={hideNav}>
			<p
				className="mainLink-heading"
				onMouseEnter={showNav}
				style={highlight ? { color: "#fff", backgroundColor: "#0066b9" } : {}}
			>
				Cooperation & Engagement <FiChevronDown />
			</p>
			{show && (
				<div style={{ maxHeight: "50vh" }}>
					<div style={{ minWidth: "100%" }}>
						<div className="d-flex flex-wrap" style={{ justifyContent: "space-between" }}>
							<div>
								<p className="navHeading nh1">MoUs</p>
								<div>
									<p>
										<Link onClick={handleLinkClick} to="/mou/asia">
											Asian Universities
										</Link>
									</p>
									<p>
										<Link onClick={handleLinkClick} to="/mou/australia">
											Australian Universities
										</Link>
									</p>
									<p>
										<Link onClick={handleLinkClick} to="/mou/america">
											American Universities
										</Link>
									</p>
									<p>
										<Link onClick={handleLinkClick} to="/mou/europe">
											European Universities
										</Link>
									</p>
								</div>
							</div>
							<div>
								<div>
									<p className="navHeading nh1">Faculty Visits</p>
									<div>
										<p>
											<Link onClick={handleLinkClick} to="/mobility/faculty/africa">
												Africa
											</Link>
										</p>
										<p>
											<Link onClick={handleLinkClick} to="/mobility/faculty/america">
												America
											</Link>
										</p>
										<p>
											<Link onClick={handleLinkClick} to="/mobility/faculty/asia">
												Asia
											</Link>
										</p>
										<p>
											<Link onClick={handleLinkClick} to="/mobility/faculty/australia">
												Australia
											</Link>
										</p>
										<p>
											<Link onClick={handleLinkClick} to="/mobility/faculty/europe">
												Europe
											</Link>
										</p>
										<p>
											<Link onClick={handleLinkClick} to="/mobility/faculty/others">
												Other Countries
											</Link>
										</p>
									</div>
								</div>
							</div>
							<div>
								<div>
									<p className="navHeading nh1">Student Visits</p>
									<div>
										<p>
											<Link onClick={handleLinkClick} to="/mobility/student/america">
												America
											</Link>
										</p>
										<p>
											<Link onClick={handleLinkClick} to="/mobility/student/europe">
												Europe
											</Link>
										</p>
									</div>
								</div>
							</div>
							<div>
								<div>
									<p className="navHeading nh1">International Grants</p>
									<div>
										<p>
											<Link onClick={handleLinkClick} to="/grants">
												Bilateral International Grants
											</Link>
										</p>
									</div>
								</div>
							</div>
							<div>
								<p className="navHeading nh1">MHRD Schemes</p>
								<div>
									<p>
										<Link onClick={handleLinkClick} to="/mhrd/gian">
											GIAN
										</Link>
									</p>
									<p>
										<Link onClick={handleLinkClick} to="/mhrd/vajra">
											VAJRA
										</Link>
									</p>
									<p>
										<Link onClick={handleLinkClick} to="/mhrd/sparc">
											SPARC
										</Link>
									</p>
									<p>
										<Link onClick={handleLinkClick} to="/mhrd/asem">
											ASEM - DUO
										</Link>
									</p>
								</div>
							</div>
							<div>
								<div>
									<p className="navHeading nh1">Publications</p>
									<div>
										<p>
											<Link onClick={handleLinkClick} to="/publications">
												Publications
											</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
