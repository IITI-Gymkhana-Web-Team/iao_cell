import React from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export const NavInbound = () => {
	return (
		<div className="mainLink">
			<p className="mainLink-heading">
				Inbound <FiChevronDown />
			</p>
			<div style={{ width: "70%", left: "15%", maxHeight: "50vh" }}>
				<div>
					<p className="navHeading nh1">Visitors</p>
					<div>
						<p>
							<Link to="/Pros/visitors_experience">Visitors' Experience</Link>
						</p>
						<p>
							<Link to="/Pros/places">Places To Visit</Link>
						</p>
						<p>
							<Link to="/int/students">Intl. Students' List</Link>
						</p>
					</div>
				</div>
				<div>
					<p className="navHeading nh1">Students</p>
					<div>
						<p>
							<Link to="/admission">Admission</Link>
						</p>
						<p>
							<Link to="/programs">Programs</Link>
						</p>
						<p>
							<Link to="/visa">Visa Process</Link>
						</p>
					</div>
				</div>
				<div>
					<p className="navHeading nh1">Faculty</p>
					<div>
						<p>
							<Link to="/visa">Visa Process</Link>
						</p>
					</div>
				</div>
				<div>
					<p className="navHeading nh1">Opportunities</p>
					<div>
						<p>
							<a href="https://studyinindia.gov.in/" target="_blank" rel="noreferrer">
								Study In India
							</a>
						</p>
						<p>
							<a href="https://www.iccr.gov.in/" target="_blank" rel="noreferrer">
								ICCR
							</a>
						</p>
						<p>
							<a href="https://asean-iit.in/" target="_blank" rel="noreferrer">
								ASEAN India STIC
							</a>
						</p>
						<p>
							<a
								href="https://www.britishcouncil.in/programmes/higher-education/ukieri/ukieri-mobility-programme-study-india"
								target="_blank"
								rel="noreferrer"
							>
								UKIERI Mobility Programme
							</a>
						</p>
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
			</div>
		</div>
	);
};
