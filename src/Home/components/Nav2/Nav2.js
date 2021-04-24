import React from "react";
import Navbar from "reactjs-navbar";
import "reactjs-navbar/dist/index.css";
import { useHistory } from "react-router-dom";
import "./Nav2.css";

export const Nav2 = () => {
	let history = useHistory();
	return (
		<Navbar
			menuItems={[
				{
					title: "Home",
					isAuth: true,
					icon: null,
					onClick: () => {
						history.push("/");
					},
				},
				{
					title: "People",
					isAuth: true,
					icon: null,
					subItems: [
						{
							title: "International Affairs",
							isAuth: true,
							icon: null,
							onClick: () => {
								history.push("/people/oia");
							},
						},
						{
							title: "SIA Cell",
							isAuth: true,
							icon: null,
							onClick: () => {
								history.push("/people/sc");
							},
						},
					],
				},
				{
					title: "Committees",
					isAuth: true,
					icon: null,
					subItems: [
						{
							title: "Outreach Committee",
							isAuth: true,
							icon: null,
							onClick: () => {
								history.push("/committee/oc");
							},
						},
						{
							title: "ISMAE Committee",
							isAuth: true,
							icon: null,
							onClick: () => {
								history.push("/committee/mec");
							},
						},
					],
				},
				{
					title: "Collaborations",
					isAuth: true,
					icon: null,
					subItems: [
						{
							title: "MOU",
							isAuth: true,
							icon: null,
							subItems: [
								{
									title: "Asian Universities",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/mou/asia");
									},
								},
								{
									title: "Australian Universities",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/mou/australia");
									},
								},
								{
									title: "American Universities",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/mou/america");
									},
								},
								{
									title: "European Universities",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/mou/europe");
									},
								},
							],
						},
						{
							title: "Mobility Exchange",
							isAuth: true,
							icon: null,
							subItems: [
								{
									title: "Student",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/mobility/student");
									},
								},
								{
									title: "Faculty",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/mobility/faculty");
									},
								},
							],
						},
						{
							title: "International Students",
							isAuth: true,
							icon: null,
							subItems: [
								{
									title: "Student List",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/int/students");
									},
								},
								{
									title: "Testimonials",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/int/testimonials");
									},
								},
							],
						},
						{
							title: "Grants",
							isAuth: true,
							icon: null,
							onClick: () => {
								history.push("/grants");
							},
						},
						{
							title: "Publications",
							isAuth: true,
							icon: null,
							onClick: () => {
								history.push("/publications");
							},
						},
					],
				},
				{
					title: "Prospective",
					isAuth: true,
					icon: null,
					subItems: [
						{
							title: "Inbound",
							isAuth: true,
							icon: null,
							subItems: [
								{
									title: "Faculty",
									isAuth: true,
									icon: null,
									subItems: [
										{
											title: "Visa Process",
											isAuth: true,
											icon: null,
											onClick: () => {
												history.push("/ProsFaculty/visa");
											},
										},
										{
											title: "Places To Visit",
											isAuth: true,
											icon: null,
											onClick: () => {
												history.push("/ProsFaculty/places");
											},
										},
									],
								},
								{
									title: "Student",
									isAuth: true,
									icon: null,
									subItems: [
										{
											title: "Admission",
											isAuth: true,
											icon: null,
											onClick: () => {
												history.push("/ProsStud/admission");
											},
										},
										{
											title: "Programs",
											isAuth: true,
											icon: null,
											onClick: () => {
												history.push("/ProsStud/programs");
											},
										},
										{
											title: "Visa Process",
											isAuth: true,
											icon: null,
											onClick: () => {
												history.push("/ProsStud/visa");
											},
										},
										{
											title: "Places To Visit",
											isAuth: true,
											icon: null,
											onClick: () => {
												history.push("/ProsStud/places");
											},
										},
									],
								},
							],
						},
						// {
						// 	title: "Outbound",
						// 	isAuth: true,
						// (icon: null),
						// 	subItems: [
						// 		{
						// 			title: "Faculty",
						// 			isAuth: true,
						// (icon: null),
						// 		},
						// 		{
						// 			title: "Student",
						// 			isAuth: true,
						// (icon: null),
						// 		},
						// 	],
						// },
					],
				},
				{
					title: "Opportunities",
					isAuth: true,
					icon: null,
					subItems: [
						{
							title: "Students",
							isAuth: true,
							icon: null,
							subItems: [
								{
									title: "PG / PhD / Post Doc",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/opportunities/pg_phd_post_doc");
									},
								},
								{
									title: "B.Tech",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/opportunities/btech");
									},
								},
								{
									title: "Scholarships",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/opportunities/scholarship");
									},
								},
							],
						},
						{
							title: "Faculties",
							isAuth: true,
							icon: null,
							subItems: [
								{
									title: "Indo - French",
									isAuth: true,
									icon: null,
									onClick: () => {
										window.open("http://www.cefipra.org/");
									},
								},
								{
									title: "Indo - Japan",
									isAuth: true,
									icon: null,
									onClick: () => {
										window.open("https://www.jsps.go.jp/english/");
									},
								},
								{
									title: "Indo - Germany",
									isAuth: true,
									icon: null,
									subItems: [
										{
											title: "Alexander von Humboldt Foundation",
											isAuth: true,
											icon: null,
											onClick: () => {
												window.open(
													"https://www.humboldt-foundation.de/en/"
												);
											},
										},
										{
											title: "DAAD",
											isAuth: true,
											icon: null,
											onClick: () => {
												window.open(
													"https://www.daad.in/en/study-research-in-germany/"
												);
											},
										},
										{
											title: "Indo-German Science & Technology Center",
											isAuth: true,
											icon: null,
											onClick: () => {
												window.open("https://www.igstc.org");
											},
										},
									],
								},
								{
									title: "Indo - USA",
									isAuth: true,
									icon: null,
									onClick: () => {
										window.open("https://www.iusstf.org/");
									},
								},
								{
									title: "Indo - UK",
									isAuth: true,
									icon: null,
									onClick: () => {
										window.open(
											"https://www.ukri.org/our-work/collaborating-internationally/our-international-offices/ukri-india/"
										);
									},
								},
								{
									title: "Indo - Asean",
									isAuth: true,
									icon: null,
									onClick: () => {
										window.open("https://aistic.gov.in/ASEAN/HomePage");
									},
								},
								{
									title: "Indo - Canada",
									isAuth: true,
									icon: null,
									subItems: [
										{
											title: "Indo-Shastri Canadian Institute",
											isAuth: true,
											icon: null,
											onClick: () => {
												window.open("https://www.shastriinstitute.org/");
											},
										},
									],
								},
							],
						},
					],
				},
				{
					title: "Outreach",
					isAuth: true,
					icon: null,
					subItems: [
						{
							title: "News",
							isAuth: true,
							icon: null,
							onClick: () => {
								history.push("/outreach/news");
							},
						},
						{
							title: "Events",
							isAuth: true,
							icon: null,
							onClick: () => {
								history.push("/outreach/events");
							},
						},
					],
				},
				{
					title: "Research",
					isAuth: true,
					icon: null,
					onClick: () => {
						window.open("http://rnd.iiti.ac.in/");
					},
				},
				{
					title: "Facilities",
					isAuth: true,
					icon: null,
					subItems: [
						{
							title: "Hostels",
							isAuth: true,
							icon: null,
							onClick: () => {
								window.open("http://hostel.iiti.ac.in/");
							},
						},
						{
							title: "Guest House",
							isAuth: true,
							icon: null,
							onClick: () => {
								history.push("/guestHouse");
							},
						},
						{
							title: "Eateries",
							isAuth: true,
							icon: null,
							onClick: () => {
								window.open("http://iiti.ac.in/page/campus-facilities");
							},
						},
						{
							title: "Health Centre",
							isAuth: true,
							icon: null,
							onClick: () => {
								window.open("http://people.iiti.ac.in/~medical/");
							},
						},
						{
							title: "Counselling Cell",
							isAuth: true,
							icon: null,
							onClick: () => {
								window.open("http://iiti.ac.in/page/counselling-cell");
							},
						},
						{
							title: "Training and Placement",
							isAuth: true,
							icon: null,
							onClick: () => {
								window.open("placement.iiti.ac.in");
							},
						},
						{
							title: "Computer and IT Center",
							isAuth: true,
							icon: null,
							onClick: () => {
								window.open("http://cc.iiti.ac.in/");
							},
						},
						{
							title: "Nursery School",
							isAuth: true,
							icon: null,
							onClick: () => {
								window.open("http://people.iiti.ac.in/~creche/");
							},
						},
						{
							title: "E-Payments",
							isAuth: true,
							icon: null,
							onClick: () => {
								window.open("http://iiti.ac.in/page/e-payments");
							},
						},
						{
							title: "Smart card facility",
							isAuth: true,
							icon: null,
							onClick: () => {
								window.open("http://people.iiti.ac.in/~smartcard/CampusCards.html");
							},
						},
						{
							title: "Transport Booking",
							isAuth: true,
							icon: null,
							onClick: () => {
								window.open("http://vbs.iiti.ac.in/");
							},
						},
						{
							title: "Green vehicle schedule",
							isAuth: true,
							icon: null,
							onClick: () => {
								window.open(
									"https://www.iiti.ac.in/public/storage/Green%20vehicle%20schedule-%202021.pdf"
								);
							},
						},
					],
				},
				{
					title: "Contact",
					isAuth: true,
					icon: null,
					onClick: () => {
						history.push("/contact");
					},
				},
			]}
		/>
	);
};
