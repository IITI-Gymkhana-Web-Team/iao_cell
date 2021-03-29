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
	ankur,
	neeraj,
	jahnavi,
	kaushik,
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
		title: "Student International Affairs Cell",
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
					phno: "+91 7675912985",
					designation: "Coordinator",
					img: harshitha,
					dept: "Outreach Team",
				},
			],
			[
				{
					email: "ce190004005@iiti.ac.in",
					name: "Neeraj Andrali",
					phno: "+91 9494574618",
					designation: "Member",
					img: neeraj,
				},
				{
					email: "ee190002061@iiti.ac.in",
					name: "Jahnavi Sunchu",
					designation: "Member",
					phno: "",
					img: jahnavi,
				},
			],
			[
				{
					email: "me180003014@iiti.ac.in",
					name: "Chebrolu C S Sai Harsha",
					phno: "+91 7285925025",
					designation: "Coordinator",
					img: harsha,
					dept: "P.G/Ph.D./ Postdoctoral Team",
				},
			],
			[
				{
					email: "phd1801204004@iiti.ac.in",
					name: "Sanchit Gupta",
					phno: "+91 8953623695",
					designation: "Member",
					img: sanchit,
				},
				{
					email: "mt2002102012@iiti.ac.in",
					name: "Shubham Gupta",
					phno: "+91 9205054395",
					designation: "Member",
					img: shubham,
				},
				{
					email: "ms2004103004@iiti.ac.in",
					name: "Kaushik Prince Attar",
					phno: "+91 9780168339",
					designation: "Member",
					img: kaushik,
				},
			],
			[
				{
					email: "ee180002055@iiti.ac.in",
					name: "Shiv Kumar",
					phno: "+91 8789117331",
					designation: "Coordinator",
					img: shiv,
					dept: "Internship and Student Exchange Team",
				},
			],
			[
				{
					email: "ee190002005@iiti.ac.in",
					name: "Anupama Sureshbabu",
					phno: "+91 9539335533",
					designation: "Member",
					img: anupama,
				},
				{
					email: "me190003010@iiti.ac.in",
					name: "Ankur Rai",
					phno: "+91 9109293807",
					designation: "Member",
					img: ankur,
				},
			],
			[
				{
					email: "ee190002005@iiti.ac.in",
					name: "Anupama Sureshbabu",
					phno: "+91 9539335533",
					designation: "Member",
					img: anupama,
					dept: "Web Team",
				},
				{
					email: "ee190002043@iiti.ac.in",
					name: "Pallavi Upadhyay",
					phno: "+91 7024061841",
					designation: "Member",
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
