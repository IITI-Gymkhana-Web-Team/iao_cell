import React, { useState, useEffect } from "react";
import {
	d1,
	d2,
	e1,
	e2,
	e3,
	g,
	gh,
	h1,
	h2,
	lh1,
	lh2,
	lh3,
	lh4,
	lh5,
	lr,
	ss1,
	ss2,
	t1,
	t2,
} from "../../../assets";
import "./Life.css";
import Iframe from "react-iframe";

export const LifeIITI = () => {
	const [width, setWidth] = useState("650px");
	const [height, setHeight] = useState("366px");

	const updateDimensions = () => {
		if (window.innerWidth <= 350) {
			setWidth("300px");
			setHeight("169px");
		} else if (window.innerWidth <= 600) {
			setWidth("400px");
			setHeight("225px");
		} else {
			setWidth("650px");
			setHeight("366px");
		}
	};

	useEffect(() => {
		updateDimensions();
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, [window.innerWidth]);

	return (
		<div className="container font-ubuntu lifeIITI text-justify">
			<h1 className="mainTitle text-center m-3">Campus Life At IITI</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				className="mb-5 mt-5"
			>
				<Iframe
					width={width}
					height={height}
					src="https://www.youtube.com/embed/ASnDC7AhP3k"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></Iframe>
			</div>
			<p>
				IITI Campus is equipped with accommodation facilities and amenities of international
				standards with a 05 Hall of residence to accommodate students inside the campus in
				the middle of nature with greeneries around and the safety and security of the
				resident.
			</p>
			<h3 className="mainTitle mt-4">Hall of Residence</h3>
			<p>
				IIT Indore provides 5 BHK unit to accommodate five students with one student per
				bedroom with the following facilities:
			</p>
			<ul>
				<li>Large spacious rooms with Cot, Almirah, Study Table and Chair</li>
				<li>Refrigerator</li>
				<li>Telephone</li>
				<li>RO Drinking Water</li>
				<li>Hot Water</li>
				<li>Wi-Fi Connection & LAN port</li>
				<li>Individual Attached Bathroom for each unit</li>
			</ul>
			<div className="pic3">
				<img src={lh1} />
				<img src={lh2} />
				<img src={lh3} />
			</div>
			<p>Common facilities for all the resident students:</p>
			<ul>
				<li>Dining Hall </li>
				<li>Gymnasium </li>
				<li>Sports facilities (Table Tennis, Football, Volleyball, Badminton, etc.) </li>
				<li>Transport </li>
				<li>Health Centre (Common for all) </li>
				<li>Canara Bank </li>
				<li>ATM of Canara Bank, State Bank, and HDFC Bank </li>
				<li>Printing Facility </li>
				<li>Xpress Laundromat</li>
				<li>La Fresco Store </li>
				<li>Saloon</li>
			</ul>
			<div className="pic3">
				<img src={lh4} />
				<img src={lh5} />
				<img src={lh3} />
			</div>
			<p>
				For more information about the Hall of residence @ IIT Indore, please visit -{" "}
				<a target="_blank" href="http://hostel.iiti.ac.in/main">
					http://hostel.iiti.ac.in/main
				</a>
			</p>
			<h3 className="mainTitle mt-4">Eateries</h3>
			<div className="pic3">
				<img src={e1} />
				<img src={e2} />
				<img src={e3} />
			</div>
			<p>
				IITI Campus has a central Dining facility, bakery, Amul parlor on campus to provide
				hygienic and healthy food as per their choice. Dining Facilities by registered
				vendors are the main eateries available.
			</p>
			<h3 className="mainTitle mt-4">Dining Hall</h3>
			<div className="pic3 pic2">
				<img src={d1} />
				<img src={d2} />
			</div>
			<p>
				IITI Campus has one big dining hall with an inside sitting area. Our food vendors
				provide hygienic food for breakfast, lunch, and dinner. This hall includes 02 food
				outlets for the students, staff, and faculties. This dining hall is equipped with a
				toaster, water cooler with RO filter, and bakery shop for sweets, pizza, sandwiches,
				and pastries.
			</p>
			<h3 className="mainTitle mt-4">Health Centre</h3>
			<div className="pic3 pic2">
				<img src={h1} />
				<img src={h2} />
			</div>
			<p>
				The Health Centre of the Indian Institute of Technology Indore provides dedicated
				health services to the institute community comprising of students, employees, their
				dependents, and Institute Guests. The Health Centre offers Outpatient, Daycare,
				Trauma, and Emergency Care.
			</p>
			<p>
				For more information about Health Centre @ IIT Indore, please visit -{" "}
				<a href="http://people.iiti.ac.in/~medical/">http://people.iiti.ac.in/~medical/</a>
			</p>
			<h3 className="mainTitle mt-4">Learning resource Centre (LRC)</h3>
			<img
				src={lr}
				style={{
					maxWidth: "max(50%, 400px)",
					float: "left",
					margin: "10px",
				}}
			/>
			<p>
				Learning Resource Centre has a collection of 36790+ books at present. These include
				books on all relevant subjects for teaching, reference, and research in addition to
				fiction, literature, and general interest books to take care of the leisure and
				recreational reading needs of users. The LRC has also developed special collections
				such as Gandhian Studies, Hindi books, Children’s books, etc. Online Information
				Resources are vital for academic and research institutes in today’s knowledge
				economy. The LRC provides its users access to more than 2540+ e-journals. In
				addition to this, the LRC provides access to bibliographic databases such as
				SciFinder Scholar, and MathSciNet, among others. The Reading Hall provides a
				peaceful environment conducive to study.
			</p>
			<p>
				For more information about LRC @ IIT Indore, please visit -{" "}
				<a href="http://library.iiti.ac.in/">http://library.iiti.ac.in/</a>
			</p>
			<div>
				<h3 className="mainTitle mt-4">Gymkhana (Student Body)</h3>
				<img src={g} style={{ maxWidth: "max(40%, 400px)", float: "right" }} />
				<p>
					Student Gymkhana is the student body of IIT Indore. The senate consists of two
					wings, i.e., the Executives and the Councilors. The students' elected
					representatives strive to foster growth and leadership among the students by
					coordinating various events to extract the maximum of one's talent. To promote
					co-curricular activities and interests, the gymkhana has many clubs and groups
					dedicated to the students' interests.
				</p>
				<p>
					For more information about Gymkhana @ IIT Indore, please visit -{" "}
					<a href="http://gymkhana.iiti.ac.in/#home">http://gymkhana.iiti.ac.in/#home</a>
				</p>
			</div>
			<h3 className="mainTitle mt-5">Counselling Cell:</h3>
			<p>
				University life can be fun and fulfilling, providing students with various
				opportunities to acquire new skills and knowledge and develop their character. This
				is an essential milestone before they join the workforce and launch their career.
				However, adjusting to a new environment away from home and managing academic and
				personal demands may induce high stress and anxiety levels. Confiding in family or
				friends is an excellent coping strategy. Suppose the issues being faced by a student
				persist over a long period. In that case, it may be imperative to seek professional
				help. IIT-Indore has a Student Counselling Centre in place that offers a supportive
				and conducive environment for a student wherein he/she can discuss personal issues
				or academic challenges and seek help from a professional counselor. The counselor
				can provide service and support for students from diverse religious, cultural, and
				ethnic backgrounds. A counselor's role is to offer support to the students to deal
				with a wide range of concerns -be it academic, personal, emotional, family, or
				peer-related. With the help of the students, parents, other departments, and
				services at IIT Indore, the counseling center has been able to meet the needs of
				students effectively and wishes to continue working for the same.
			</p>
			<h2 className="mainTitle mt-4">Other Facilities</h2>
			<h3 className="mainTitle mt-4">Transport facility</h3>
			<div className="pic3 pic2">
				<img src={t1} />
				<img src={t2} />
			</div>
			<p>
				For within-campus movement, Green Vehicles ply regularly. Institute provides buses
				to the city for weekend shopping and recreation. Suppose a large group of students
				requires an additional transport facility. In that case, it can be arranged through
				a written request to respective authorities based on a moderate fee.
			</p>
			<h3 className="mainTitle mt-4">Guest House Facility</h3>
			<p>
				At IIT Indore, we have a fully furnished guest house of international standards for
				foreign visitors.
			</p>
			<img src={gh} style={{ width: "100%" }} />
			<h3 className="mainTitle mt-4">Safety & Security Section</h3>
			<div className="pic3 pic2">
				<img src={ss1} />
				<img src={ss2} />
			</div>
			<p>
				At IIT Indore, we understand the concern and accept our responsibility to enforce
				security policies to ensure our students enjoy their stay as free as possible from
				threats to their safety or well-being. The Department of Safety and Security
				coordinates campus Safety and security.
			</p>
			<p>
				IIT Indore's security department conducts patrols of the campus and residence areas
				24 hours a day. IIT Indore security department enforces all regulations and laws --
				both of the IIT and the Country. They also work cooperatively with the Indore Police
				Department to record incidents that may occur off-campus.
			</p>
			<p>
				For more information about Ek Bharat Shreshtha Bharat @ IIT Indore, please visit -{" "}
				<a href="http://iiti.ac.in/page/ek-bharat-shreshtha-bharat">
					http://iiti.ac.in/page/ek-bharat-shreshtha-bharat
				</a>
			</p>
		</div>
	);
};
