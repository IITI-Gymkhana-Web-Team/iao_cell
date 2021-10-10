import React from "react";
import { Link } from "react-router-dom";

export const NavOutreach = ({ handleLinkClick }) => {
	const linkClick = () => {
		handleLinkClick(5);
	};

	return (
		<div className="mainLink">
			<div style={{ maxHeight: "300px", maxWidth: "70vw" }}>
				<div style={{ maxWidth: "300px" }}>
					<p className="navHeading nh1">Lecture Series</p>
					<div>
						<p>
							<Link onClick={linkClick} to="/outreach/nobel">
								Nobel Laureate Lectures
							</Link>
						</p>
						<p>
							<Link onClick={linkClick} to="/outreach/events/frontiers">
								Frontiers in Physics
							</Link>
						</p>
						<p>
							<Link onClick={linkClick} to="/outreach/events/bruce-berndt">
								Hardy Ramanujan Lecture Series
							</Link>
						</p>
					</div>
				</div>
				<div>
					<p className="navHeading nh1">Public Lectures</p>
					<div>
						<p>
							<Link onClick={linkClick} to="/outreach/events/automotive">
								Automotive Light-weighting Technologies
							</Link>
						</p>
						<p>
							<Link onClick={linkClick} to="/outreach/events/prosperity">
								Prosperity Through Science Technology
							</Link>
						</p>
						<p>
							<Link onClick={linkClick} to="/outreach/events/health">
								Role of Science in Nation Building during Global Health Crisis
							</Link>
						</p>
					</div>
				</div>
				<div>
					<p className="navHeading nh1">Conferences and Seminars</p>
					<div>
						<p>
							<Link onClick={linkClick} to="/chemtalks">
								Chemistry Talks
							</Link>
						</p>
						<p>
							<Link to="/outreach/events/nobelPrizes" onClick={linkClick}>
								Nobel Prizes-2020
							</Link>
						</p>
					</div>
				</div>
				<div>
					<p className="navHeading nh1">Events & Activities</p>
					<div>
						<p>
							<Link onClick={linkClick} to="/outreach/nsd">
								National Science Day
							</Link>
						</p>
					</div>
				</div>
				{/*<div>
					<p className="navHeading nh1">Visits of School Kids</p>
				</div>
				<div>
					<p className="navHeading nh1">Engagement with Engineering Colleges</p>
				</div>*/}
			</div>
		</div>
	);
};
