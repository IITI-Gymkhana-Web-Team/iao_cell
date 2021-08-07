import React from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export const NavCooperation = () => {
	return (
		<div className="mainLink">
			<p className="mainLink-heading">
				Cooperation & Engagement <FiChevronDown />
			</p>
			<div style={{ maxHeight: "50vh" }}>
				<div style={{ minWidth: "100%" }}>
					<div className="d-flex flex-wrap" style={{ justifyContent: "space-between" }}>
						<div>
							<p className="navHeading nh1">MoUs</p>
							<div>
								<p>
									<Link to="/mou/asia">Asian Universities</Link>
								</p>
								<p>
									<Link to="/mou/australia">Australian Universities</Link>
								</p>
								<p>
									<Link to="/mou/america">American Universities</Link>
								</p>
								<p>
									<Link to="/mou/europe">European Universities</Link>
								</p>
							</div>
						</div>
						<div>
							<div>
								<p className="navHeading nh1">Faculty Visits</p>
								<div>
									<p>
										<Link to="/mobility/faculty/africa">Africa</Link>
									</p>
									<p>
										<Link to="/mobility/faculty/america">America</Link>
									</p>
									<p>
										<Link to="/mobility/faculty/asia">Asia</Link>
									</p>
									<p>
										<Link to="/mobility/faculty/australia">Australia</Link>
									</p>
									<p>
										<Link to="/mobility/faculty/europe">Europe</Link>
									</p>
									<p>
										<Link to="/mobility/faculty/others">Other Countries</Link>
									</p>
								</div>
							</div>
						</div>
						<div>
							<div>
								<p className="navHeading nh1">Student Visits</p>
								<div>
									<p>
										<Link to="/mobility/student/america">America</Link>
									</p>
									<p>
										<Link to="/mobility/student/europe">Europe</Link>
									</p>
								</div>
							</div>
						</div>
						<div>
							<div>
								<p className="navHeading nh1">International Grants</p>
								<div>
									<p>
										<Link to="/grants">Bilateral International Grants</Link>
									</p>
								</div>
							</div>
						</div>
						<div>
							<p className="navHeading nh1">MHRD Schemes</p>
							<div>
								<p>
									<Link to="/mhrd/gian">GIAN</Link>
								</p>
								<p>
									<Link to="/mhrd/vajra">VAJRA</Link>
								</p>
								<p>
									<Link to="/mhrd/sparc">SPARC</Link>
								</p>
								<p>
									<Link to="/mhrd/asem">ASEM - DUO</Link>
								</p>
							</div>
						</div>
						<div>
							<div>
								<p className="navHeading nh1">Publications</p>
								<div>
									<p>
										<Link to="/publications">Publications</Link>
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
