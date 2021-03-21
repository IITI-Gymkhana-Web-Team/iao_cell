import React, { useState } from "react";
import { MHRDPage } from "./MHRDPage";
import { kapil, asem2 } from "../../../assets";

export const Asem = () => {
	const [info] = useState([
		{
			Year: "2020",
			Domain: "N/A",
			Title: "Cutting Edge Research Problems in the area of Network and Cyber Security",
			Ip: "Dr. Neminath Hubballi",
			Fp: "Prof. Muttukrishnan Rajarajan",
			Fu: "City University of London",
			Country: "UK",
		},
		{
			Year: "2020",
			Domain: "N/A",
			Title:
				"Nanotechnology, Sensor Technology, Electronics Engineering and Semiconductor Physics",
			Ip: "Dr. Shaibal Mukherjee",
			Fp: "Prof. Omer Nour",
			Fu: "Linkoping University",
			Country: "Sweden",
		},
		{
			Year: "2020",
			Domain: "N/A",
			Title: "Important of Dual ion Batteries for Future Energy Applications",
			Ip: "Dr. Biswarup Pathak",
			Fp: "Prof. Rajeev Ahuja",
			Fu: "Uppsala University",
			Country: "Sweden",
		},
		{
			Year: "2020",
			Domain: "N/A",
			Title:
				"Unveiling the Cosmic Dawn: Novel Techniques to Study the Reionization of the Early Universe",
			Ip: "Dr. Suman Majumdar",
			Fp: "Prof. Garrelt Mellema",
			Fu: "Stockholm University",
			Country: "Sweden",
		},
		{
			Year: "2020",
			Domain: "N/A",
			Title: "Photo-active Mesoporous ABO3 Compounds",
			Ip: "Dr. Rupesh Shivaji Devan",
			Fp: "Prof. Nelson Dzade",
			Fu: "Cardiff University",
			Country: "UK",
		},
		{
			Year: "2020",
			Domain: "N/A",
			Title:
				"A Digital Narratology of Technology as Literary Actors and Artefacts of Setting in Indian English Novels",
			Ip: "Ms. Shanmugapriya T (under Dr. Nirmala Menon)",
			Fp: "Ms. Rianna Price (under Dr. Sutton Deborah)",
			Fu: "Lancaster University",
			Country: "UK",
		},
	]);

	const [person] = useState({
		img: kapil,
		name: "Dr. Kapil Ahuja",
		designation: "Associate Professor, CSE",
		email: "doia@iiti.ac.in",
	});

	const [insti] = useState({
		img: asem2,
		title: "Application Link",
		link: "http://www.asemduo.org/02_programs/programs_09.php",
	});

	const [name] = useState("ASEM-DUO");

	return <MHRDPage info={info} name={name} insti={insti} person={person} />;
};
