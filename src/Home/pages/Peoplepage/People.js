import React, { useState } from "react";
import {
	avinash,
	raghu,
	sanjay,
	satya,
	thomas,
	vinu,
	shilpa,
	anupama,
	harsha,
	harshitha,
	nitin,
	pallavi,
	sanchit,
	shiv,
	shubham,
} from "../../../assets";
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
					email: "phd1801204006@iiti.ac.in",
					name: "Nitin Tiwari",
					phno: "+91 8817109170",
					designation: "Head",
					img: nitin,
				},
			],
			[
				{
					email: "ee180002020@iiti.ac.in",
					name: "Harshitha Kolukuluru",
					phno: "7675912985",
					designation: "Coordinator Outreach",
					img: harshitha,
				},
				{
					email: "me180003014@iiti.ac.in",
					name: "Chebrolu C S Sai Harsha",
					phno: "7285925025",
					designation: "Coordinator P.G/Ph.D./ Postdoctoral",
					img: harsha,
				},
				{
					email: "ee180002055@iiti.ac.in",
					name: "Shiv Kumar",
					phno: "8789117331",
					designation: "Coordinator Internship and Student Exchange",
					img: shiv,
				},
			],
			[
				{
					email: "ee190002005@iiti.ac.in",
					name: "Anupama Sureshbabu",
					phno: "9539335533",
					designation: "Member of Web Team, Member Internship and Student Exchange Team",
					img: anupama,
				},
				{
					email: "phd1801204004@iiti.ac.in",
					name: "Sanchit Gupta",
					phno: "8953623695",
					designation: "Member P.G/Ph.D./ Postdoctoral Team",
					img: sanchit,
				},
				{
					email: "mt2002102012@iiti.ac.in",
					name: "Shubham Gupta",
					phno: "9205054395",
					designation: "Member P.G/Ph.D./ Postdoctoral Team",
					img: shubham,
				},
				{
					email: "ee190002043@iiti.ac.in",
					name: "Pallavi Upadhyay",
					phno: "7024061841",
					designation: "Member of Web Team",
					img: pallavi,
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
