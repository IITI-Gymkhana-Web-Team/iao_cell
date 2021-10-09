import React from "react";
import { Link } from "react-router-dom";
import iaoBrochure from "../../../../assets/Institute Brochure-IAO.pdf";

export const NavInbound = ({ handleLinkClick }) => {
	const linkClick = () => {
		handleLinkClick(2);
	};

	return (
		<div className="mainLink">
			<div style={{ maxHeight: "50vh" }}>
				<div>
					<p className="navHeading nh1">Visitors</p>
					<div>
						<div>
							<p>
								<Link onClick={linkClick} to="/Pros/visitors_experience">
									Visitors' Experience
								</Link>
							</p>
							<p>
								<Link onClick={linkClick} to="/Pros/places">
									Places To Visit
								</Link>
							</p>
							<p>
								<Link onClick={linkClick} to="/int/students">
									International Student's List
								</Link>
							</p>
							<p>
								<Link onClick={linkClick} to="/int/visitors">
									International Visitors
								</Link>
							</p>
							<p>
								<Link onClick={linkClick} to="/LifeIITI">
									Campus Life@IITI
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div>
					<p className="navHeading nh1">Academics and Research</p>
					<div>
						<p>
							<a href="http://rnd.iiti.ac.in/" target="_blank" rel="noreferrer">
								Research and Development
							</a>
						</p>
						<p>
							<a href="https://academic.iiti.ac.in/" target="_blank" rel="noreferrer">
								Academic Programs
							</a>
						</p>
					</div>
				</div>
				<div>
					<p className="navHeading nh1">Students</p>
					<div>
						<div>
							<p>
								<Link onClick={linkClick} to="/admission">
									Admission
								</Link>
							</p>
							<p>
								<a
									href="https://academic.iiti.ac.in/academic_program.php"
									target="_blank"
									rel="noreferrer"
								>
									Programs
								</a>
							</p>
							<p>
								<Link onClick={linkClick} to="/visa">
									Visa Process
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div>
					<p className="navHeading nh1">Researchers</p>
					<div>
						<p>
							<Link onClick={linkClick} to="/visa">
								Visa Process
							</Link>
						</p>
						<p>
							<a href={iaoBrochure} target="_blank" rel="noreferrer">
								IAO Brochure
							</a>
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
			</div>
		</div>
	);
};
