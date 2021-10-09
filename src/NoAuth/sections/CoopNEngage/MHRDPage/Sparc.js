import React, { useState } from "react";
import { MHRDPage } from "./MHRDPage";
import { kapil, iitkgp } from "../../../../assets";

export const Sparc = () => {
	const [info] = useState([
		{
			Year: "2018-19",
			Domain: "Technologies for Rural and Women Empowerment",
			Title: "6G Connectivity for Sustainable Development Targeted at Rural and Remote Communities",
			Ip: "Prof. Vimal Bhatia",
			Fp: "Prof. Sudhir Sharan Dixit",
			Fu: "University of Oulu",
			Country: "Finland",
		},
		{
			Year: "2018-19",
			Domain: "Future of Earth: Green and Renewable Technologies",
			Title: "Structured Illumination for Turbid and Turbulent Environments (SITTE)",
			Ip: "Dr. Devendra Laxmanrao Deshmukh",
			Fp: "Dr. Yogeshwar Nath Mishra",
			Fu: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
			Country: "Germany",
		},
		{
			Year: "2018-19",
			Domain: "Science & Heritage",
			Title: "Safeguarding Heritage Structures using Seismic Metamaterials",
			Ip: "Prof. Sandeep Chaudhary",
			Fp: "Dr. Sebastien Guenneau",
			Fu: "Université Aix-marseille",
			Country: "France",
		},
		{
			Year: "2018-19",
			Domain: "Advanced Functional and Meta Materials",
			Title: "Atomistic Modelling of Pt-Nanocluster Based Electrocatalysts for Fuel Cell Applications",
			Ip: "Dr. Biswarup Pathak",
			Fp: "Prof. Rajeev Ahuja",
			Fu: "Uppsala University",
			Country: "Sweden",
		},
		{
			Year: "2018-19",
			Domain: "Advanced Sensors, Electronics and Communication",
			Title: "Edge Caching for High Capacity Wireless Networks exploiting Big Data Analytics and Machine Learning",
			Ip: "Prof. Vimal Bhatia",
			Fp: "Prof. Tharmalingam Ratnarajah",
			Fu: "University of Edinburgh",
			Country: "United Kingdom",
		},
		{
			Year: "2018-19",
			Domain: "Advanced Sensors, Electronics and Communication",
			Title: "Pilot Survey of CMB Polarized Foregrounds using a Single Dish",
			Ip: "Dr. Abhirup Datta",
			Fp: "Prof. Lucio Piccirillo",
			Fu: "The University of Manchester",
			Country: "United Kingdom",
		},
		{
			Year: "2018-19",
			Domain: "Digital Humanities",
			Title: "A Digital Narratology of Technology as Literary Actors and Artefacts of Settings in Indian English Novels",
			Ip: "Dr. Nirmala Menon",
			Fp: "Prof. Deborah Sutton",
			Fu: "Lancaster University",
			Country: "United Kingdom",
		},
		{
			Year: "2018-19",
			Domain: "Basic Sciences - Physical Sc., Chemical Sc., Biological Sc.",
			Title: "Imaging the First Billion Years of the Universe with Next-Generation Telescopes",
			Ip: "Dr. Suman Majumdar",
			Fp: "Prof. Garrelt Mellema",
			Fu: "Stockholm University",
			Country: "Sweden",
		},
		{
			Year: "2018-19",
			Domain: "Technologies for Forensics, Security and Safety",
			Title: "Digital Forensic Knowledge Integration and Intelligence (DIREKT-Intel)",
			Ip: "Dr. Neminath Hubballi",
			Fp: "Prof. Katrin Franke",
			Fu: "Norwegian University of Science and Technology",
			Country: "Norway",
		},
	]);

	const [person] = useState({
		img: kapil,
		name: "Dr. Kapil Ahuja",
		designation: "Associate Professor, CSE",
		email: "doia@iiti.ac.in",
	});

	const [insti] = useState({
		img: iitkgp,
		name: "Indian Institute of Technology Kharagpur",
		link: "https://sparc.iitkgp.ac.in",
	});

	const [name] = useState("SPARC");

	const [desc] = useState(
		"Scheme for Promotion of Academic and Research Collaboration (SPARC) aims at improving the research ecosystem  of India’s Higher Educational Institutions by facilitating academic and research collaborations between Indian   Institutions  and the best institutions in the world from 28 selected nations to jointly solve problems of national  and/or international relevance."
	);

	const [grants] = useState([
		{
			"Name of the Faculty": "Dr. Biswarup Pathak",
			Department: "Chemistry",
			"Funding Agency": "Scheme for Promotion of Academic and\r\nResearch Collaboration (SPARC)",
			"Title of the Grant":
				"Atomistic Modelling of Pt-Nanocluster Based Electrocatalysts for Fuel Cell\r\nApplications",
			"Foreign Collaborator(s)": "Prof. Rajeev Ahuja (UPPSALA UNIVERSITY)",
			Amount: "Rs. 74,94,338",
			"Year of Award - Year of Completion": "2018",
		},
		{
			"Name of the Faculty": "Dr. Nirmala Menon",
			Department: "School of HSS",
			"Funding Agency": "SPARC",
			"Foreign Collaborator(s)": "Prof. Deborah Sutton",
			Amount: "55 Lacs",
		},
		{
			"Name of the Faculty": "Dr. Nirmala Menon",
			Department: "School of HSS",
			"Funding Agency": "SPARC",
			"Foreign Collaborator(s)": "Prof. Francois Pieter",
			Amount: "Result Awaited",
		},
	]);

	return <MHRDPage info={info} name={name} desc={desc} insti={insti} person={person} grants={grants} />;
};
