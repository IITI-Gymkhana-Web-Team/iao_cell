import React, { useState } from "react";
import {
	rajeshkumar,
	raghu,
	satya,
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
	sanjay,
	ananya,
	ashish,
} from "../../../assets";
import { Committee } from "../../components/Committee/Committee";

export const CommitteesPage = ({ index }) => {
	const [committee1] = useState({
		title: "Outreach Committee",
		members: [
			[
				{
					name: "Dr. Raghunath Sahoo",
					designation: "IAO - Convener",
					email: "adoiao@iiti.ac.in",
					img: raghu,
					phno: "+91-731-660-3329",
				},
				{
					name: "Mr. Tentu Satyanarayan",
					designation: "IAO - Secretary",
					email: "drintl@iiti.ac.in",
					phno: "+91-731-660-3547",
					img: satya,
				},
			],
			[
				{
					name: "Dr. Manoneeta Chakraborty",
					designation: "AASE - Member",
					email: "manoneeta@iiti.ac.in",
					img: mc,
				},
				{
					name: "Dr. Abhijeet Joshi",
					designation: "BSBE - Member",
					email: "abhijeet.joshi@iiti.ac.in",
					phno: "+91-731-660-3344",
					img: abhijeet,
				},
			],
			[
				{
					name: "Dr. Dipak Kumar Roy",
					designation: "CH - Member",
					email: "dipak.roy@iiti.ac.in",
					phno: "+91-731-660-3335",
					img: dipak,
				},
				{
					name: " Dr. Priyansh Singh",
					designation: "CE - Member",
					email: "priyansh@iiti.ac.in",
					phno: "+91-7011321121",
					img: priyansh,
				},
			],
			[
				{
					name: "Dr. Gourinath Banda",
					designation: "CSE - Member",
					email: "gourinath@iiti.ac.in",
					img: gourinath,
				},
				{
					name: "Dr. Abhinoy Kumar Singh",
					designation: "EE - Member",
					email: "abhinoy.singh@iiti.ac.in",
					phno: "+91-07324-306-884",
					img: abhinoy,
				},
			],
			[
				{
					name: "Dr. Santanu Manna",
					designation: "MA - Member",
					email: "santanu@iiti.ac.in",
					phno: "+91-731-2438700 Ext. 924",
					img: manna,
				},
				{
					name: "Dr. Satyanarayan Patel",
					designation: "ME - Member",
					email: "spatel@iiti.ac.in",
					img: spatel,
				},
			],
			[
				{
					name: "Dr. D. A. Basha",
					designation: "MEMS - Member",
					email: "bashada@iiti.ac.in",
					img: bashada,
				},
				{
					name: "Dr. Rajesh Kumar",
					designation: "PH - Member",
					email: "rajeshkumar@iiti.ac.in",
					phno: "+91 731 2438901",
					img: rajeshkumar,
				},
			],
			[
				{
					name: "Dr. K C Pradhan",
					designation: "HSS - Member",
					email: "kcpradhan@iiti.ac.in",
					phno: "+91-731-2438 700 (Ext. 871)",
					img: kcpradhan,
				},
			],
		],
	});

	const [committee2] = useState({
		title: "Institute Student Mobility, Admission and Exchange Committee",
		members: [
			[
				{
					name: "Dr. Sanjay K. singh",
					designation: "Convener",
					email: "adoiao2@iiti.ac.in",
					img: sanjay,
					phno: "+91-731-660-3350",
				},
				{
					name: "Mr. T Satyanarayana",
					designation: "Secretary",
					email: "drintl@iiti.ac.in",
					img: satya,
					phno: "+91-731-660-3547",
				},
			],
			[
				{
					name: "Dr. Ananya Ghoshal",
					designation: "Member (HSS)",
					email: "aghoshal@iiti.ac.in",
					phno: "+91-731-2438-700",
					img: ananya,
				},
				{
					name: "Dr. Ashish Rajak",
					designation: "Member (ME)",
					email: "a.rajak@iiti.ac.in",
					phno: "+91-731-6603-285",
					img: ashish,
				},
			],
			[
				{
					name: "Dr. Bibekananda Maji",
					designation: "Member (Maths)",
					email: "bibekanandamaji@iiti.ac.in",
					phno: "abcd",
					img: person,
				},
				{
					name: "Dr. Chelvam Venkatesh",
					designation: "Member (CH)",
					email: "abcd@iiti.ac.in",
					phno: "abcd",
					img: person,
				},
			],
			[
				{
					name: "Prof. Ganti S. Murthy",
					designation: "Member (BSBE)",
					email: "abcd@iiti.ac.in",
					phno: "abcd",
					img: person,
				},
				{
					name: "Dr. Guru Prakash",
					designation: "Member (CE)",
					email: "abcd@iiti.ac.in",
					phno: "abcd",
					img: person,
				},
			],
			[
				{
					name: "Dr. Nagendra Kumar",
					designation: "Member (CSE)",
					email: "abcd@iiti.ac.in",
					phno: "abcd",
					img: person,
				},
				{
					name: "Dr. Saptarshi Ghosh",
					designation: "Member (EE)",
					email: "abcd@iiti.ac.in",
					phno: "abcd",
					img: person,
				},
			],
			[
				{
					name: "Dr. Sudeshna Chattopadhyay",
					designation: "Member (PHY)",
					email: "abcd@iiti.ac.in",
					phno: "abcd",
					img: person,
				},
				{
					name: "Dr. Suman Majumdar",
					designation: "Member (DAASE)",
					email: "abcd@iiti.ac.in",
					phno: "abcd",
					img: person,
				},
			],
			[
				{
					name: "Dr. Sunil Kumar",
					designation: "Member (MEMS)",
					email: "abcd@iiti.ac.in",
					phno: "abcd",
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
