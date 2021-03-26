import React from "react";
import { iiti, iiti2, hindex, citation, ranks } from "../../../assets";
import "./AboutIITI.css";

export const AboutIITI = () => {
	return (
		<div className="container font-ubuntu aboutIITI pb-5">
			<h1 className="mainTitle text-center m-3">About IITI</h1>
			<img src={iiti} style={{ float: "right", maxWidth: "max(400px,45%)" }} />
			<p>
				In keeping with India’s vision to become a world leader in Science and Technology
				and to usher in a new revolution, resulting in an unprecedented economic growth,
				Government of India reassessed the need of technical manpower and decided to set up
				eight new IITs. Six of them started functioning back from the academic year 2008-09.
				These were established at Hyderabad, Gandhinagar, Rajasthan, Ropar, Patna and
				Bhubaneswar. IIT Indore and IIT Mandi started functioning from July 2009.
			</p>
			<p>
				Indian Institute of Technology Indore located in Madhya Pradesh, known as IIT Indore
				or IITI, is an institute of national importance established by the Government of
				India in 2009. It is one of the eight new IITs, started by the Ministry of Human
				Resource Development (India), Government of India. The institution started
				functioning from 2009-10 in a temporary campus at Institute of Engineering and
				Technology of Devi Ahilya University, Indore under the mentorship of IIT Bombay.
				Shri Arjun Singh, the Union HRD minister, laid the foundation of the permanent
				campus, spread over an area of around 501.42-acre (2.1 sq. km), on 17th February
				2009 at Simrol, a location on Khandwa Road about 25 km from the city of Indore.
			</p>
			<p>
				Indian Institute of Technology Indore located in Madhya Pradesh, known as IIT Indore
				or IITI, is an institute of national importance established by the Government of
				India in 2009. It is one of the eight new IITs, started by the Ministry of Human
				Resource Development (India), Government of India. The institution started
				functioning from 2009-10 in a temporary campus at Institute of Engineering and
				Technology of Devi Ahilya University, Indore under the mentorship of IIT Bombay.
				Shri Arjun Singh, the Union HRD minister, laid the foundation of the permanent
				campus, spread over an area of around 501.42-acre (2.1 sq. km), on 17th February
				2009 at Simrol, a location on Khandwa Road about 25 km from the city of Indore.
			</p>
			<p>
				As IIT Indore steps into the next decade, it carries forward the culture of
				excellence and hard work embedded in its social environment. It maintains a high
				national rank among the institutions of higher education and is now among the top 10
				engineering institutes in the country. Over the last eight years, our graduating
				students have been engaged with the best corporations, in India and worldwide,
				across different verticals. Many have also chosen the less travelled path of
				entrepreneurship. It is indeed a proud moment for us when our students contribute to
				the society by creating jobs and changing lives. Our faculty colleagues, along with
				their researchers in the last one decade, have also shown immense perseverance to
				attain new heights of excellence.
			</p>
			<img
				src={iiti2}
				style={{ float: "left", maxWidth: "max(400px,45%)", marginRight: "10px" }}
			/>
			<p>
				The teaching and research climate in the institute has been supported by efficient
				administration. Having been granted its first patent, the institute has renewed its
				focus on patenting along with publishing. The key focus is to engage with MSMEs,
				start-ups and transfer technology. Efforts are also underway towards liaison and
				collaboration with grassroot-level organizations, to contribute to the development
				of our immediate neighborhood through technological innovation. I, on behalf of the
				Institute, congratulate all our graduates and wish them success in the future. 2020
				is no ordinary year – the normal has been redefined worldwide in a way that has
				posed major challenges for the education sector.
			</p>
			<p>
				The IIT Indore community has responded by innovating in all the domains, across
				teaching, research, and administration. The institute used asynchronous as well as
				synchronous modes of teaching, successfully completed the Spring semester in a
				timely manner, and continued with academic activities. The research on much needed
				COVID-19 related projects also continued unabated during the lockdown. We initiated
				the return of researchers to the campus, with all the due precautions for everyone’s
				safety, to restart the laboratories. Even during such trying times, our
				infrastructure team continued the hard work and did not allow any compromise on the
				high standards the institute has set for itself.
			</p>
			<h3 className="font-acme mt-5">Citations and H Index</h3>
			<div className="charts">
				<img src={citation} />
				<img src={hindex} />
				<img src={ranks} style={{ width: "100%", marginTop: "20px" }} />
			</div>
			<p>
				<br />
				For more information about IIT Indore, please visit -{" "}
				<a href="http://iiti.ac.in/" target="_blank">
					http://iiti.ac.in/
				</a>
			</p>
		</div>
	);
};
