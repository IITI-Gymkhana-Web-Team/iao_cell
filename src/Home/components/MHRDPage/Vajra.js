import React, { useState } from "react";
import { MHRDPage } from "./MHRDPage";
import { antony, nserb } from "../../../assets";

export const Vajra = () => {
	const [info] = useState([
		{
			Year: "2020",
			Domain: "N/A",
			Title: "N/A",
			Ip: "Dr. Kiran Bala",
			Fp: "Prof. Ganti Suryanarayana Murthy*",
			Fu: "Oregon State University",
			Country: "USA",
		},
		{
			Year: "2020",
			Domain: "N/A",
			Title: "N/A",
			Ip: "Dr. Neelima Satyam Devarakonda",
			Fp: "Prof. Krishna R Reddy",
			Fu: "University of Illinois",
			Country: "USA",
		},
		{
			Year: "2020",
			Domain: "N/A",
			Title: "N/A",
			Ip: "Dr. Ritunesh Kumar",
			Fp: "Prof. Amitabh Narain",
			Fu: "Michigan Technological University",
			Country: "USA",
		},
		{
			Year: "2020",
			Domain: "N/A",
			Title: "N/A",
			Ip: "Dr. Manish Kumar Goel",
			Fp: "Prof. Rao Y. Surampalli",
			Fu: "Global Institute for Energy, Environment, and Sustainability",
			Country: "USA",
		},
		{
			Year: "2017",
			Domain: "N/A",
			Title: "N/A",
			Ip: "Dr. Ritunesh Kumar",
			Fp: "Prof. Amitabh Narain",
			Fu: "Michigan Technological University",
			Country: "USA",
		},
		{
			Year: "2017",
			Domain: "N/A",
			Title: "N/A",
			Ip: "Dr. M. Ashok Kumar",
			Fp: "Prof. Michel Broniatowski",
			Fu: "Université Pierre et Marie Curie",
			Country: "France",
		},
	]);

	const [person] = useState({
		img: antony,
		name: "Dr. Antony Vijesh",
		designation: "Associate Professor, Maths",
		email: "vijesh@iiti.ac.in",
	});

	const [insti] = useState({
		link: "http://www.serb.gov.in/vajra.php",
		title: "Application Link",
		img: nserb,
	});

	const [name] = useState("VAJRA");

	return (
		<div>
			<MHRDPage info={info} name={name} insti={insti} person={person} />
			<p className="container" style={{ marginTop: "-20px" }}>
				*Since, Prof. Ganti Suryanarayana Murthy is now a regular faculty at IIT Indore,
				this Award could not be availed.
			</p>
		</div>
	);
};
