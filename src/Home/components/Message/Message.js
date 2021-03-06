import React from "react";
import { neelesh } from "../../../assets";
import avinash from "../../../assets/av2.jpg";
import "./Message.css";

export default function Message() {
	return (
		<>
			<div className="container bg-light mt-3 messageBox" style={{ borderRadius: "10px" }}>
				<div className="container-fluid p-3">
					<div className="card bg-light col-sm-12 border-0">
						<img src={neelesh} className="img-thumbnail" alt="img-responsive" style={{ width: "min(70vw,300px)", margin: "auto" }} />
						<div className="card-body" style={{ textAlign: "center", fontSize: "17px",color:"black"  }}>
							<div className="mainDesc font-ubuntu">
								<i>
									"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
									dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
									book. Some more lorem Ipsum is simply."
								</i>
								<br />
								<br />
								<div className="font-acme messageBy">Prof. Neelesh Kumar Jain - Director, IIT Indore</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container bg-light mt-5 mb-5 messageBox" style={{ borderRadius: "10px" }}>
				<div className="container-fluid p-3">
					<div className="card bg-light col-sm-12 border-0">
						<img src={avinash} className="img-thumbnail" alt="img-responsive" style={{ width: "min(70vw,300px)", margin: "auto" }} />
						<div className="card-body" style={{ textAlign: "center", fontSize: "17px",color:"black" }}>
							<div className="mainDesc">
								<i>
									"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
									dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
									book. Some more lorem Ipsum is simply."
								</i>
								<br />
								<br />
								<div className="font-acme messageBy">Dr. Avinash Sonawane - Dean, IOA IIT Indore</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
