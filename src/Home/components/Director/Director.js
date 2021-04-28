import React from "react";
import { neelesh } from "../../../assets";

export const Director = () => {
	return (
		<div className="container bg-light font-ubuntu dean pb-5">
			<h1 className="mb-3">Director's Message</h1>
			<img src={neelesh} alt="dean" />
			<div className="text-justify">
				<p>
					Since its inception IIT Indore has been collaborating with the various
					Universities across the globe. We are exploring the possibilities to maximize
					the internationalization of higher education globally to enhance the excellence
					among the faculties and students.
				</p>
				<p>
					As IIT Indore steps into the next decade, it carries forward the culture of
					excellence and hard work embedded in its social environment. It maintains a high
					national rank among the institutions of higher education and is now among the
					top 10 engineering institutes in the country. Over the last eight years, our
					graduating students have been engaged with the best corporations, in India and
					worldwide, across different verticals. Many have also chosen the less travelled
					path of entrepreneurship. It is indeed a proud moment for us when our students
					contribute to the society by creating jobs and changing lives. Our faculty
					colleagues, in the last one decade, have also shown immense perseverance to
					attain new heights of excellence. The teaching and research climate in the
					institute has been supported by efficient administration.
				</p>
				<p>
					Ministry of Education, Govt. of India has taken a special initiative to increase
					the international perception of IITs by increasing the number of faculties and
					students through various programs such as SII, ASEAN, ICCR fellowships for the
					students and schemes like GIAN, VAJRA, SPARC for the faculty members. Recently,
					IIT Indore has increased the intake of foreign students to 25 % in our PG
					programs. I am sure that in years to come we will have a significant number of
					international faculties and students and that will improve our excellence in
					academics and research.
				</p>
				<h3 className="font-acme text-left mb-0">Professor Neelesh Kumar Jain</h3>
				<h4 className="font-acme text-left mb-5">Director, IIT Indore</h4>
			</div>
		</div>
	);
};
