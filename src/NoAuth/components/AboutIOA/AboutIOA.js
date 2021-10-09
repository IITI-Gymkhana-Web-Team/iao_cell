import React from "react";
import { Link } from "react-router-dom";

export const AboutIOA = () => {
	return (
		<div className="container pb-5 text-justify">
			<h2 className="mainTitle text-center m-3 mb-4">About Us</h2>
			<h3 className="mainTitle mt-5">International Affairs and Outreach</h3>
			<p>
				IIT Indore is rapidly expanding globally with an aim to internationalize its
				teaching and research portfolio. Currently, we are collaborating intensely with
				counties across North America, Europe, Asia, and Oceania. In continuation to the
				previous year, this year we had notable progress on three fronts. First, we were
				successful in recruiting and hosting many international students in our degree
				programs (from ASEAN and SAARC regions). Second, we secured multiple grants from our
				Ministry of Education, which is feeding well into our internationalization
				endeavors. Third, we expanded our footprint further in Europe.
			</p>
			<h3 className="mainTitle mt-4">Recruitment of Foreign Students</h3>
			<p>
				Continuing the upward trajectory in recruiting foreign students in our degree
				programs, in 2019-20, we hosted 03 international students who pursued their Master’s
				degrees in various disciplines at IIT Indore. These students were from SAARC nations
				(Bangladesh and Nepal) and joined us through the Study in India (SII) program. This
				year also we have got 01 student admitted from Nigeria in ME. Although IIT Indore
				has been hosting foreign internship students since its inception, this past year was
				path breaking because we hosted 06 Thai exchange students who took regular courses
				as well. This has helped us establish our brand in ASEAN countries, and specifically
				Thailand
			</p>
			<h3 className="mainTitle mt-4">MHRD Initiatives</h3>
			<p>
				GIAN, VAJRA, SPARC and ASEM-DUO are the recent Ministry of Education initiatives
				that aim to improve the research and teaching ecosystem of India’s higher education.
				In the year 2019-20, a substantial number of such Projects were awarded to IIT
				Indore.
			</p>
			<ol>
				<li>
					<Link to="/mhrd/gian">GIAN Courses - 07</Link>
				</li>
				<li>
					<Link to="/mhrd/vajra">VAJRA Fellowships - 03</Link>
				</li>
				<li>
					<Link to="/mhrd/sparc">SPARC Projects – 09</Link>
				</li>
				<li>
					<Link to="/mhrd/asem">ASEM-DUO Fellowships – 06</Link>
				</li>
			</ol>
		</div>
	);
};
