import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export const NavAboutUs = () => {
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
				About Us <FiChevronDown />
			</p>
			{show && (
				<div style={{ maxHeight: "50vh" }}>
					<div>
						<p className="navHeading nh1">About Us</p>
						<div>
							<p>
								<Link onClick={hideNav} to="/Aboutioa">
									About IAO
								</Link>
							</p>
							<p>
								<Link onClick={hideNav} to="/Aboutiiti">
									About IITI
								</Link>
							</p>
							<p>
								<Link onClick={hideNav} to="/LifeIITI">
									Campus Life @ IITI
								</Link>
							</p>
						</div>
					</div>
					<div>
						<p className="navHeading nh1">People</p>
						<div>
							<p>
								<Link onClick={hideNav} to="/people/oia">
									International Affairs
								</Link>
							</p>
							<p>
								<Link onClick={hideNav} to="/people/sc">
									SIA Cell
								</Link>
							</p>
							<p>
								<Link onClick={hideNav} to="/committee/oc">
									Outreach Committee
								</Link>
							</p>
							<p>
								<Link onClick={hideNav} to="/committee/mec">
									ISMAE Committee
								</Link>
							</p>
						</div>
					</div>
					<div>
						<p className="navHeading nh1">Facilities</p>
						<div style={{ display: "flex" }}>
							<div style={{ marginRight: "40px" }}>
								<p>
									<a href="http://hostel.iiti.ac.in/" target="_blank" rel="noreferrer">
										Hostels
									</a>
								</p>
								<p>
									<Link onClick={hideNav} to="/guestHouse">
										Guest House
									</Link>
								</p>
								<p>
									<a href="http://iiti.ac.in/page/campus-facilities" target="_blank" rel="noreferrer">
										Eateries
									</a>
								</p>
								<p>
									<a href="http://people.iiti.ac.in/~medical/" target="_blank" rel="noreferrer">
										Health Centre
									</a>
								</p>
								<p>
									<a href="http://iiti.ac.in/page/e-payments" target="_blank" rel="noreferrer">
										E-Payments
									</a>
								</p>
								<p>
									<a href="http://iiti.ac.in/page/counselling-cell" target="_blank" rel="noreferrer">
										Counselling Cell
									</a>
								</p>
							</div>
							<div>
								<p>
									<a href="http://cc.iiti.ac.in/" target="_blank" rel="noreferrer">
										Computer and IT Center
									</a>
								</p>
								<p>
									<a href="http://placement.iiti.ac.in" target="_blank" rel="noreferrer">
										Training and Placement
									</a>
								</p>
								<p>
									<a href="http://people.iiti.ac.in/~creche/" target="_blank" rel="noreferrer">
										Nursery School
									</a>
								</p>
								<p>
									<a href="http://vbs.iiti.ac.in/" target="_blank" rel="noreferrer">
										Transport Booking
									</a>
								</p>
								<p>
									<a
										href="https://www.iiti.ac.in/public/storage/Green%20vehicle%20schedule-%202021.pdf"
										target="_blank"
										rel="noreferrer"
									>
										Green vehicle schedule
									</a>
								</p>
							</div>
						</div>
					</div>

					<div>
						<p className="navHeading nh1">Research</p>
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
						<p className="navHeading nh1">Engage With Us</p>
						<div>
							<p>
								<Link onClick={hideNav} to="/contact">
									Contact
								</Link>
							</p>
							<p>
								<Link onClick={hideNav} to="/outreach/news">
									News & Events
								</Link>
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
