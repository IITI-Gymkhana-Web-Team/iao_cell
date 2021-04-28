import React, { useState } from "react";
import { MHRDPage } from "./MHRDPage";
import { antony, nserb } from "../../../assets";

export const Vajra = () => {
	const [info] = useState([
		{
			Year: "2020",
			Ip: "Dr. Kiran Bala",
			Fp: "Prof. Ganti Suryanarayana Murthy*",
			Fu: "Oregon State University",
			Country: "USA",
		},
		{
			Year: "2020",
			Ip: "Dr. Neelima Satyam Devarakonda",
			Fp: "Prof. Krishna R Reddy",
			Fu: "University of Illinois",
			Country: "USA",
		},
		{
			Year: "2020",
			Ip: "Dr. Ritunesh Kumar",
			Fp: "Prof. Amitabh Narain",
			Fu: "Michigan Technological University",
			Country: "USA",
		},
		{
			Year: "2020",
			Ip: "Dr. Manish Kumar Goel",
			Fp: "Prof. Rao Y. Surampalli",
			Fu: "Global Institute for Energy, Environment, and Sustainability",
			Country: "USA",
		},
		{
			Year: "2017",
			Ip: "Dr. Ritunesh Kumar",
			Fp: "Prof. Amitabh Narain",
			Fu: "Michigan Technological University",
			Country: "USA",
		},
		{
			Year: "2017",
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

	const [desc] = useState(
		"VAJRA (Visiting Advanced Joint Research) Faculty Scheme is a dedicated program exclusively for overseas scientists and academicians with emphasis on Non-resident Indians (NRI) and Persons of Indian Origin (PIO) / Overseas Citizen of India (OCI) to work as adjunct / visiting faculty for a specific period of time in Indian Public funded academic and research institutions. The Scheme recognizes the value of collaborative research as a crucial element for information sharing among researchers for updating and acquiring knowledge and skills, and also to draw different perspectives to solve a shared problem. SERB welcomes accomplished Overseas Scientists to take up challenging research problems in the Indian setting."
	);

	return (
		<div>
			<MHRDPage info={info} desc={desc} name={name} insti={insti} person={person} />
			<p className="container" style={{ marginTop: "-20px" }}>
				*Since, Prof. Ganti Suryanarayana Murthy is now a regular faculty at IIT Indore,
				this Award could not be availed.
			</p>
		</div>
	);
};
