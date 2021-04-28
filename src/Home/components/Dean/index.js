import React from "react";
import { Link } from "react-router-dom";
import { av2 } from "../../../assets";
import "./Dean.css";

export const Dean = () => {
	return (
		<div className="container bg-light font-ubuntu dean pb-5">
			<h1 className="mb-3">Dean's Message</h1>
			<img src={av2} alt="dean" />
			<div className="text-justify">
				<p>
					<b>IIT Indore</b> has centralized office for
					<b> International Affairs and Outreach</b> to oversee and coordinate the
					relevant activities. We deal with the partner Universities across the globe for
					academic and research collaborations, which facilitate opportunities to IITI and
					partner institute’s students and faculties for mobility, research, exchange, and
					internships. IITI is establishing linkage with renowned Universities of the
					world. We have signed several Memorandum of Understandings (MoUs) with various
					Universities / Institutions across the globe to promote bilateral grants,
					mobility programs, international fellowships, and other MHRD initiatives like{" "}
					<Link to="/mhrd/sparc">SPARC</Link>, <Link to="/mhrd/vajra">VAJRA</Link> and
					<Link to="/mhrd/gian"> GIAN </Link>
					for students and faculties over the last decade.
				</p>
				<p>
					Moreover, our office is contributing more to develop strong and sustainable
					international partnerships with research laboratories, academic institutions,
					industry, and entrepreneurs in order to internationalize teaching and research
					activities of the institution.
				</p>
				<p>
					We are exploring various schemes of Government of India such as <b>SII</b>,{" "}
					<b>ICCR</b> and <b>ASEAN</b> to attract foreign students to continue their
					higher studies at IITI . We aim to facilitate learning, personal growth, and
					cultural understanding through active participation by reaching eminent
					institution/organizations across the globe. We have expanded more efforts for
					IITI faculty members and students with an aim to explore the
					internationalization of higher education with all the geographical regions of
					the world.
				</p>
				<p>
					We have a setup of world class
					facilities / teaching aids for conducting online classes / webinars / events for
					international students. In addition, we are also forming relations with the
					Embassies of various countries and their Consulates to promote various academic
					and research activities, students exchange, cultural exchange and other
					educational programs.
				</p>
				<p>
					We would be happy to hear from the foreign Universities/institutions seeking
					partnership with IITI, or international students seeking opportunities at IITI.
				</p>
				<h3 className="font-acme text-left mb-0">Professor Avinash Sonawane</h3>
				<h4 className="font-acme text-left mb-5">
					Dean of International Affairs & Outreach
				</h4>
			</div>
		</div>
	);
};
