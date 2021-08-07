import React from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export const NavOutbound = () => {
	return (
		<div className="mainLink">
			<p className="mainLink-heading">
				Outbound <FiChevronDown />
			</p>
			<div style={{ justifyContent: "space-between" }}>
				<div style={{ width: "70%" }}>
					<p className="navHeading nh1 mb-3">Students</p>
					<div className="d-flex flex-wrap" style={{ justifyContent: "space-between" }}>
						<div className="mb-3">
							<p className="navHeading nh2">UK Scholarships</p>
							<div>
								<p>
									<a href="">British Council India</a>
								</p>
								<p>
									<a href="">UKRI India</a>
								</p>
								<p>
									<a href="">Charles Wallace India Trust</a>
								</p>
								<p>
									<a href="">Commonwealth Scholarships</a>
								</p>
								<p>
									<a href="">GREAT Scholarships India</a>
								</p>
								<p>
									<a href="">Newton Bhabha Fund</a>
								</p>
							</div>
						</div>
						<div className="mb-3">
							<p className="navHeading nh2">German Scholarships</p>
							<div>
								<p>
									<a href="">Alexander von Humboldt Foundation</a>
								</p>
								<p>
									<a href="">DAAD</a>
								</p>
								<p>
									<a href="">Indo-German Science & Technology Center</a>
								</p>
								<p>
									<a href="">German Language</a>
								</p>
								<p>
									<a href="">Indo-German Training Centre</a>
								</p>
							</div>
						</div>
						<div className="mb-3">
							<p className="navHeading nh2">French Scholarships</p>
							<div>
								<p>
									<a href="">Raman-Charpak Fellowship</a>
								</p>
								<p>
									<a href="">CEFIPRA-ESONN Fellowship</a>
								</p>
								<p>
									<a href="">ENS Internship program</a>
								</p>
							</div>
						</div>
						<div className="mb-3">
							<p className="navHeading nh2">Canadian Scholarships</p>
							<div>
								<p>
									<a href="">Indo-Shastri Canadian Institute</a>
								</p>
								<p>
									<a href="">Indo-Canada Education Council</a>
								</p>
								<p>
									<a href="">MITACS</a>
								</p>
							</div>
						</div>
						<div className="mb-3">
							<p className="navHeading nh2">Japanese Scholarships</p>
							<div>
								<p>
									<a href="">JSPS</a>
								</p>
								<p>
									<a href="">MEXT Scholarship</a>
								</p>
							</div>
						</div>
						<div className="mb-3">
							<p className="navHeading nh2">Other Scholarships</p>
							<div>
								<p>
									<a href="">USA</a>
								</p>
								<p>
									<a href="">Asean</a>
								</p>
								<p>
									<a href="">China</a>
								</p>
								<p>
									<a href="">Taiwan</a>
								</p>
								<p>
									<a href="">Spain</a>
								</p>
								<p>
									<a href="">Austria</a>
								</p>
								<p>
									<a href="">New Zealand</a>
								</p>
								<p>
									<a href="">Thailand</a>
								</p>
							</div>
						</div>
						<div className="mb-3">
							<p className="navHeading nh2">Other Links</p>
							<div>
								<p>
									<Link to="">Internships</Link>
								</p>
								<p>
									<Link to="">PG / PhD / Post Doc</Link>
								</p>
								<p>
									<a href="">ISG</a>
								</p>
								<p>
									<a href="">British Council India</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div style={{ maxWidth: "30%" }}>
					<p className="navHeading nh1 mb-3">Faculties</p>
					<div
						className="d-flex flex-wrap"
						style={{ justifyContent: "space-between", flexDirection: "column" }}
					>
						<div>
							<p className="navHeading nh2">Indo - Germany</p>
							<div>
								<p>
									<a href="">Alexander von Humboldt Foundation</a>
								</p>
								<p>
									<a href="">DAAD</a>
								</p>
								<p>
									<a href="">Indo-German Science & Technology Center</a>
								</p>
							</div>
						</div>
						<div>
							<p className="navHeading nh2 mt-3">Others</p>
							<div>
								<p>
									<a href="">Indo - French</a>
								</p>
								<p>
									<a href="">Indo - Japan</a>
								</p>
								<p>
									<a href="">Indo - USA</a>
								</p>
								<p>
									<a href="">Indo - UK</a>
								</p>
								<p>
									<a href="">Indo - Asean</a>
								</p>
								<p>
									<a href="">Indo - Canada</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
