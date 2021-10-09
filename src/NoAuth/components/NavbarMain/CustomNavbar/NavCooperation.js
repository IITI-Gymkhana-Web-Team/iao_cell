import React from "react";
import { Link } from "react-router-dom";

export const NavCooperation = ({ handleLinkClick }) => {
	const linkClick = () => {
		handleLinkClick(4);
	};

	return (
		<div className="mainLink">
			<div style={{ maxHeight: "50vh" }}>
				<div style={{ minWidth: "100%" }}>
					<div className="d-flex flex-wrap" style={{ justifyContent: "space-between" }}>
						<div>
							<p className="navHeading nh1">MoUs</p>
							<div>
								<p>
									<Link onClick={linkClick} to="/mou/asia">
										Asian Universities
									</Link>
								</p>
								<p>
									<Link onClick={linkClick} to="/mou/australia">
										Australian Universities
									</Link>
								</p>
								<p>
									<Link onClick={linkClick} to="/mou/america">
										American Universities
									</Link>
								</p>
								<p>
									<Link onClick={linkClick} to="/mou/europe">
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
										<Link onClick={linkClick} to="/mobility/faculty/africa">
											Africa
										</Link>
									</p>
									<p>
										<Link onClick={linkClick} to="/mobility/faculty/america">
											America
										</Link>
									</p>
									<p>
										<Link onClick={linkClick} to="/mobility/faculty/asia">
											Asia
										</Link>
									</p>
									<p>
										<Link onClick={linkClick} to="/mobility/faculty/australia">
											Australia
										</Link>
									</p>
									<p>
										<Link onClick={linkClick} to="/mobility/faculty/europe">
											Europe
										</Link>
									</p>
									<p>
										<Link onClick={linkClick} to="/mobility/faculty/others">
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
										<Link onClick={linkClick} to="/mobility/student/america">
											America
										</Link>
									</p>
									<p>
										<Link onClick={linkClick} to="/mobility/student/europe">
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
										<Link onClick={linkClick} to="/grants">
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
									<Link onClick={linkClick} to="/mhrd/gian">
										GIAN
									</Link>
								</p>
								<p>
									<Link onClick={linkClick} to="/mhrd/vajra">
										VAJRA
									</Link>
								</p>
								<p>
									<Link onClick={linkClick} to="/mhrd/sparc">
										SPARC
									</Link>
								</p>
								<p>
									<Link onClick={linkClick} to="/mhrd/asem">
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
										<Link onClick={linkClick} to="/publications">
											Publications
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
