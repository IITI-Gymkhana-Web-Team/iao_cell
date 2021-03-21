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
		{
			Year: "abcd",
			Domain: "abcd",
			Title: "abcd",
			Ip: "abcd",
			Fp: "abcd",
			Fu: "abcd",
			Country: "abcd",
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

	const [name] = useState("GIAN");

	return <MHRDPage info={info} name={name} insti={insti} person={person} />;
};
