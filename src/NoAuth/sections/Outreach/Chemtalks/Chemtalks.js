import React from "react";
import "./Chemtalks.css";
import { chemtalks, dipak, sanjay, tridib, chelvam } from "../../../../assets";
import { data } from "./data";
import { SpeakerCards } from "./SpeakerCards";

export const ChemTalks = () => {
	return (
		<div className="container font-ubuntu aboutIITI pb-5 chemtalks">
			<div className="headrow row mb-5">
				<div className="headimg col-xl-6 col-md-12 col-sm-12">
					<img src={chemtalks} alt="" />
				</div>
				<div className="headtext col-xl-6 col-md-12 col-sm-12">
					<h3 className="font-acme">Chemistry Talks</h3>
					<h5 className="font-ubuntu">Feb 1, 2021 - Feb 28, 2021</h5>
					<p className="font-ubuntu">
						Chemistry Talks aim to provide a platform for eminent chemists from all over the world to share
						and discuss wider aspects of the domain of chemical sciences and allied areas.
					</p>
					<p>
						<a href="https://sites.google.com/iiti.ac.in/chemistrytalks" rel="noreferrer" target="_blank">
							Know More
						</a>
					</p>
				</div>
			</div>
			<div className="speakers mt-4">
				<h2 className="font-acme">Speakers</h2>
				{data.map((person) => {
					return <SpeakerCards person={person} />;
				})}
			</div>
			<div className="organisers mt-5">
				<h2 className="font-acme mb-3">Organizers</h2>
				<h5 className="font-ubuntu">Chemistry Outreach Committee</h5>
				<h5 className="font-ubuntu mb-4">Department of Chemistry, IIT Indore</h5>
				<div className="card-deck">
					<div className="card">
						<img
							className="card-img-top"
							src={dipak}
							alt=""
							style={{ maxWidth: "90%", margin: "0 auto 10px auto" }}
						></img>
						<div className="card-body">
							<h5 className="font-acme card-title">Dr. Dipak K. Roy</h5>
						</div>
					</div>
					<div className="card">
						<img
							className="card-img-top"
							src={sanjay}
							alt=""
							style={{ maxWidth: "90%", margin: "0 auto 10px auto" }}
						></img>
						<div className="card-body">
							<h5 className="font-acme card-title">Dr. Sanjay K. Singh</h5>
						</div>
					</div>
					<div className="card">
						<img
							className="card-img-top"
							src={tridib}
							alt=""
							style={{ maxWidth: "90%", margin: "0 auto 10px auto" }}
						></img>
						<div className="card-body">
							<h5 className="font-acme card-title">Dr. Tridib K. Sarma</h5>
						</div>
					</div>
					<div className="card">
						<img
							className="card-img-top"
							src={chelvam}
							alt=""
							style={{ maxWidth: "90%", margin: "0 auto 10px auto" }}
						></img>
						<div className="card-body">
							<h5 className="font-acme card-title">Dr. C. Venkatesh</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
