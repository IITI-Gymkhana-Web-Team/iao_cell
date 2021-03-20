import React, { useState } from "react";
import "./AboutUs.css";
import { FaRegBuilding, FaStreetView } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

export const AboutUs = () => {
	const [zoom1, setZoom1] = useState(false);
	const [zoom2, setZoom2] = useState(false);
	const [zoom3, setZoom3] = useState(false);

	return (
		<div className="container-fluid mt-5 aboutUs">
			<div className="container-fluid pt-5 aboutCards">
				<div className="aboutCard pb-5">
					<div
						className="abtIcon"
						onMouseEnter={() => setZoom1(true)}
						onMouseLeave={() => setZoom1(false)}
					>
						<FaRegBuilding
							className={"aboutCardIcon " + (zoom1 ? "iczin" : "iczout")}
						/>
					</div>
					<h3 className="font-acme mt-4">About IITI</h3>
					<div className="aboutUnderline"></div>
					<p className="font-ubuntu mt-3">
						Cupidatat ea nulla Lorem consectetur laboris adipisicing occaecat qui
						adipisicing. Anim anim quis ullamco irure proident nisi cupidatat anim
						labore nisi. Occaecat officia ea reprehenderit aliqua deserunt veniam sint
						magna qui fugiat minim mollit commodo.
					</p>
				</div>
				<div className="aboutCard pb-5">
					<div
						className="abtIcon"
						onMouseEnter={() => setZoom2(true)}
						onMouseLeave={() => setZoom2(false)}
					>
						<HiUserGroup className={"aboutCardIcon " + (zoom2 ? "iczin" : "iczout")} />
					</div>
					<h3 className="font-acme mt-4">About IOA</h3>
					<div className="aboutUnderline"></div>
					<p className="font-ubuntu mt-3">
						Cupidatat ea nulla Lorem consectetur laboris adipisicing occaecat qui
						adipisicing. Anim anim quis ullamco irure proident nisi cupidatat anim
						labore nisi. Occaecat officia ea reprehenderit aliqua deserunt veniam sint
						magna qui fugiat minim mollit commodo.
					</p>
				</div>
				<div className="aboutCard pb-5">
					<div
						className="abtIcon"
						onMouseEnter={() => setZoom3(true)}
						onMouseLeave={() => setZoom3(false)}
					>
						<FaStreetView className={"aboutCardIcon " + (zoom3 ? "iczin" : "iczout")} />
					</div>
					<h3 className="font-acme mt-4">Life @ IITI</h3>
					<div className="aboutUnderline"></div>
					<p className="font-ubuntu mt-3">
						Cupidatat ea nulla Lorem consectetur laboris adipisicing occaecat qui
						adipisicing. Anim anim quis ullamco irure proident nisi cupidatat anim
						labore nisi. Occaecat officia ea reprehenderit aliqua deserunt veniam sint
						magna qui fugiat minim mollit commodo.
					</p>
				</div>
			</div>
		</div>
	);
};
