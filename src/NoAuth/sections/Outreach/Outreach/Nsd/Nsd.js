import React from "react";
import { nsd1, nsd2, nsd3, nsd4 } from "../../../../../assets";
import "./Nsd.css";
import { Link } from "react-router-dom";

export const Nsd = () => {
	return (
		<div className="container font-ubuntu aboutIITI pb-5">
			<h1 className="mainTitle text-center m-3">National Science Day</h1>
			<img alt="about IITI" src={nsd1} style={{ width: "100%", margin: "10px 0" }} />
			<p>
				Indian Institute of Technology Indore organized a special half-day program today on National Science Day
				(Feb. 28, 2021) in virtual mode to cultivate interest in young school students towards pursuing a career
				in science. As this program was in virtual mode, many schools from Indore and Madhya Pradesh
				participated the event. The event includes a talk on Optics by the renowned physicist Prof. Anurag
				Sharma, SSB Awardee, demonstrations of daily life physics experiments, chemical illusion, mathematical
				models, biology talk, journey through cosmos. The event was inaugurated by the chief guest, Prof.
				Neelesh Kumar Jain, Director, IIT Indore in the presence of the guest of honour Prof. Avinash Sonawane,
				Dean, International Affairs and Outreach, IIT Indore, where they encouraged the students to take up
				careers in science and technology and evaluated various options available to the students.
			</p>
			<img
				alt="about IITI"
				src={nsd2}
				style={{
					float: "left",
					maxWidth: "max(350px,40%)",
					marginRight: "10px",
				}}
			/>
			<p>
				The technical session was started with a talk by renowned physicist Prof. Anurag Sharma on Optics Around
				us where he shed light on his experiences which stir many young minds. This was followed by a brilliant
				session with Dr. Rajesh Kumar, who demonstrated the “physics of daily life” with attractive models.
			</p>
			<p>
				Under the supervision of Dr. Sanjay Kumar Singh and Dr. Dipak Kumar Roy, students performed experiments
				on chemical illusion where chemistry was demonstrated to school students in a simplified, fun and
				hands-on way.
			</p>
			<p>
				Dr. Manoneeta and her students from the Astronomy and Astrophysics department delivered a talk on
				Journey through Cosmos where they showed what happens when a star dies and explodes and what happens
				when we play with the solar system and its gravity.
			</p>
			<div className="d-flex flex-wrap" style={{ justifyContent: "space-between" }}>
				<img
					alt="about IITI"
					src={nsd3}
					style={{
						maxWidth: "max(350px,48%)",
					}}
				/>
				<img
					alt="about IITI"
					src={nsd4}
					style={{
						maxWidth: "max(350px,48%)",
					}}
				/>
			</div>
			<p>
				Dr. Ashisha Kumar and Dr. Bibekananda along with the students from the Mathematics Department talked
				about basic Mathematical Concepts using Real Mathematical Models.
			</p>
			<p>
				From Biosciences and Biomedical Engineering department, Dr. Abhijit Joshi and his team have demonstrated
				how heart works, what will be the behaviour of a healthy lungs and how to detect pesticide in water will
				definitely teach us wiser towards our health and environment.
			</p>
			<p>The National Science Day program was supported by the Rajya Shiksha Kendra, M.P. Govt., Bhopal.</p>
			<h4 className="mainTitle mt-4">Glipmses of National Science Day programs </h4>
			<p style={{ marginBottom: 2 }}>NSD 2021 </p>
			<p style={{ marginBottom: 2 }}>NSD 2020 </p>
			<p>NSD 2019</p>
			<p className="mt-4">
				For participation at the National Science day, please contact the{" "}
				<Link to="/contact">Office of International Affairs and Outreach, IIT Indore</Link>.
			</p>
		</div>
	);
};
