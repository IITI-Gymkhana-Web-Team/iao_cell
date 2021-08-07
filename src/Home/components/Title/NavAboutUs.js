import React from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export const NavAboutUs = () => {
	return (
		<div className="mainLink">
			<p className="mainLink-heading">
				About <FiChevronDown />
			</p>
			<div>
				<div>
					<p className="navHeading nh1">About</p>
					<div>
						<p>
							<Link to="/Aboutioa">About IAO</Link>
						</p>
						<p>
							<Link to="/Aboutiiti">About IITI</Link>
						</p>
						<p>
							<Link to="/LifeIITI">Campus Life @ IITI</Link>
						</p>
					</div>
				</div>
				<div>
					<p className="navHeading nh1">People</p>
					<div>
						<p>
							<Link to="/people/oia">International Affairs</Link>
						</p>
						<p>
							<Link to="/people/sc">SIA Cell</Link>
						</p>
						<p>
							<Link to="/committee/oc">Outreach Committee</Link>
						</p>
						<p>
							<Link to="/committee/mec">ISMAE Committee</Link>
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
								<Link to="/guestHouse">Guest House</Link>
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
				<div style={{ maxWidth: "200px" }}>
					<p className="navHeading nh1">Research</p>
					<div>
						<img src="https://picsum.photos/200/100" alt="" />
						<p>Consectetur fugiat laborum nulla anim minim non consectetur.</p>
						<p>
							<a href="http://rnd.iiti.ac.in/" target="_blank" rel="noreferrer">
								Read More
							</a>
						</p>
					</div>
				</div>
				<div>
					<p className="navHeading nh1">Engage With Us</p>
					<div>
						<p>
							<Link to="/contact">Contact</Link>
						</p>
						<p>
							<Link to="/outreach/news">News & Events</Link>
						</p>
					</div>
				</div>
				<div style={{ minWidth: "100%" }}>
					<p className="navHeading nh1 mb-3">Collaborations</p>
					<div className="d-flex flex-wrap" style={{ justifyContent: "space-between" }}>
						<div>
							<p className="navHeading nh2">MoUs</p>
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
								<p className="navHeading nh2">Faculty Visits</p>
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
								<p className="navHeading nh2">Student Visits</p>
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
								<p className="navHeading nh2">International Grants</p>
								<div>
									<p>
										<Link to="/grants">Bilateral International Grants</Link>
									</p>
								</div>
							</div>
						</div>
						<div>
							<p className="navHeading nh2">MHRD Schemes</p>
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
								<p className="navHeading nh2">Publications</p>
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
