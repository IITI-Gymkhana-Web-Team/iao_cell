import React, { useState } from "react";
import "./AboutUs.css";
import { FaRegBuilding, FaStreetView } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";

export const AboutUs = () => {
	const [zoom1, setZoom1] = useState(false);
	const [zoom2, setZoom2] = useState(false);
	const [zoom3, setZoom3] = useState(false);

	return (
		<div className="container-fluid aboutUs">
			<div className="container-fluid pt-5 aboutCards">
				<div
					className="aboutCard pb-5"
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
							IIT Indore is an institute of national importance established by the
							Govt. of India in 2009. Apart from promoting the the culture of
							excellence and hard work, it maintains a high national rank among the
							institutions of higher education and is now among the top 10 engineering
							institutes in the country.
						</p>
					</Link>
				</div>
				<div
					className="aboutCard pb-5"
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
							Cupidatat ea nulla Lorem consectetur laboris adipisicing occaecat qui
							adipisicing. Anim anim quis ullamco irure proident nisi cupidatat anim
							labore nisi. Occaecat officia ea reprehenderit aliqua deserunt veniam
							sint magna qui fugiat minim mollit commodo.
						</p>
					</Link>
				</div>
				<div
					className="aboutCard pb-5"
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
							IITI Campus is equipped with accommodation facilities and amenities of
							international standards with 5 Hall of residence to accommodate students
							inside the campus in the middle of the nature with greeneries around and
							arrangement of safety and security of the resident.
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};
