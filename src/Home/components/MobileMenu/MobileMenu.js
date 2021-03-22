import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./MobileMenu.css";
import { MobileMenuLinks } from "./MobileMenuLinks";
// import { BsFillSquareFill } from "react-icons/bs";

export const MobileMenu = ({ show, setShow }) => {
	const [links] = useState([
		{
			name: "Home",
			link: "/",
			level: "1",
		},
		{
			name: "People",
			innerLinks: [
				{ name: "OIA", link: "/people/oia", level: "2" },
				{ name: "Outreach Comm.", link: "/people/oc", level: "2" },
				{ name: "SIR Cell", link: "/people/sc", level: "2" },
			],
			level: "1",
		},
		{
			name: "Collaborations",
			innerLinks: [
				{ name: "MOU", link: "#", level: "2" },
				{
					name: "Mobility Exchange",
					innerLinks: [
						{ name: "Student", link: "#", level: "3" },
						{ name: "Faculty", link: "#", level: "3" },
					],
					level: "2",
				},
				{ name: "Grants", link: "#", level: "2" },
			],
			level: "1",
		},
		{
			name: "Prospective",
			innerLinks: [
				{
					name: "Inbound",
					innerLinks: [
						{
							name: "Faculty",
							innerLinks: [
								{ name: "Visa Process", link: "/ProsStud/visa", level: "4" },
								{ name: "Places To Visit", link: "/ProsStud/places", level: "4" },
							],
							level: "3",
						},
						{
							name: "Student",
							innerLinks: [
								{ name: "Admission", link: "/ProsStud/admission", level: "4" },
								{ name: "Programs", link: "/ProsStud/programs", level: "4" },
								{ name: "Visa Process", link: "/ProsStud/visa", level: "4" },
								{ name: "Places To Visit", link: "/ProsStud/places", level: "4" },
							],
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "Outbound",
					innerLinks: [
						{ name: "Faculty", link: "#", level: "3" },
						{ name: "Student", link: "#", level: "3" },
					],
					level: "2",
				},
			],
			level: "1",
		},
		{
			name: "Opportunities",
			innerLinks: [
				{
					name: "Student",
					innerLinks: [
						{ name: "Internships", link: "#", level: "3" },
						{ name: "PG/PHD", link: "/opportunities/pg_phd_position", level: "3" },
						{ name: "Scholarships", link: "/opportunities/scholarship", level: "3" },
						{ name: "Post Doc", link: "#", level: "3" },
					],
					level: "2",
				},
				{ name: "Faculty", link: "#", level: "2" },
			],
			level: "1",
		},
		{
			name: "Outreach",
			innerLinks: [
				{ name: "News", link: "/outreach/news", level: "2" },
				{ name: "Events", link: "/outreach/events", level: "2" },
			],
			level: "1",
		},
		{
			name: "Research",
			innerLinks: [{ name: "R&D @IITI", link: "http://rnd.iiti.ac.in/", level: "2" }],
			level: "1",
		},
		{
			name: "Contact",
			innerLinks: [{ name: "Office of IR", link: "/OfficeIR", level: "2" }],
			level: "1",
		},
	]);

	return (
		<div className="mobileMenuOuter" style={show ? { display: "" } : { display: "none" }}>
			<div className="mobileMenu">
				<AiOutlineCloseCircle className="closeIcon" onClick={() => setShow(false)} />
				<h4 className="font-acme menuHeading">IAO, IIT INDORE</h4>
				{links.map((link1) => {
					return (
						<div className="indiMenu" key={link1.name}>
							<MobileMenuLinks link1={link1} setShow2={setShow} show2={show} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
