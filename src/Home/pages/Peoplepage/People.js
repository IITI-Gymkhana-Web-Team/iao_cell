import React, { useState } from "react";
import {
	rajeshkumar,
	avinash,
	raghu,
	sanjay,
	satya,
	thomas,
	vinu,
	person,
	mc,
	abhijeet,
	dipak,
	priyansh,
	gourinath,
	abhinoy,
	manna,
	spatel,
	bashada,
	kcpradhan,
} from "../../../assets";
import { Committee } from "../../components/Committee/Committee";

export const People = ({ match }) => {
	const [committee1] = useState({
		title: "Office of International Affairs & Outreach",
		members: [
			[
				{
					name: "DR. Avinash Sonawane",
					designation: "Dean",
					email: "doiao@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "#",
					lin: "#",
					img: avinash,
				},
			],
			[
				{
					name: "Dr.  Raghunath Sahoo",
					designation: "Associate Dean",
					email: "adoiao@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "",
					lin: "#",
					img: raghu,
				},
				{
					name: "DR. Sanjay Kumar Singh",
					designation: "Associate Dean",
					email: "adoiao2@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "#",
					ig: "#",
					lin: "",
					img: sanjay,
				},
			],
			[
				{
					name: "mR. tentu Satyanarayana",
					designation: "Joint Registrar",
					email: "drintl@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "#",
					lin: "#",
					img: satya,
				},
				{
					name: "Mr. Rajan Thomas",
					designation: "Administrative Officer",
					email: " aoiao@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "#",
					ig: "",
					lin: "#",
					img: thomas,
				},
				{
					name: "Mr. Vinay Kumar",
					designation: "Manager",
					email: " vinaykumar@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "#",
					ig: "#",
					lin: "#",
					img: vinu,
				},
			],
		],
	});

	const [committee2] = useState({
		title: "Outreach Committee",
		members: [
			[
				{
					name: "Dr. Raghunath Sahoo",
					designation: "IAO - Convener",
					email: "adoiao@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "#",
					lin: "#",
					img: raghu,
				},
				{
					name: "Mr. Tentu Satyanarayan",
					designation: "IAO - Secretary",
					email: "drintl@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "#",
					ig: "#",
					lin: "",
					img: satya,
				},
			],
			[
				{
					name: "Dr. Manoneeta Chakraborty",
					designation: "AASE - Member",
					email: "manoneeta@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "",
					lin: "#",
					img: mc,
				},
				{
					name: "Dr. Abhijeet Joshi",
					designation: "BSBE - Member",
					email: "abhijeet.joshi@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "#",
					ig: "#",
					lin: "",
					img: abhijeet,
				},
				{
					name: "Dr. Dipak Kumar Roy",
					designation: "CH - Member",
					email: "dipak.roy@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "#",
					lin: "#",
					img: dipak,
				},
				{
					name: " Dr. Priyansh Singh",
					designation: "CE - Member",
					email: "priyansh@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "",
					lin: "#",
					img: priyansh,
				},
				{
					name: "Dr. Gourinath Banda",
					designation: "CSE - Member",
					email: "gourinath@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "#",
					ig: "#",
					lin: "",
					img: gourinath,
				},
				{
					name: "Dr. Abhinoy Kumar Singh",
					designation: "EE - Member",
					email: "abhinoy.singh@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "#",
					lin: "#",
					img: abhinoy,
				},
				{
					name: "Dr. Santanu Manna",
					designation: "MA - Member",
					email: "santanu@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "",
					lin: "#",
					img: manna,
				},
				{
					name: "Dr. Satyanarayan Patel",
					designation: "ME - Member",
					email: "spatel@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "#",
					ig: "#",
					lin: "",
					img: spatel,
				},
				{
					name: "Dr. D. A. Basha",
					designation: "MEMS - Member",
					email: "bashada@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "#",
					lin: "#",
					img: bashada,
				},
				{
					name: "Dr. Rajesh Kumar",
					designation: "PH - Member",
					email: "rajeshkumar@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "",
					ig: "",
					lin: "#",
					img: rajeshkumar,
				},
				{
					name: "Dr. K C Pradhan",
					designation: "HSS - Member",
					email: "kcpradhan@iiti.ac.in",
					phno: "+91 1234567890",
					fb: "#",
					ig: "#",
					lin: "",
					img: kcpradhan,
				},
			],
		],
	});

	const [committee3] = useState({
		title: "SIR Cell",
		members: [
			[{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#", img: person }],
			[
				{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "", lin: "#", img: person },
				{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "", img: person },
			],
			[
				{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "", lin: "#", img: person },
				{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "", img: person },
				{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "", lin: "#", img: person },
				{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "", img: person },
				{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "", lin: "#", img: person },
				{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "", img: person },
			],
		],
	});

	return (
		<div className="container-fluid">
			{match.url == "/people/oia" && <Committee committee={committee1} />}
			{match.url == "/people/oc" && <Committee committee={committee2} />}
			{match.url == "/people/sc" && <Committee committee={committee3} />}
		</div>
	);
};
