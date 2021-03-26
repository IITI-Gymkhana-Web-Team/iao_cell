import React from "react";
import {
	c1,
	c2,
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
	lh6,
	lr,
	rnd,
	sa,
	sic,
	ss1,
	ss2,
	t1,
	t2,
} from "../../../assets";
import "./Life.css";

export const LifeIITI = () => {
	return (
		<div className="container font-ubuntu lifeIITI">
			<h1 className="mainTitle text-center m-3">Campus Life @ IITI</h1>
			<p>
				IITI Campus is equipped with accommodation facilities and amenities of international
				standards with 05 Hall of residence to accommodate students inside the campus in the
				middle of the nature with greeneries around and arrangement of safety and security
				of the resident.
			</p>
			<h3 className="mainTitle mt-4">Hall of Residence</h3>
			<p>
				IIT Indore provides 5 BHK unit to accommodate 5 students with one student per
				bedroom with following facilities:
			</p>
			<ul>
				<li>Large spacious rooms with Cot, Almirah, Study Table and Chair</li>
				<li>Refrigerator</li>
				<li> Telephone</li>
				<li>RO drinking Water</li>
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
				<li> Gymnasium </li>
				<li> Sports facilities (Table Tennis, Football, Volleyball, Badminton, etc.) </li>
				<li> Transport </li>
				<li> Health Centre (Common for all) </li>
				<li>Canara Bank </li>
				<li> ATM of Canara Bank, State Bank and HDFC Bank </li>
				<li> Printing Facility </li>
				<li>Xpress Laundroma </li>
				<li> La Fresco Store </li>
				<li> Saloon etc.</li>
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
				IITI Campus has central Dinning facility, bakery, amul parlour in the campus for the
				students to provide hygienic and healthy food as per their choice. Dinning
				Facilities by registered vendors are the main eateries available.
			</p>
			<h3 className="mainTitle mt-4">Dining Hall</h3>
			<div className="pic3 pic2">
				<img src={d1} />
				<img src={d2} />
			</div>
			<p>
				IITI Campus has one big dining hall with inside sitting area, where our food vendors
				provide the hygienic food for breakfast, lunch and dinner. This hall includes 02
				food outlets for the students, staffs and faculties. This dining hall is equipped
				with toaster, water cooler with RO filter and bakery shop for sweets, pizza,
				sandwiches and pastries.
			</p>
			<h3 className="mainTitle mt-4">Health Centre</h3>
			<div className="pic3 pic2">
				<img src={h1} />
				<img src={h2} />
			</div>
			<p>
				The Health Centre of the Indian Institute of Technology Indore provides dedicated
				health services to the institute community comprising of students, employees, their
				dependents and Institute Guests. The Health Centre offers Outpatient, Day care,
				Trauma and Emergency Care.
			</p>
			<p>
				For more information about Health Centre @ IIT Indore, please visit -{" "}
				<a href="http://people.iiti.ac.in/~medical/">http://people.iiti.ac.in/~medical/</a>
			</p>
			<h3 className="mainTitle mt-4">Learning resource Centre (LRC)</h3>
			<img src={lr} style={{ maxWidth: "max(50%, 400px)", float: "left", margin: "10px" }} />
			<p>
				Learning Resource Centre has a collection of 36790+ books at present. These include
				books on all relevant subjects for teaching, reference and research in addition to
				fiction, literature and general interest books to take care of the leisure and
				recreational reading needs of users. The LRC has also developed special collections
				such as Gandhian Studies, Hindi books, Children’s books, etc.Online Information
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
					wings i.e. the Executives and the Councilors. The elected representatives of the
					students strive to foster growth and leadership among the students by
					coordinating various events helping to extract the maximum of one’s talent. To
					promote the co-curricular activities and interests, the gymkhana has many clubs
					and groups dedicated to the interests of the students.
				</p>
				<p>
					For more information about Gymkhana @ IIT Indore, please visit -{" "}
					<a href="http://gymkhana.iiti.ac.in/#home">http://gymkhana.iiti.ac.in/#home</a>
				</p>
			</div>
			<h3 className="mainTitle mt-5">Counselling Cell:</h3>
			<p>
				University life can be fun and fulfilling, providing the students various
				opportunities to acquire new skills and knowledge, develop their character. This is
				an important milestone before they join the workforce and launch their career.
				However, adjusting to a new environment away from home and managing academic and
				personal demands may induce high levels of stress and anxiety. Confiding in family
				or friends is a good coping strategy but if the issues being faced by a student
				persist over a long period of time, it may be imperative to seek professional help.
				IIT-Indore has a Student Counselling Centre in place that offers supportive and
				conducive environment for a student wherein he/she can discuss personal issues or
				academic challenges and seek help from a professional counsellor. The counsellor is
				available to provide help and support for students from diverse religious, cultural
				and ethnic backgrounds. The role of a counsellor is to offer support to the students
				to deal with a wide range of concerns -be it academic, personal, emotional, family
				or peer related. With the support of the students, parents, other departments and
				services at IIT Indore, counselling center has been able to effectively meet the
				needs of students and wishes to continue working for the same.
			</p>
			<h2 className="mainTitle mt-4">Other Facilities</h2>
			<h3 className="mainTitle mt-4">Transport facility</h3>
			<div className="pic3 pic2">
				<img src={t1} />
				<img src={t2} />
			</div>
			<p>
				For within campus movement, Green Vehicles ply on regular basis. Institute provides
				buses to the city for weekend shopping and recreation. If a large group of students
				requires additional transport facility, it can be arranged through a written request
				to respective authorities based on a moderate fee.
			</p>
			<h3 className="mainTitle mt-4">Guest House Facility</h3>
			<p>
				At IIT Indore, we have fully furnished guest house of international standards for
				the foreign visitors.
			</p>
			<img src={gh} style={{ width: "100%" }} />
			<h3 className="mainTitle mt-4">Safety & Security Section</h3>
			<div className="pic3 pic2">
				<img src={ss1} />
				<img src={ss2} />
			</div>
			<p>
				At IIT Indore, we understand that concern and accept our responsibility to enforce
				security policies to ensure our students enjoy their stay at Indore as free as
				possible from threats to their safety or well-being. Campus safety and security are
				coordinated by the Department of Safety and Security.
			</p>
			<p>
				IIT Indore security department personnel conduct patrols of the campus and residence
				areas 24 hours a day. IIT Indore security department enforce all regulations and
				laws -- both of the IIT and the Country. They also work cooperatively with the
				Indore Police Department to record incidents that may occur off campus.
			</p>
			<h2 className="mainTitle mt-4">ACADEMICS AND RESEARCH</h2>
			<p>IIT Indore has 11 departments:</p>
			<ol>
				<li>Astronomy, Astrophysics and Space Engineering </li>
				<li>Biosciences and Biomedical Engineering </li>
				<li>Chemistry </li>
				<li>Civil Engineering </li>
				<li>Computer Science and Engineering </li>
				<li>Electrical Engineering </li>
				<li>Humanities and Social Sciences </li>
				<li>Mathematics </li>
				<li>Mechanical Engineering 1</li>
				<li>Metallurgy Engineering and Materials Science 1</li>
				<li>Physics</li>
			</ol>
			<p>
				For more information about departments @ IIT Indore, please visit -{" "}
				<a href="http://iiti.ac.in/departments">http://iiti.ac.in/departments</a>
			</p>
			<h2 className="mainTitle mt-4">CENTRAL FACILITIES</h2>
			<h3 className="mainTitle mt-4">
				Centre for Innovation, Incubation, Entrepreneurship, and Industry Relations (CIIEIR)
			</h3>
			<img src={c1} style={{ width: "max(40%, 400px)" }} />
			<p>
				CIIEIR was established in 2016. CIIEIR is an umbrella setup at IIT Indore for
				fostering entrepreneurship and nurturing the start-ups. It administers a business
				incubator which provides ‘Start to scale’ support for technology-based
				entrepreneurship and facilitates the conversion of research activity into
				entrepreneurial ventures.
			</p>
			<p>
				CIIEIR Aims to transform knowledge and Innovation into the creation of successful
				innovative entrepreneurs. Mentoring and developing competitiveness, Innovation,
				enhancing links between Industry and students to enable them to develop emerging
				technology and be the best entrepreneurs.
			</p>
			<h3 className="mainTitle mt-4">Central Workshop</h3>
			<img src={c2} style={{ width: "100%" }} />
			<p>
				The IITI Central Workshop is equipped with modern state-of-the-art instruments.
				Currently, the workshop is having seven shops: Machining, Welding, Forming, Foundry,
				Injection Molding, Fitting and Carpentry. It is supported by a team of extremely
				skilled operators. Apart from industrial manufacturing work it also provides
				hands-on-training to students/operators involved in research and development of
				industry or academics in production and fabrication of mechanical components. The
				projects and manufacturing divisions satisfy industrial standards and requirements
				and also bridge the gap between industry and academia. Completion of a project in a
				time-bound, cost-effective framework maintaining high quality of products is the
				aim. The workshop provides excellence and problem specific solutions to industries
				and research organization, apart from teaching students on handling the facilities.
			</p>
			<h3 className="mainTitle mt-4">Sophisticated Instrumentation Centre (SIC)</h3>
			<img src={sic} style={{ width: "max(40%, 400px)", float: "right" }} />
			<p>
				SIC was established in September 2011 with institute funding to expedite research
				programs at IIT Indore. The SIC mission is to support and foster research efforts in
				Science and Engineering at IIT Indore by providing state-of-the-art instrumentation
				and ancillary equipment, and expertise in its use and application. The SIC is
				equipped with Single Crystal X- ray Diffraction, Nuclear Magnetic Resonance, High
				Resolution Mass Spectrometry, Elemental Analysis, Single Molecule Imaging
				Spectroscopy and other Spectroscopic facilities together under one roof to provide
				the highest quality data for analysis to research groups and students. With the
				existence of excellent facilities and high level of expertise, SIC offers analytical
				services within the Institute as well as for external organizations.
			</p>
			<p>
				SIC has now emerged as one of the first centers in central India providing extensive
				support to users across the country. It is also thriving to become a self-sustained
				center by generating funds from services provided to users from academia and
				industry. A major advantage of SIC is its accessibility to students within the
				Institute, a very healthy ratio of students to the time availability on instruments.
			</p>
			<p>
				The SIC instruments strengthens the following research areas: Fundamental Research
				in Inorganic Chemistry, Organic Chemistry, Organometallic Chemistry, Various aspects
				of Material Science, Bio Science and Engineering including work on Biosensors,
				Materials Science and Engineering, and Condensed Matter Physics.
			</p>
			<p>
				Recently many new facilities viz. online form submission and dissemination of data,
				revamping of safety and security of the center and hands on training of students for
				equipment like single crystal X-ray crystallography are introduced. Further hands-on
				training workshop for researchers has been planned which is going to be conducted
				once the pandemic situation improves.
			</p>
			<h3 className="mainTitle mt-4">Centre for Advanced Electronics (CAE)</h3>
			<p>
				Centre for Advanced Electronics (CAE) has been established at IIT Indore as an
				interdisciplinary research centre which aims to develop materials, devices &
				technologies for multidisciplinary applications including computing, communication,
				medical and energy. The CAE has brought some of the academicians at IIT Indore,
				working in electronics and its allied areas, under one technical roof to enable high
				quality applied research for the benefit of mankind. We are honored to have on board
				some of the renowned academicians, in electronics and related areas, across the
				globe as our advisors. The CAE is committed to come up as a platform for applied
				research, device development, skill & manpower development in the nationally
				important area of electronics.
			</p>
			<h3 className="mainTitle mt-4">Computer Center (CC)</h3>
			<p>
				The Computer and Information Technology Center is solely responsible for keeping the
				Information and Communication Technology & Computation related facilities available
				to every member of IIT Indore.These facilities are constantly upgraded to meet the
				evolving standards of IIT. The Computer Labs remain open for twelve hours (8:00 AM
				to 8:00PM) in a day and the students visit the labs for their general and routine
				computing tasks. Many departments use the facilities of the Computer Lab to conduct
				their practical classes & examinations. The campus LAN will be extending to all the
				hostels and residences. New hardware and software are procured on a regular basis so
				as to provide a state-of-the-art computing facility to the IIT Indore family.
			</p>
			<h3 className="mainTitle mt-4">DST-FIST Center of Excellence in Gear Engineering</h3>
			<p>
				IIT Indore has established DST-FIST Center of Excellence in Gear Engineering in
				2015.
			</p>
			<h3 className="mainTitle mt-4">
				Center of Futuristic Defense and Space Technology (CFDST)
			</h3>
			<p>
				IIT Indore has started work towards the establishment of the Center of Futuristic
				Defense and Space Technology (CFDST). The Centre would be functioning with the
				objectives to establish collaboration with defense and space organizations and help
				them find solutions for existing and futuristic technologies.
			</p>
			<h3 className="mainTitle mt-4">Centre for Rural Development and Technology (CRDT):</h3>
			<p>
				CRDT Centre of IIT Indore is started to address challenges faced by rural areas and
				to improve their living. It has made substantial contributions by developing and
				transferring technologies in rural areas including sanitation, cleanliness and water
				and waste management etc.
			</p>
			<h3 className="mainTitle mt-4">Training and Placement:</h3>
			<p>
				The Placement Cell handles all facets of campus placements for the graduating
				students of IIT Indore and involves in establishing long term relations with
				companies and ensuring efficient and smooth recruitment process. This office is well
				equipped with first-rate infrastructure & caters to all the requirements of
				organizations at every stage of the placement process. Various recruiting
				organizations offer a variety of job roles in sectors like; Automobile, CS/IT,
				Manufacturing, Constructions, Oil & Gas, Consulting & Analytics, Education, Research
				& Development, Electronics, E-commerce, etc. The Placement Cell established a mutual
				association with many renowned organizations which helped students to get attractive
				job opportunities with competitive compensation. These mainly includes; Microsoft,
				Amazon, GE India, DE- Shaw, Goldman Sachs, ISRO, HPCL, MasterCard, Salesforce,
				Deloitte, Arcesium, Barclays, CodeNation, Razorpay, UnitedHealth Group, HSBC, IOCL,
				Samsung, Strand Life Sciences, Flipkart, MathWorks, Wipro, Capgemini, L&T, Quantile
				Analytics, Bosch, Fractal Analytics, TCS, Maruti Suzuki, NXP Semiconductors, Mentor
				Graphics, Seagate, Tata Steel, Jindal Steel and help student to move in their career
				path.
			</p>
			<p>
				For more information about Centres @ IIT Indore, please visit -{" "}
				<a href="https://www.iiti.ac.in/page/centers">
					https://www.iiti.ac.in/page/centers
				</a>
			</p>
			<h2 className="mainTitle mt-4">ADMINISTRATIVE SECTIONS</h2>
			<h3 className="mainTitle mt-4">International Affairs and Outreach</h3>
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
			<h4 className="mainTitle mt-4">Recruitment of Foreign Students</h4>
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
			<h4 className="mainTitle mt-4">MHRD Initiatives</h4>
			<p>
				GIAN, VAJRA, SPARC and ASEM-DUO are the recent Ministry of Education initiatives
				that aim to improve the research and teaching ecosystem of India’s higher education.
				In the year 2019-20, a substantial number of suchProjects were awarded to IIT
				Indore.
			</p>
			<ol>
				<li> GIAN Courses - 07 </li>
				<li> VAJRA Fellowships - 03 </li>
				<li> SPARC Projects – 09 </li>
				<li>ASEM-DUO Fellowships – 06</li>
			</ol>
			<h3 className="mainTitle mt-4">Academic Office</h3>
			<p>
				The Academic office is responsible for all the academic affairs of the students of
				the Institute. There is a Dean of Academic Affairs, two Associate Dean (Academic),
				an Administrative Officer, Managers and Deputy Managers in this office besides some
				contractual employees.
			</p>
			<p>
				For more information about Academic Office @ IIT Indore, please visit -{" "}
				<a href="https://academic.iiti.ac.in/">https://academic.iiti.ac.in/</a>
			</p>
			<h3 className="mainTitle mt-4">Research and Development</h3>
			<p>
				IIT Indore envisages the convergence of traditional disciplines as the key to
				accomplish the previously unimaginable. With this foresight, IIT Indore has been
				promoting inter-disciplinary research programs focusing on basic and applied
				research, technology development and innovation. This vision has helped the
				institute to excel in all spheres of science, engineering, and humanities and social
				sciences. From academic to outreach programs, research is at the heart of IIT
				Indore’s vision to accomplish the previously unimaginable. Thus, while focusing on
				the basic and applied research IIT Indore has been promoting inter-disciplinary
				research programs to further stimulate technology development and innovation. This
				vision has helped the institute to excel in all spheres of science, engineering, and
				humanities and social sciences.
			</p>
			<img src={rnd} style={{ width: "100%" }} />
			<p>
				A key competency of IIT Indore is research driven academic program as it forms a
				core component of the undergraduate and postgraduate teaching. IIT Indore has
				consciously promulgated the idea of involving undergraduate students in forefront
				research projects. This led to the initiation of a formal undergraduate research
				scheme, Promotion of Research and Innovation for Undergraduate Students (PRIUS).
				Research at IIT Indore has been recognized at both international and national level.
				Faculty members and scientists are actively involved in several key international
				projects and joint collaborations with research organizations in Japan, South Korea,
				Russia, Portugal, France, Germany, UK, USA, and many other countries. The institute
				has been successful in securing 331 externally sponsored research projects with a
				sanctioned amount of Rs. 218 Crores.
			</p>
			<p>
				For more information about Research and Development @ IIT Indore, please visit -{" "}
				<a href="https://rnd.iiti.ac.in/">https://rnd.iiti.ac.in/</a>
			</p>
			<h3 className="mainTitle mt-4">Student Affairs</h3>
			<p>
				The Student Affairs Section comprises of various sub sections, namely Technical,
				Cultural, Sports, Placement, Counselling and Hostels. These sections conduct
				activities to enhance their confidence, leadership qualities, attitude, management,
				communication and creative skills. The period from April 2019 to March 2020
				witnessed a buzz of activity across various domains. It included resumption of
				Students’ Gymkhana, creation of Graduate Students’ Forum for PG students,
				formulation of Constitution of Gymkhana, making of Student Affairs Section webpage.
			</p>
			<img src={sa} style={{ width: "100%" }} />
			<p>
				When it comes to studying at an IIT, people have the misconception that IITians are
				studious dweebs, who can't break out of the humdrum monotony of their schedules;
				trapped in a perpetual loop of assignments, quizzes, vivas and semester
				examinations. With a panoply of activities organised under the banner of cultural
				and technical events, to a multitude of clubs that help the students follow their
				interests, the students gain an impressive repertoire of skills, apart from academic
				excellence. Whether it be the performance at inter-IITs, at annual TvsMs, or
				international competitions, the students at IITI have consistently shone with full
				brilliance. With a close-knit community of more than 1800 students, students here
				form strong and lasting friendships for life.
			</p>
			<p>
				For more information about Student Affairs @ IIT Indore, please visit -{" "}
				<a href="https://studentaffairs.iiti.ac.in/">https://studentaffairs.iiti.ac.in/</a>
			</p>
			<h3 className="mainTitle mt-4">Ek Bharat Shreshtha Bharat @IIT Indore</h3>
			<p>
				India is a unique nation, whose fabric has been woven by diverse linguistic,
				cultural and religious threads, held together into a composite national identity by
				a rich history of cultural evolution. Ek Bharat Shreshtha Bharat is a pioneering
				initiative launched by the Government of India to enhance unity in diversity of our
				nation India.
			</p>
			<p>
				This program aims to strengthen the existing cultural connection among diverse parts
				of the country and enhance interaction between people living in various states and
				union territories. This initiative aims to improve mutual understanding and
				reciprocity among the people of India so that a shared spirit of understanding may
				reverberate throughout the country.
			</p>
			<p>
				As part of this initiative, the States and UTs are to embark on a mission to augment
				their cultural, academic and economic ties by entering into an eclectic range of
				mutual engagements with the paired States/UTs covering the spheres of music, drama,
				cuisine, language, history, tourism and other forms of exchange.
			</p>
			<p>At IIT Indore, Various Clubs Under EBSB:</p>
			<p>
				Rastriya Avishkar Abhiyan, RuTAG, Swachha Bharat Mission and Unnat Bharat Abhiyan.
				IIT Indore has started its Social Outreach Program in 2011 with the constitution of
				a social organization called “AVANA” constituted by a group of socially conscious
				faculty members and students. The group has so far reached out to a neighboring
				school and extended their support to the school in various forms including teaching
				students about cleanliness and hygiene. Rashtriya Avishkar Abhiyan is a unique
				concept developed by the Ministry of Human Resource Development that aims to
				inculcate a spirit of inquiry, creativity and love for Science and Mathematics in
				school children.
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
