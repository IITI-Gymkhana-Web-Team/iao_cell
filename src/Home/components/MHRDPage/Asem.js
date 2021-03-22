import React, { useState } from "react";
import { MHRDPage } from "./MHRDPage";
import { kapil, asem2 } from "../../../assets";

export const Asem = () => {
	const [info] = useState([
		{
			Year: "2020",
			Title: "Cutting Edge Research Problems in the area of Network and Cyber Security",
			Ip: "Dr. Neminath Hubballi",
			Fp: "Prof. Muttukrishnan Rajarajan",
			Fu: "City University of London",
			Country: "UK",
		},
		{
			Year: "2020",
			Title:
				"Nanotechnology, Sensor Technology, Electronics Engineering and Semiconductor Physics",
			Ip: "Dr. Shaibal Mukherjee",
			Fp: "Prof. Omer Nour",
			Fu: "Linkoping University",
			Country: "Sweden",
		},
		{
			Year: "2020",
			Title: "Important of Dual ion Batteries for Future Energy Applications",
			Ip: "Dr. Biswarup Pathak",
			Fp: "Prof. Rajeev Ahuja",
			Fu: "Uppsala University",
			Country: "Sweden",
		},
		{
			Year: "2020",
			Title:
				"Unveiling the Cosmic Dawn: Novel Techniques to Study the Reionization of the Early Universe",
			Ip: "Dr. Suman Majumdar",
			Fp: "Prof. Garrelt Mellema",
			Fu: "Stockholm University",
			Country: "Sweden",
		},
		{
			Year: "2020",
			Title: "Photo-active Mesoporous ABO3 Compounds",
			Ip: "Dr. Rupesh Shivaji Devan",
			Fp: "Prof. Nelson Dzade",
			Fu: "Cardiff University",
			Country: "UK",
		},
		{
			Year: "2020",
			Title:
				"A Digital Narratology of Technology as Literary Actors and Artefacts of Setting in Indian English Novels",
			Ip: "Ms. Shanmugapriya T (under Dr. Nirmala Menon)",
			Fp: "Ms. Rianna Price (under Dr. Sutton Deborah)",
			Fu: "Lancaster University",
			Country: "UK",
		},
	]);

	const [desc] = useState(
		"Dolor consectetur magna esse amet laborum commodo mollit quis irure. Laboris velit excepteur in veniam in ex. Dolore aliqua esse Lorem sint.Dolor consectetur magna esse amet laborum commodo mollit quis irure. Laboris velit excepteur in veniam in ex. Dolore aliqua esse Lorem sint.Deserunt eiusmod proident incididunt dolore ullamco aliquip nulla. Nulla aliquip officia commodo do qui. Excepteur aliquip quis cupidatat culpa aute consequat eu exercitation. Do voluptate velit excepteur elit nostrud. Culpa ad excepteur Lorem quis consectetur ut nulla sunt consectetur ea in adipisicing. Consequat eiusmod aliqua officia esse ullamco aliquip deserunt."
	);

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

	return <MHRDPage info={info} desc={desc} name={name} insti={insti} person={person} />;
};
