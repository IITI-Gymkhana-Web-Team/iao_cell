import React, { useState } from "react";
import { avinash, raghu, sanjay, satya, thomas, vinu, person, shilpa } from "../../../assets";
import { Committee } from "../../components/Committee/Committee";

export const People = ({ index }) => {
	const [committee1] = useState({
		title: "Office of International Affairs & Outreach",
		members: [
			[
				{
					name: "DR. Avinash Sonawane",
					designation: "Dean",
					email: "doiao@iiti.ac.in",
					img: avinash,
					phno: "+91-731-660-3357",
				},
			],
			[
				{
					name: "Dr.  Raghunath Sahoo",
					designation: "Associate Dean",
					email: "adoiao@iiti.ac.in",
					img: raghu,
					phno: "+91-731-660-3329",
				},
				{
					name: "DR. Sanjay Kumar Singh",
					designation: "Associate Dean",
					email: "adoiao2@iiti.ac.in",
					img: sanjay,
					phno: "+91-731-660-3350",
				},
			],
			[
				{
					name: "mR. tentu Satyanarayana",
					designation: "Joint Registrar",
					email: "drintl@iiti.ac.in",
					img: satya,
					phno: "+91-731-660-3547",
				},
				{
					name: "Mr. Rajan Thomas",
					designation: "Administrative Officer",
					email: " aoiao@iiti.ac.in",
					img: thomas,
					phno: "+91-731-660-3112",
				},
			],
			[
				{
					name: "Mr. Vinay Kumar",
					designation: "Manager",
					email: " vinaykumar@iiti.ac.in",
					img: vinu,
					phno: "+91-731-660-3479",
				},
				{
					name: "Ms. Shilpa Chouhan",
					designation: "Manager (Outreach)",
					email: "manageriao@iiti.ac.in",
					img: shilpa,
					phno: "+91-731-660-3573",
				},
			],
		],
	});

	const [committee2] = useState({
		title: "SIA Cell",
		members: [
			[
				{
					name: "Ghi Jkl",
					designation: "testing",
					email: "ghijkl@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "",
					lin: "#",
					img: person,
				},
			],
			[
				{
					name: "Ghi Jkl",
					designation: "testing",
					email: "ghijkl@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "",
					lin: "#",
					img: person,
				},
				{
					name: "Ghi Jkl",
					designation: "testing",
					email: "ghijkl@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "#",
					ig: "#",
					lin: "",
					img: person,
				},
			],
			[
				{
					name: "Ghi Jkl",
					designation: "testing",
					email: "ghijkl@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "",
					lin: "#",
					img: person,
				},
				{
					name: "Ghi Jkl",
					designation: "testing",
					email: "ghijkl@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "#",
					ig: "#",
					lin: "",
					img: person,
				},
				{
					name: "Ghi Jkl",
					designation: "testing",
					email: "ghijkl@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "",
					lin: "#",
					img: person,
				},
				{
					name: "Ghi Jkl",
					designation: "testing",
					email: "ghijkl@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "#",
					ig: "#",
					lin: "",
					img: person,
				},
				{
					name: "Ghi Jkl",
					designation: "testing",
					email: "ghijkl@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "",
					lin: "#",
					img: person,
				},
				{
					name: "Ghi Jkl",
					designation: "testing",
					email: "ghijkl@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "#",
					ig: "#",
					lin: "",
					img: person,
				},
			],
		],
	});

	return (
		<div className="container-fluid">
			{index == 1 && <Committee committee={committee1} />}
			{index == 2 && <Committee committee={committee2} />}
		</div>
	);
};
