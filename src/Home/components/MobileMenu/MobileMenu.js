import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./MobileMenu.css";
import { MobileMenuLinks } from "./MobileMenuLinks";
import iaoBrochure from "../../../assets/Institute Brochure-IAO.pdf";
// import { BsFillSquareFill } from "react-icons/bs";

export const MobileMenu = ({ show, setShow, i }) => {
	const [links] = useState([
		{
			name: "Home",
			link: "/",
			level: "1",
		},
		{
			name: "About Us",
			innerLinks: [
				{
					name: "About Us",
					innerLinks: [
						{ name: "About IAO", link: "/Aboutiao", level: "3" },
						{ name: "About IITI", link: "/Aboutiiti", level: "3" },
						{ name: "Campus Life", link: "/LifeIITI", level: "3" },
						{ name: "Places To Visit", link: "/Pros/places", level: "3" },
						{ name: "IAO Brochure", link: iaoBrochure, document: true, level: "3" },
					],
					level: "2",
				},
				{
					name: "People",
					innerLinks: [
						{
							name: "International Affairs",
							link: "/people/oia",
							level: "3",
						},
						{ name: "SIA Cell", link: "/people/sc", level: "3" },
						{ name: "Outreach Committee", link: "/committee/oc", level: "3" },
						{ name: "ISMAE Committee", link: "/committee/mec", level: "3" },
					],
					level: "2",
				},
				{
					name: "Facilities",
					innerLinks: [
						{
							name: "Hostels",
							link: "http://hostel.iiti.ac.in/",
							level: "3",
						},
						{ name: "Guest House", link: "/guestHouse", level: "3" },
						{
							name: "Eateries",
							link: "http://eateries.iiti.ac.in/",
							level: "3",
						},
						{
							name: "Health Centre",
							link: "http://people.iiti.ac.in/~medical/",
							level: "3",
						},
						{
							name: "Counselling Cell",
							link: "http://iiti.ac.in/page/counselling-cell",
							level: "3",
						},
						{
							name: "Training and Placement",
							link: "http://placement.iiti.ac.in/",
							level: "3",
						},
						{
							name: "Computer and IT Center",
							link: "http://cc.iiti.ac.in/",
							level: "3",
						},
						{
							name: "Nursery School",
							link: "http://people.iiti.ac.in/~creche/",
							level: "3",
						},
						{
							name: "E-Payments",
							link: "http://iiti.ac.in/page/e-payments",
							level: "3",
						},
						{
							name: "Transport Booking",
							link: "http://vbs.iiti.ac.in/",
							level: "3",
						},
						{
							name: "Green vehicle schedule",
							link: "https://www.iiti.ac.in/public/storage/Green%20vehicle%20schedule-%202021.pdf",
							level: "3",
						},
						{
							name: "KV IIT Indore",
							link: "https://www.iitindore.kvs.ac.in/",
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "Academics and Research",
					innerLinks: [
						{ name: "Research and Development", link: "http://rnd.iiti.ac.in/", level: "3" },
						{ name: "Academic Programs", link: "https://academic.iiti.ac.in/", level: "3" },
					],
					level: "2",
				},
				{
					name: "Engage With Us",
					innerLinks: [
						{ name: "Contact", link: "/contact", level: "3" },
						{ name: "News and Activities", link: "/outreach/news", level: "3" },
					],
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
							name: "Visitors' Experience",
							link: "/Pros/visitors_experience",
							level: "3",
						},
						{
							name: "Places To Visit",
							link: "/Pros/places",
							level: "3",
						},
						{
							name: "International Students' List",
							link: "/int/students",
							level: "3",
						},
						{
							name: "International Visitors",
							link: "/int/visitors",
							level: "3",
						},
						{ name: "Campus Life", link: "/people/sc", level: "3" },
					],
					level: "2",
				},
				{
					name: "Academics and Research",
					innerLinks: [
						{ name: "Research and Development", link: "http://rnd.iiti.ac.in/", level: "3" },
						{ name: "Academic Programs", link: "https://academic.iiti.ac.in/", level: "3" },
					],
					level: "2",
				},
				{
					name: "Students",
					innerLinks: [
						{
							name: "Admission",
							link: "/admission",
							level: "3",
						},
						{
							name: "Programs",
							link: "https://academic.iiti.ac.in/academic_program.php",
							level: "3",
						},
						{
							name: "Visa Process",
							link: "/visa",
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "Researchers",
					innerLinks: [
						{
							name: "Visa Process",
							link: "/visa",
							level: "3",
						},
						{ name: "IAO Brochure", link: iaoBrochure, document: true, level: "3" },
					],
					level: "2",
				},
				{
					name: "Opportunities",
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
					],
					level: "2",
				},
				{
					name: "MHRD Schemes",
					innerLinks: [
						{
							name: "GIAN",
							link: "/mhrd/gian",
							level: "3",
						},
						{
							name: "VAJRA",
							link: "/mhrd/vajra",
							level: "3",
						},
						{
							name: "SPARC",
							link: "/mhrd/sparc",
							level: "3",
						},
						{
							name: "ASEM - DUO",
							link: "/mhrd/asem",
							level: "3",
						},
					],
					level: "2",
				},
			],
			level: "1",
		},
		{
			name: "Outbound",
			innerLinks: [
				{
					name: "Students",
					innerLinks: [
						{
							name: "French Scholarships",
							level: "3",
							innerLinks: [
								{
									name: "Raman-Charpak Fellowship",
									link: "http://www.cefipra.org/Raman_Charpak.aspx",
									level: "4",
								},
								{
									name: "CEFIPRA-ESONN Fellowship",
									link: "http://www.cefipra.org/Cefipra_ESONN.aspx",
									level: "4",
								},
								{
									name: "ENS Internship program",
									link: "http://www.ens-lyon.fr/en/studies/admissions/application-research-internship",
									level: "4",
								},
							],
						},
						{
							name: "Japanese Scholarships",
							level: "3",
							innerLinks: [
								{
									name: "JSPS",
									link: "https://www.jsps.go.jp/english/",
									level: "4",
								},
								{
									name: "MEXT Scholarship",
									link: "https://www.in.emb-japan.go.jp/Education/japanese_government_scholarships.html",
									level: "4",
								},
							],
						},
						{
							name: "German Scholarships",
							level: "3",
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
									link: "https://www.igstc.org",
									level: "4",
								},
								{
									name: "German Language",
									link: "https://www.goethe.de/ins/in/en/sta/new.html",
									level: "4",
								},
								{
									name: "Indo-German Training Centre",
									link: "https://indien.ahk.de/education/indo-german-training-centre",
									level: "4",
								},
								{
									name: "ISG",
									link: "https://www.indianstudentsgermany.org/",
									level: "4",
								},
							],
						},
						{
							name: "Canadian Scholarships",
							level: "3",
							innerLinks: [
								{
									name: "Indo-Shastri Canadian Institute",
									link: "https://www.shastriinstitute.org/",
									level: "4",
								},
								{
									name: "Indo-Canada Education Council",
									link: "https://indocanadaeducation.org/",
									level: "4",
								},
								{
									name: "MITACS",
									link: "https://www.mitacs.ca/en/programs/globalink/come-to-canada",
									level: "4",
								},
							],
						},
						{
							name: "UK Scholarships",
							level: "3",
							innerLinks: [
								{
									name: "British Council India",
									link: "https://www.britishcouncil.in/study-uk/scholarships",
									level: "4",
								},
								{
									name: "UKRI India",
									link: "https://www.ukri.org/our-work/collaborating-internationally/our-international-offices/ukri-india/",
									level: "4",
								},
								{
									name: "Charles Wallace India Trust",
									link: "https://www.charleswallaceindiatrust.com/",
									level: "4",
								},
								{
									name: "Commonwealth Scholarships",
									link: "https://www.britishcouncil.in/study-uk/scholarships/commonwealth-scholarships",
									level: "4",
								},
								{
									name: "GREAT Scholarships India",
									link: "https://study-uk.britishcouncil.org/scholarships/great-scholarships/india",
									level: "4",
								},
								{
									name: "Newton Bhabha Fund",
									link: "https://www.britishcouncil.in/programmes/higher-education/newton-fund",
									level: "4",
								},
							],
						},
						{
							name: "Other Scholarships",
							level: "3",
							innerLinks: [
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
						},
						{
							name: "Other Important Opportunities",
							innerLinks: [
								{ name: "Internships", link: "/opportunities/internships", level: "4" },
								{
									name: "PG / Ph.D. / Post-Doc",
									link: "/opportunities/pg_phd_post_doc",
									level: "4",
								},
							],
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "Researchers",
					innerLinks: [
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
							name: "Researchers",
							innerLinks: [
								{
									name: "Indo-French",
									link: "http://www.cefipra.org/",
									level: "4",
								},
								{
									name: "Indo-Japan",
									link: "https://www.jsps.go.jp/english/",
									level: "4",
								},
								{
									name: "Indo-USA",
									link: "https://www.iusstf.org/",
									level: "4",
								},
								{
									name: "Indo-UK",
									link: "https://www.ukri.org/our-work/collaborating-internationally/our-international-offices/ukri-india/",
									level: "4",
								},
								{
									name: "Indo-ASEAN",
									link: "https://aistic.gov.in/ASEAN/HomePage",
									level: "4",
								},
								{
									name: "Indo-Canada",
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
			name: "Cooperation and Engagements",
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
					name: "Student Visits",
					innerLinks: [
						{
							name: "America",
							link: "/mobility/student/america",
							level: "3",
						},
						{
							name: "Europe",
							link: "/mobility/student/europe",
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "Faculty Visits",
					innerLinks: [
						{
							name: "Africa",
							link: "/mobility/faculty/africa",
							level: "3",
						},
						{
							name: "America",
							link: "/mobility/faculty/america",
							level: "3",
						},
						{
							name: "Asia",
							link: "/mobility/faculty/asia",
							level: "3",
						},
						{
							name: "Australia",
							link: "/mobility/faculty/australia",
							level: "3",
						},
						{
							name: "Europe",
							link: "/mobility/faculty/europe",
							level: "3",
						},
						{
							name: "Other Countries",
							link: "/mobility/faculty/others",
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "International Grants",
					innerLinks: [
						{
							name: "Bilateral Intl. Grants",
							link: "/grants",
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "MHRD Schemes",
					innerLinks: [
						{
							name: "GIAN",
							link: "/mhrd/gian",
							level: "3",
						},
						{
							name: "VAJRA",
							link: "/mhrd/vajra",
							level: "3",
						},
						{
							name: "SPARC",
							link: "/mhrd/sparc",
							level: "3",
						},
						{
							name: "ASEM - DUO",
							link: "/mhrd/asem",
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
			name: "Outreach",
			innerLinks: [
				{
					name: "Lecture Series",
					innerLinks: [
						{
							name: "Nobel Laureate Lectures",
							link: "/outreach/nobel",
							level: "3",
						},
						{
							name: "Frontiers in Physics",
							link: "/outreach/events/frontiers",
							level: "3",
						},
						{
							name: "Hardy Ramanujan Lecture Series",
							link: "/outreach/events/ramanujan",
							level: "3",
						},
						{
							name: "Public Lectures",
							innerLinks: [
								{
									name: "Automotive Light-weighting Technologies",
									link: "/outreach/events/automotive",
									level: "4",
								},
								{
									name: "Prosperity Through Science Technology",
									link: "/outreach/events/prosperity",
									level: "4",
								},
								{
									name: "Role of Science in Nation Building during Global Health Crisis",
									link: "/outreach/events/health",
									level: "4",
								},
							],
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "Conferences and Seminars",
					innerLinks: [
						{
							name: "Chemistry Talks",
							link: "/outreach/chem",
							level: "3",
						},
						{
							name: "Nobel Prizes 2020",
							link: "/outreach/events/nobelPrizes",
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "Events and Activities",
					innerLinks: [
						{
							name: "National Science Day",
							link: "/outreach/nsd",
							level: "3",
						},
					],
					level: "2",
				},
				{
					name: "Visits of School Kids",
					link: "/",
					level: "2",
				},
				{
					name: "Engagement with Engineering Colleges",
					link: "/",
					level: "2",
				},
			],
			level: "1",
		},
		{
			name: "Reach Us",
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
