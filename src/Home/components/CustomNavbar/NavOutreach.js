import React from "react";
import { Link } from "react-router-dom";

export const NavOutreach = ({ handleLinkClick }) => {
	const linkClick = () => {
		handleLinkClick(5);
	};

	return (
		<div className="mainLink">
			<div style={{ maxHeight: "80vh" }}>
				<div style={{ maxWidth: "300px" }}>
					<p className="navHeading nh1">Lecture Series</p>
					<div>
						<p>
							<Link onClick={linkClick} to="/Pros/visitors_experience">
								Nobel Laureate Lectures
							</Link>
						</p>
						<p>
							<Link onClick={linkClick} to="/Pros/places">
								Frontiers in Physics
							</Link>
						</p>
						<p>
							<Link onClick={linkClick} to="/int/students">
								Hardy Ramanujan Lecture Series
							</Link>
						</p>
						<div>
							<p className="navHeading nh2 mt-3">Public Lectures</p>
							<div>
								<p>
									<Link onClick={linkClick} to="/Pros/visitors_experience">
										Automotive Light-weighting Technologies
									</Link>
								</p>
								<p>
									<Link onClick={linkClick} to="/Pros/places">
										Prosperity Through Science Technology
									</Link>
								</p>
								<p>
									<Link onClick={linkClick} to="/int/students">
										Role of Science in Nation Building during Global Health Crisis
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<p className="navHeading nh1">Conferences and Seminars</p>
					<div>
						<p>
							<a href="http://rnd.iiti.ac.in/" target="_blank" rel="noreferrer">
								Chemistry Talks
							</a>
						</p>
						<p>
							<a href="https://academic.iiti.ac.in/" target="_blank" rel="noreferrer">
								Nobel Prizes-2020
							</a>
						</p>
					</div>
				</div>
				<div>
					<p className="navHeading nh1">National Science Day</p>
				</div>
				<div>
					<p className="navHeading nh1">Visits of School Kids</p>
				</div>
				<div>
					<p className="navHeading nh1">Engagement with Engineering Colleges</p>
				</div>
			</div>
		</div>
	);
};
