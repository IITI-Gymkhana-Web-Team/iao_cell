import React from "react";
import { neelesh } from "../../../assets";

export const Director = () => {
	return (
		<div className="container bg-light font-ubuntu dean pb-5">
			<h1 className="mb-3">Director's Message</h1>
			<img src={neelesh} alt="dean" />
			<div className="text-justify">
				<p>
					As IIT Indore steps into the next decade, it carries forward the culture of
					excellence and hard work embedded in its working and social environment. It
					maintains a high national rank among the institutions of higher education and is
					now among the top 10 engineering institutes in the country. Over the last eight
					years, our graduating students have been engaged with best of national and
					international organizations across different verticals. Many of them have also
					chosen the less travelled path of entrepreneurship. It is indeed a proud moment
					for us when our students contribute to the society by creating jobs and changing
					lives. Our faculty colleagues have been showing immense perseverance to attain
					new heights of excellence in research, teaching, collaboration, and recently
					some of them ventured into the entrepreneurial field also. Teaching and research
					climate in the Institute has always been supported by the efficient
					administration.
				</p>
				<p>
					Since its inception IIT Indore has been collaborating with renowned Universities
					across the globe. In line with the greater emphasis given in New Education
					Policy (NEP) 2020 and various international and national ranking systems, our
					focus now is to maximize internationalization at IIT Indore to bring global
					competitiveness and excellence among the faculty members and students. To
					achieve this, we have increased the intake of international students from 10% to
					25% in all our PG programs in March 2021. Hybrid and online mode of teaching and
					research supervision have made greater involvement of international faculty in
					teaching and PG/PhD thesis supervision much easier. Therefore, we will maximize
					use of various initiatives of Ministry of Education (MoE), Govt. of India such
					as GIAN, VAJRA, SPARC, etc. to significantly increase involvement of
					international faculty members in teaching and research at IIT Indore. Efforts
					will also be made to recruit international faculty members for 5 year or more
					duration as per Govt. of India policy.
				</p>
				<p>
					We will focus on different region of the globe to maximize admission of
					international student using various of MoE such as Study-in-India (SII), ASEAN
					Fellowship program for PhD admission, ICCR fellowships for the international
					students and our own brand image and initiatives. I am sure that very soon IIT
					Indore will have a significant number of international faculties and students
					imparting us global excellence and competitiveness edge in academics, research,
					and entrepreneurship.
				</p>
				<h3 className="font-acme text-left mb-0">Professor Neelesh Kumar Jain</h3>
				<h4 className="font-acme text-left mb-5">Director, IIT Indore</h4>
			</div>
		</div>
	);
};
