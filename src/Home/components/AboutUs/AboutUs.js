import React, { useState } from "react";
import "./AboutUs.css";
import { FaRegBuilding, FaStreetView } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

export const AboutUs = () => {
	const [zoom1, setZoom1] = useState(false);
	const [zoom2, setZoom2] = useState(false);
	const [zoom3, setZoom3] = useState(false);

	return (
		<div className="container-fluid aboutUs mb-5">
			<div className="container-fluid pt-5 pb-3 aboutCards">
				<ScrollAnimation animateIn="slideInLeft" className="mb-5" animateOnce="true">
					<div
						className="aboutCard"
						onMouseEnter={() => setZoom1(true)}
						onMouseLeave={() => setZoom1(false)}
					>
						<Link to="/Aboutiiti" style={{ color: "black" }}>
							<div className="abtIcon">
								<FaRegBuilding
									className={"aboutCardIcon " + (zoom1 ? "iczin" : "iczout")}
								/>
							</div>
							<h3 className="font-acme mt-4">About IITI</h3>

							<div className="aboutUnderline"></div>
							<p className="font-ubuntu mt-3">
								IIT Indore, established by the Govt. of India in 2009, promotes the
								the culture of excellence and hard work. It maintains a high
								national rank among the institutions of higher education and is now
								among the top 10 engineering institutes in the country.
							</p>
						</Link>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="slideInLeft" className="mb-5" animateOnce="true">
					<div
						className="aboutCard"
						onMouseEnter={() => setZoom2(true)}
						onMouseLeave={() => setZoom2(false)}
					>
						<Link to="/Aboutioa" style={{ color: "black" }}>
							<div className="abtIcon">
								<HiUserGroup
									className={"aboutCardIcon " + (zoom2 ? "iczin" : "iczout")}
								/>
							</div>
							<h3 className="font-acme mt-4">About Us</h3>
							<div className="aboutUnderline"></div>
							<p className="font-ubuntu mt-3">
								IIT Indore is rapidly expanding globally with an aim to
								internationalize its teaching and research portfolio. Currently, we
								are collaborating intensely with counties across North America,
								Europe, Asia, and Oceania.
							</p>
						</Link>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="slideInLeft" className="mb-5" animateOnce="true">
					<div
						className="aboutCard"
						onMouseEnter={() => setZoom3(true)}
						onMouseLeave={() => setZoom3(false)}
					>
						<Link to="/LifeIITI" style={{ color: "black" }}>
							<div className="abtIcon">
								<FaStreetView
									className={"aboutCardIcon " + (zoom3 ? "iczin" : "iczout")}
								/>
							</div>
							<h3 className="font-acme mt-4">Life @ IITI</h3>
							<div className="aboutUnderline"></div>
							<p className="font-ubuntu mt-3">
								IITI Campus is equipped with accommodation facilities and amenities
								of international standards with 5 Hall of residence to accommodate
								students inside the campus in the middle of the nature with
								greeneries around and arrangement of safety and security of the
								resident.
							</p>
						</Link>
					</div>
				</ScrollAnimation>
			</div>
		</div>
	);
};
