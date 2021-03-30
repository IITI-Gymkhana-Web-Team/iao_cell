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
				{ name: "International Affairs", link: "/people/oia", level: "2" },
				{ name: "SIA Cell", link: "/people/sc", level: "2" },
			],
			level: "1",
		},
		{
			name: "Committees",
			innerLinks: [
				{ name: "Outreach Comm.", link: "/committee/oc", level: "2" },
				{ name: "Mobility Exchange Comm.", link: "/committee/mec", level: "2" },
			],
			level: "1",
		},
		{
			name: "Collaborations",
			innerLinks: [
				{
					name: "MOU",
					innerLinks: [
						{ name: "Asia", link: "/mou/asia", level: "3" },
						{ name: "Australia", link: "/mou/australia", level: "3" },
						{ name: "America", link: "/mou/america", level: "3" },
						{ name: "Europe", link: "/mou/europe", level: "3" },
					],
					level: "2",
				},
				{
					name: "Mobility Exchange",
					innerLinks: [
						{ name: "Student", link: "/mobility/student", level: "3" },
						{ name: "Faculty", link: "/mobility/faculty", level: "3" },
					],
					level: "2",
				},
				{
					name: "Intl. Students",
					innerLinks: [
						{ name: "Students List", link: "/int/students", level: "3" },
						{ name: "Testimonials", link: "/int/testimonials", level: "3" },
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
								{ name: "Visa Process", link: "/ProsFaculty/visa", level: "4" },
								{
									name: "Places To Visit",
									link: "/ProsFaculty/places",
									level: "4",
								},
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
						{
							name: "PG/PhD/Post Doc",
							link: "/opportunities/pg_phd_post_doc",
							level: "3",
						},
						{ name: "Scholarships", link: "/opportunities/scholarship", level: "3" },
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
			name: "Facilities",
			innerLinks: [
				{ name: "Hostels", link: "http://hostel.iiti.ac.in/", level: "2" },
				{ name: "Guest House", link: "#", level: "2" },
				{ name: "Eateries", link: "http://eateries.iiti.ac.in/", level: "2" },
				{ name: "Health Centre", link: "http://people.iiti.ac.in/~medical/", level: "2" },
				{
					name: "Counselling Cell",
					link: "http://iiti.ac.in/page/counselling-cell",
					level: "2",
				},
				{
					name: "Training and Placement",
					link: "http://placement.iiti.ac.in/",
					level: "2",
				},
				{
					name: "Computer and IT Center",
					link: "http://cc.iiti.ac.in/",
					level: "2",
				},
				{ name: "Nursery School", link: "http://people.iiti.ac.in/~creche/", level: "2" },
				{ name: "E-Payments", link: "http://iiti.ac.in/page/e-payments", level: "2" },
				{
					name: "Smart card facility",
					link: "http://people.iiti.ac.in/~smartcard/CampusCards.html",
					level: "2",
				},
				{ name: "Transport Booking", link: "http://vbs.iiti.ac.in/", level: "2" },
				{
					name: "Green vehicle schedule",
					link:
						"https://www.iiti.ac.in/public/storage/Green%20vehicle%20schedule-%202021.pdf",
					level: "2",
				},
			],
			level: "1",
		},
		{
			name: "Contact",
			link: "/contact",
			level: "1",
		},
	]);

	return (
		<div className="mobileMenuOuter" style={show ? { display: "" } : { display: "none" }}>
			<div className="mobileMenu">
				<div className="mmenuP1">
					<h4 className="font-acme menuHeading">IAO, IIT INDORE</h4>
					<AiOutlineCloseCircle className="closeIcon" onClick={() => setShow(false)} />
				</div>
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
