import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export const NavInbound = ({ setVal, highlight }) => {
	const [show, setShow] = useState(false);

	const hideNav = () => {
		setShow(false);
	};

	const showNav = () => {
		setShow(true);
	};

	const handleLinkClick = () => {
		setVal(2);
		hideNav();
	};

	return (
		<div className="mainLink" onMouseLeave={hideNav}>
			<p
				className="mainLink-heading"
				onMouseEnter={showNav}
				style={highlight ? { color: "#fff", backgroundColor: "#0066b9" } : {}}
			>
				Inbound <FiChevronDown />
			</p>
			{show && (
				<div style={{ width: "90%", left: "5%", maxHeight: "50vh" }}>
					<div>
						<p className="navHeading nh1">Visitors</p>
						<div>
							<p>
								<Link onClick={handleLinkClick} to="/Pros/visitors_experience">
									Visitors' Experience
								</Link>
							</p>
							<p>
								<Link onClick={handleLinkClick} to="/Pros/places">
									Places To Visit
								</Link>
							</p>
							<p>
								<Link onClick={handleLinkClick} to="/int/students">
									International Student's List
								</Link>
							</p>
							<p>
								<Link onClick={handleLinkClick} to="/LifeIITI">
									Campus Life@IITI
								</Link>
							</p>
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
							<p>
								<Link onClick={handleLinkClick} to="/admission">
									Admission
								</Link>
							</p>
							<p>
								<a onClick={handleLinkClick} href="https://academic.iiti.ac.in/academic_program.php">
									Programs
								</a>
							</p>
							<p>
								<Link onClick={handleLinkClick} to="/visa">
									Visa Process
								</Link>
							</p>
						</div>
					</div>
					<div>
						<p className="navHeading nh1">Researchers</p>
						<div>
							<p>
								<Link onClick={handleLinkClick} to="/visa">
									Visa Process
								</Link>
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
				</div>
			)}
		</div>
	);
};
