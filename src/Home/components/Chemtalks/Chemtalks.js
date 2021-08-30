import React from "react";
import "./Chemtalks.css";
import { chemtalks, dipak, sanjay, tridib, chelvam } from "../../../assets";
// import { Link } from "react-router-dom";
import { data } from "./data";
import { SpeakerCards } from "./SpeakerCards";

export const ChemTalks = () => {
	return (
		<div className="container font-ubuntu aboutIITI pb-5">
			<div className="headrow row mb-5">
				<div className="headimg col-xl-6 col-md-12 col-sm-12">
					<img src={chemtalks} alt="" />
				</div>
				<div className="headtext col-xl-6 col-md-12 col-sm-12">
					<h1>
						<b>Chemistry Talks</b>
					</h1>
					<h3>Feb 1 2021 - Feb 28 2021</h3>
					<h4>
						Chemistry Talks aim to provide a platform for eminent chemists from all over the world to share
						and discuss wider aspects of the domain of chemical sciences and allied areas.
					</h4>
					<p>
						<a href="https://sites.google.com/iiti.ac.in/chemistrytalks">Visit site</a>
					</p>
				</div>
			</div>
			<div className="speakers mt-4">
				<h1>
					{" "}
					<b>Speakers</b>{" "}
				</h1>
				{data.map((person) => {
					return <SpeakerCards person={person} />;
				})}
			</div>
			<div className="organisers mt-5">
				<h1>
					{" "}
					<b>Organisers</b>{" "}
				</h1>
				<br></br>
				<h5>
					{" "}
					<b>Chemistry Outreach Committee</b>{" "}
				</h5>
				<h5>
					{" "}
					<b>Department of Chemistry, IIT Indore</b>{" "}
				</h5>
				<div className="card-deck">
					<div className="card">
						<img className="card-img-top" src={dipak} alt=""></img>
						<div className="card-body">
							<h5 className="card-title">
								<b>Dr. Dipak K. Roy</b>
							</h5>
						</div>
					</div>
					<div className="card">
						<img className="card-img-top" src={sanjay} alt=""></img>
						<div className="card-body">
							<h5 className="card-title">
								<b>Dr. Sanjay K. Singh</b>
							</h5>
						</div>
					</div>
					<div className="card">
						<img className="card-img-top" src={tridib} alt=""></img>
						<div className="card-body">
							<h5 className="card-title">
								<b>Dr. Tridib K. Sarma</b>
							</h5>
						</div>
					</div>
					<div className="card">
						<img className="card-img-top" src={chelvam} alt=""></img>
						<div className="card-body">
							<h5 className="card-title">
								<b>Dr. C. Venkatesh</b>
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
