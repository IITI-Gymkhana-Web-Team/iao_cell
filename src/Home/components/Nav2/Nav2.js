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
					title: "Inbound",
					isAuth: true,
					icon: null,
					subItems: [
						{
							title: "Visitors",
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
									],
								},
							],
						},
						{
							title: "Opportunity",
							isAuth: true,
							icon: null,
							subItems: [
								{
									title: "Study In India",
									isAuth: true,
									icon: null,
									onClick: () => {
										window.open("https://studyinindia.gov.in/");
									},
								},
								{
									title: "ICCR",
									isAuth: true,
									icon: null,
									onClick: () => {
										window.open("https://www.iccr.gov.in/");
									},
								},
								{
									title: "ASEAN India STIC",
									isAuth: true,
									icon: null,
									onClick: () => {
										window.open("https://asean-iit.in/");
									},
								},
							],
						},
						{
							title: "Places To Visit",
							isAuth: true,
							icon: null,
							onClick: () => {
								history.push("/Pros/places");
							},
						},
						{
							title: "Visitors' Experience",
							isAuth: true,
							icon: null,
							onClick: () => {
								history.push("/Pros/visitors_experience");
							},
						},
					],
				},
				{
					title: "Outbound",
					isAuth: true,
					icon: null,
					subItems: [
						{
							title: "Students",
							isAuth: true,
							icon: null,
							subItems: [
								{
									title: "Scholarships",
									isAuth: true,
									icon: null,
									subItems: [
										{
											title: "France",
											isAuth: true,
											icon: null,
											subItems: [
												{
													title: "Raman-Charpak Fellowship",
													isAuth: true,
													icon: null,
													onClick: () => {
														window.open(
															"http://www.cefipra.org/Raman_Charpak.aspx"
														);
													},
												},
												{
													title: "CEFIPRA-ESONN Fellowship",
													isAuth: true,
													icon: null,
													onClick: () => {
														window.open(
															"http://www.cefipra.org/Cefipra_ESONN.aspx"
														);
													},
												},
												{
													title: "ENS Internship program",
													isAuth: true,
													icon: null,
													onClick: () => {
														window.open(
															"http://www.ens-lyon.fr/en/studies/admissions/application-research-internship"
														);
													},
												},
											],
										},
										{
											title: "Japan",
											isAuth: true,
											icon: null,
											subItems: [
												{
													title: "JSPS",
													isAuth: true,
													icon: null,
													onClick: () => {
														window.open(
															"https://www.jsps.go.jp/english/"
														);
													},
												},
												{
													title: "MEXT Scholarship",
													isAuth: true,
													icon: null,
													onClick: () => {
														window.open(
															"https://www.in.emb-japan.go.jp/Education/japanese_government_scholarships.html"
														);
													},
												},
											],
										},
										{
											title: "Germany",
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
													title:
														"Indo-German Science & Technology Center",
													isAuth: true,
													icon: null,
													onClick: () => {
														window.open("https://www.igstc.org");
													},
												},
												{
													title: "German Language",
													isAuth: true,
													icon: null,
													onClick: () => {
														window.open(
															"https://www.goethe.de/ins/in/en/sta/new.html"
														);
													},
												},
												{
													title: "Indo-German Training Centre",
													isAuth: true,
													icon: null,
													onClick: () => {
														window.open(
															"https://indien.ahk.de/education/indo-german-training-centre"
														);
													},
												},
											],
										},
										{
											title: "Canada",
											isAuth: true,
											icon: null,
											subItems: [
												{
													title: "Indo-Shastri Canadian Institute",
													isAuth: true,
													icon: null,
													onClick: () => {
														window.open(
															"https://www.shastriinstitute.org/"
														);
													},
												},
												{
													title: "Indo-Canada Education Council",
													isAuth: true,
													icon: null,
													onClick: () => {
														window.open(
															"https://indocanadaeducation.org/"
														);
													},
												},
												{
													title: "MITACS",
													isAuth: true,
													icon: null,
													onClick: () => {
														window.open(
															"https://www.mitacs.ca/en/programs/globalink/come-to-canada"
														);
													},
												},
											],
										},
										{
											title: "USA",
											isAuth: true,
											icon: null,
											onClick: () => {
												window.open("https://www.iusstf.org/");
											},
										},
										{
											title: "UK",
											isAuth: true,
											icon: null,
											onClick: () => {
												window.open(
													"https://www.ukri.org/our-work/collaborating-internationally/our-international-offices/ukri-india/"
												);
											},
										},
										{
											title: "Asean",
											isAuth: true,
											icon: null,
											onClick: () => {
												window.open("https://aistic.gov.in/ASEAN/HomePage");
											},
										},
										{
											title: "China",
											isAuth: true,
											icon: null,
											onClick: () => {
												window.open(
													"http://www.anso.org.cn/programmes/talent/scholarship/"
												);
											},
										},
										{
											title: "Taiwan",
											isAuth: true,
											icon: null,
											onClick: () => {
												window.open(
													"https://www.icdf.org.tw/ct.asp?xItem=12505&CtNode=30316&mp=2"
												);
											},
										},
										{
											title: "Spain",
											isAuth: true,
											icon: null,
											onClick: () => {
												window.open(
													"https://www.crg.eu/en/content/training/undergraduates-and-masters"
												);
											},
										},
										{
											title: "Austria",
											isAuth: true,
											icon: null,
											onClick: () => {
												window.open(
													"https://www.scholarships.at/default.aspx"
												);
											},
										},
										{
											title: "New Zealand",
											isAuth: true,
											icon: null,
											onClick: () => {
												window.open("https://www.nzscholarships.govt.nz/");
											},
										},
										{
											title: "Thailand",
											isAuth: true,
											icon: null,
											onClick: () => {
												window.open(
													"https://www.ait.ac.th/admissions/scholarships/bangchak-master-scholarships/"
												);
											},
										},
									],
								},
								{
									title: "Internships",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/opportunities/internships");
									},
								},
								{
									title: "PG / PhD / Post Doc",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/opportunities/pg_phd_post_doc");
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
					title: "Collaborations",
					isAuth: true,
					icon: null,
					subItems: [
						{
							title: "MoUs",
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
							title: "Mobility",
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
							],
						},
						{
							title: "International Grants",
							isAuth: true,
							icon: null,
							subItems: [
								{
									title: "Bilateral Intl. Grants",
									isAuth: true,
									icon: null,
									onClick: () => {
										history.push("/grants");
									},
								},
								{
									title: "MHRD Schemes",
									isAuth: true,
									icon: null,

									subItems: [
										{
											title: "GIAN",
											isAuth: true,
											icon: null,
											onClick: () => {
												history.push("/mhrd/gian");
											},
										},
										{
											title: "VAJRA",
											isAuth: true,
											icon: null,
											onClick: () => {
												history.push("/mhrd/vajra");
											},
										},
										{
											title: "SPARC",
											isAuth: true,
											icon: null,
											onClick: () => {
												history.push("/mhrd/sparc");
											},
										},
										{
											title: "ASEM - DUO",
											isAuth: true,
											icon: null,
											onClick: () => {
												history.push("/mhrd/asem");
											},
										},
									],
								},
							],
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
					title: "Outreach",
					isAuth: true,
					icon: null,
					subItems: [
						{
							title: "Events",
							isAuth: true,
							icon: null,
							onClick: () => {
								history.push("/outreach/events");
							},
						},
						{
							title: "News",
							isAuth: true,
							icon: null,
							onClick: () => {
								history.push("/outreach/news");
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
								window.open("http://placement.iiti.ac.in");
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
