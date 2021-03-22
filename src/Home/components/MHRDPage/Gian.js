import React, { useState } from "react";
import { MHRDPage } from "./MHRDPage";
import { sahu, iitkgp } from "../../../assets";

export const Gian = () => {
	const [info] = useState([
		{
			Year: "2020",
			Domain: "N/A",
			Title:
				"Two Phase Flows in a Micro and Milli Channels: Theoretical Backgrounds and Numerical Proofs",
			Ip: "Dr. Ritunesh Kumar",
			Fp: "Dr. Abive Rufat",
			Fu: "St. Petersburg State Institute of Technology",
			Country: "Russia",
		},
		{
			Year: "2020",
			Domain: "N/A",
			Title: "Use of Hydrogen as a Future Fuel",
			Ip: "Dr. Shanmugam Dhinakaran",
			Fp: "Dr. Weeratunge Malalasekera",
			Fu: "Loughborough University",
			Country: "UK",
		},
		{
			Year: "2020",
			Domain: "N/A",
			Title:
				"Principles of Ligand - Targeted Drug Delivery: Design and Development of Smart Drugs",
			Ip: "Dr. Venkatesh Chelvam",
			Fp: "Dr. Shrinivasarao Madduri",
			Fu: "Purdue University",
			Country: "USA",
		},
	]);

	const [person] = useState({
		img: sahu,
		name: "Dr. Santosh K. Sahu",
		designation: "Associate Professor, ME",
		email: "gian_iiti@iiti.ac.in",
	});

	const [insti] = useState({
		img: iitkgp,
		name: "Indian Institute of Technology Kharagpur",
		link: "https://gian.iitkgp.ac.in/",
	});

	const [desc] = useState(
		"Dolor consectetur magna esse amet laborum commodo mollit quis irure. Laboris velit excepteur in veniam in ex. Dolore aliqua esse Lorem sint.Dolor consectetur magna esse amet laborum commodo mollit quis irure. Laboris velit excepteur in veniam in ex. Dolore aliqua esse Lorem sint.Deserunt eiusmod proident incididunt dolore ullamco aliquip nulla. Nulla aliquip officia commodo do qui. Excepteur aliquip quis cupidatat culpa aute consequat eu exercitation. Do voluptate velit excepteur elit nostrud. Culpa ad excepteur Lorem quis consectetur ut nulla sunt consectetur ea in adipisicing. Consequat eiusmod aliqua officia esse ullamco aliquip deserunt."
	);

	const [name] = useState("GIAN");

	return <MHRDPage info={info} name={name} desc={desc} insti={insti} person={person} />;
};
