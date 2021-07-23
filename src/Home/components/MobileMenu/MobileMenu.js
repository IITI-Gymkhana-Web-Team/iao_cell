import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./MobileMenu.css";
import { MobileMenuLinks } from "./MobileMenuLinks";
// import { BsFillSquareFill } from "react-icons/bs";

export const MobileMenu = ({ show, setShow, i }) => {
	const [links] = useState([
		{
			name: "Home",
			link: "/",
			level: "1",
		},
		{
			name: "People",
			innerLinks: [
				{
					name: "International Affairs",
					link: "/people/oia",
					level: "2",
				},
				{ name: "SIA Cell", link: "/people/sc", level: "2" },
			],
			level: "1",
		},
		{
			name: "Committees",
			innerLinks: [
				{ name: "Outreach Comm.", link: "/committee/oc", level: "2" },
				{ name: "ISMAE Comm.", link: "/committee/mec", level: "2" },
			],
			level: "1",
		},
		{
			name: "Collaborations",
			innerLinks: [
				{
					name: "MoUs",
					innerLinks: [
						{
							name: "Asian Universities",
							link: "/mou/asia",
							level: "3",
						},
						{
							name: "Australian Universities",
							link: "/mou/australia",
							level: "3",
						},
						{
							name: "American Universities",
							link: "/mou/america",
							level: "3",
						},
						{
							name: "European Universities",
							link: "/mou/europe",
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "Mobility",
					innerLinks: [
						{
							name: "Student",
							innerLinks: [
								{
									name: "America",
									link: "/mobility/student/america",
									level: "4",
								},
								{
									name: "Europe",
									link: "/mobility/student/europe",
									level: "4",
								},
							],
							level: "3",
						},
						{
							name: "Faculty",
							innerLinks: [
								{
									name: "Africa",
									link: "/mobility/faculty/africa",
									level: "4",
								},
								{
									name: "America",
									link: "/mobility/faculty/america",
									level: "4",
								},
								{
									name: "Asia",
									link: "/mobility/faculty/asia",
									level: "4",
								},
								{
									name: "Australia",
									link: "/mobility/faculty/australia",
									level: "4",
								},
								{
									name: "Europe",
									link: "/mobility/faculty/europe",
									level: "4",
								},
								{
									name: "Other Countries",
									link: "/mobility/faculty/others",
									level: "4",
								},
							],
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "Intl. Students",
					innerLinks: [
						{
							name: "Students List",
							link: "/int/students",
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "International Grants",
					innerLinks: [
						{
							name: "Bilateral Int. Grants",
							link: "/grants",
							level: "3",
						},
						{
							name: "MHRD Schemes",
							innerLinks: [
								{
									name: "GIAN",
									link: "/mhrd/gian",
									level: "4",
								},
								{
									name: "VAJRA",
									link: "/mhrd/vajra",
									level: "4",
								},
								{
									name: "SPARC",
									link: "/mhrd/sparc",
									level: "4",
								},
								{
									name: "ASEM - DUO",
									link: "/mhrd/asem",
									level: "4",
								},
							],
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "Publications",
					link: "/publications",
					level: "2",
				},
			],
			level: "1",
		},
		{
			name: "Inbound",
			innerLinks: [
				{
					name: "Visitors",
					innerLinks: [
						{
							name: "Faculty",
							innerLinks: [
								{
									name: "Visa Process",
									link: "/ProsFaculty/visa",
									level: "4",
								},
							],
							level: "3",
						},
						{
							name: "Student",
							innerLinks: [
								{
									name: "Admission",
									link: "/ProsStud/admission",
									level: "4",
								},
								{
									name: "Programs",
									link: "/ProsStud/programs",
									level: "4",
								},
								{
									name: "Visa Process",
									link: "/ProsStud/visa",
									level: "4",
								},
							],
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "Opportunity",
					innerLinks: [
						{
							name: "Study In India",
							link: "https://studyinindia.gov.in/",
							level: "3",
						},
						{
							name: "ICCR",
							link: "https://www.iccr.gov.in/",
							level: "3",
						},
						{
							name: "ASEAN India STIC",
							link: "https://asean-iit.in/",
							level: "3",
						},
						{
							name: "UKIERI Mobility Programme",
							link: "https://www.britishcouncil.in/programmes/higher-education/ukieri/ukieri-mobility-programme-study-india",
							level: "3",
						},
						{
							name: "MHRD Schemes",
							innerLinks: [
								{
									name: "GIAN",
									level: "4",
									link: "https://gian.iitkgp.ac.in/",
								},
								{
									name: "VAJRA",
									level: "4",
									link: "http://www.serb.gov.in/vajra.php",
								},
								{
									name: "SPARC",
									level: "4",
									link: "https://sparc.iitkgp.ac.in",
								},
								{
									name: "ASEM - DUO",
									level: "4",
									link: "http://www.asemduo.org/02_programs/programs_09.php",
								},
							],
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "Places To Visit",
					link: "/Pros/places",
					level: "2",
				},
				{
					name: "Visitors' Experience",
					link: "/Pros/visitors_experience",
					level: "2",
				},
			],
			level: "1",
		},
		{
			name: "Outbound",
			innerLinks: [
				{
					name: "Student",
					innerLinks: [
						{
							name: "Scholarships",
							innerLinks: [
								{
									name: "France",
									level: "4",
									innerLinks: [
										{
											name: "Raman-Charpak Fellowship",
											link: "http://www.cefipra.org/Raman_Charpak.aspx",
											level: "5",
										},
										{
											name: "CEFIPRA-ESONN Fellowship",
											link: "http://www.cefipra.org/Cefipra_ESONN.aspx",
											level: "5",
										},
										{
											name: "ENS Internship program",
											link: "http://www.ens-lyon.fr/en/studies/admissions/application-research-internship",
											level: "5",
										},
									],
								},
								{
									name: "Japan",
									level: "4",
									innerLinks: [
										{
											name: "JSPS",
											link: "https://www.jsps.go.jp/english/",
											level: "5",
										},
										{
											name: "MEXT Scholarship",
											link: "https://www.in.emb-japan.go.jp/Education/japanese_government_scholarships.html",
											level: "5",
										},
									],
								},
								{
									name: "Germany",
									level: "4",
									innerLinks: [
										{
											name: "Alexander von Humboldt Foundation",
											link: "https://www.humboldt-foundation.de/en/",
											level: "5",
										},
										{
											name: "DAAD",
											link: "https://www.daad.in/en/study-research-in-germany/",
											level: "5",
										},
										{
											name: "Indo-German Science & Technology Center",
											link: "https://www.igstc.org",
											level: "5",
										},
										{
											name: "German Language",
											link: "https://www.goethe.de/ins/in/en/sta/new.html",
											level: "5",
										},
										{
											name: "Indo-German Training Centre",
											link: "https://indien.ahk.de/education/indo-german-training-centre",
											level: "5",
										},
									],
								},
								{
									name: "Canada",
									level: "4",
									innerLinks: [
										{
											name: "Indo-Shastri Canadian Institute",
											link: "https://www.shastriinstitute.org/",
											level: "5",
										},
										{
											name: "Indo-Canada Education Council",
											link: "https://indocanadaeducation.org/",
											level: "5",
										},
										{
											name: "MITACS",
											link: "https://www.mitacs.ca/en/programs/globalink/come-to-canada",
											level: "5",
										},
									],
								},
								{
									name: "UK",
									level: "4",
									innerLinks: [
										{
											name: "British Council India",
											link: "https://www.britishcouncil.in/study-uk/scholarships",
											level: "5",
										},
										{
											name: "UKRI India",
											link: "https://www.ukri.org/our-work/collaborating-internationally/our-international-offices/ukri-india/",
											level: "5",
										},
										{
											name: "Charles Wallace India Trust",
											link: "https://www.charleswallaceindiatrust.com/",
											level: "5",
										},
										{
											name: "Commonwealth Scholarships",
											link: "https://www.britishcouncil.in/study-uk/scholarships/commonwealth-scholarships",
											level: "5",
										},
										{
											name: "GREAT Scholarships India",
											link: "https://study-uk.britishcouncil.org/scholarships/great-scholarships/india",
											level: "5",
										},
										{
											name: "Newton Bhabha Fund",
											link: "https://www.britishcouncil.in/programmes/higher-education/newton-fund",
											level: "5",
										},
									],
								},
								{
									name: "USA",
									level: "4",
									link: "https://www.iusstf.org/",
								},
								{
									name: "Asean",
									level: "4",
									link: "https://aistic.gov.in/ASEAN/HomePage",
								},
								{
									name: "China",
									level: "4",
									link: "http://www.anso.org.cn/programmes/talent/scholarship/",
								},
								{
									name: "Taiwan",
									level: "4",
									link: "https://www.icdf.org.tw/ct.asp?xItem=12505&CtNode=30316&mp=2",
								},
								{
									name: "Spain",
									level: "4",
									link: "https://www.crg.eu/en/content/training/undergraduates-and-masters",
								},
								{
									name: "Austria",
									level: "4",
									link: "https://www.scholarships.at/default.aspx",
								},
								{
									name: "New Zealand",
									level: "4",
									link: "https://www.nzscholarships.govt.nz/",
								},
								{
									name: "Thailand",
									level: "4",
									link: "https://www.ait.ac.th/admissions/scholarships/bangchak-master-scholarships/",
								},
							],
							level: "3",
						},
						{ name: "Internships", link: "/opportunities/internships", level: "3" },
						{
							name: "PG / Ph.D. / Post-Doc",
							link: "/opportunities/pg_phd_post_doc",
							level: "3",
						},
						{
							name: "Useful Links",
							level: "3",
							innerLinks: [
								{
									name: "ISG",
									link: "https://www.indianstudentsgermany.org/",
									level: "4",
								},
								{
									name: "British Council India",
									link: "https://www.britishcouncil.in/",
									level: "4",
								},
							],
						},
					],
					level: "2",
				},
				{
					name: "Faculties",
					innerLinks: [
						{
							name: "Indo-French",
							link: "http://www.cefipra.org/",
							level: "3",
						},
						{
							name: "Indo-Japan",
							link: "https://www.jsps.go.jp/english/",
							level: "3",
						},
						{
							name: "Indo-Germany",
							innerLinks: [
								{
									name: "Alexander von Humboldt Foundation",
									link: "https://www.humboldt-foundation.de/en/",
									level: "4",
								},
								{
									name: "DAAD",
									link: "https://www.daad.in/en/study-research-in-germany/",
									level: "4",
								},
								{
									name: "Indo-German Science & Technology Center",
									link: "https://www.igstc.org/",
									level: "4",
								},
							],
							level: "3",
						},
						{
							name: "Indo-USA",
							link: "https://www.iusstf.org/",
							level: "3",
						},
						{
							name: "Indo-UK",
							link: "https://www.ukri.org/our-work/collaborating-internationally/our-international-offices/ukri-india/",
							level: "3",
						},
						{
							name: "Indo-ASEAN",
							link: "https://aistic.gov.in/ASEAN/HomePage",
							level: "3",
						},
						{
							name: "Indo-Canada",
							innerLinks: [
								{
									name: "Indo-Shastri Canadian Institute",
									link: "https://www.shastriinstitute.org/",
									level: "4",
								},
							],
							level: "3",
						},
					],
					level: "2",
				},
			],
			level: "1",
		},
		{
			name: "Outreach",
			innerLinks: [
				{ name: "Events", link: "/outreach/events", level: "2" },
				{ name: "News", link: "/outreach/news", level: "2" },
			],
			level: "1",
		},
		{
			name: "Research",
			link: "http://rnd.iiti.ac.in/",
			level: "1",
		},
		{
			name: "Facilities",
			innerLinks: [
				{
					name: "Hostels",
					link: "http://hostel.iiti.ac.in/",
					level: "2",
				},
				{ name: "Guest House", link: "/guestHouse", level: "2" },
				{
					name: "Eateries",
					link: "http://eateries.iiti.ac.in/",
					level: "2",
				},
				{
					name: "Health Centre",
					link: "http://people.iiti.ac.in/~medical/",
					level: "2",
				},
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
				{
					name: "Nursery School",
					link: "http://people.iiti.ac.in/~creche/",
					level: "2",
				},
				{
					name: "E-Payments",
					link: "http://iiti.ac.in/page/e-payments",
					level: "2",
				},
				{
					name: "Transport Booking",
					link: "http://vbs.iiti.ac.in/",
					level: "2",
				},
				{
					name: "Green vehicle schedule",
					link: "https://www.iiti.ac.in/public/storage/Green%20vehicle%20schedule-%202021.pdf",
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
		<>
			{i === 1 && (
				<div className={show ? "mobileMenuOuter" : "mobileMenuOuter disappear"}>
					<div className={show ? "mobileMenu" : "mobileMenu dontShowMe"}>
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
			)}
		</>
	);
};
