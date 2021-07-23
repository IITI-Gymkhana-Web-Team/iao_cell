import React from "react";
import { iiti, iiti2, c1, c2, rnd, sa, sic, hindex, citation, ranks } from "../../../assets";
import "./AboutIITI.css";

export const AboutIITI = () => {
	return (
		<div className="container font-ubuntu aboutIITI pb-5">
			<h1 className="mainTitle text-center m-3">About IITI</h1>
			<img alt="about IITI" src={iiti} style={{ float: "right", maxWidth: "max(400px,45%)" }} />
			<p>
				Indian Institute of Technology Indore, located in Madhya Pradesh, known as IIT Indore or IITI, is an
				institute of national importance established by the Government of India in 2009. It is one of the eight
				new IITs, started by the Ministry of Human Resource Development (India), Government of India. The
				institution started functioning from 2009-10 on a temporary campus at the Institute of Engineering and
				Technology of Devi Ahilya University, Indore, under IIT Bombay's mentorship. Shri Arjun Singh, the Union
				HRD minister, laid the foundation of the permanent campus, spread over 501.42-acre (2.1 sq. km), on 17th
				February 2009 at Simrol, a location on Khandwa Road about 25 km from the city of Indore.
			</p>
			<p>
				As IIT Indore steps into the next decade, it carries forward the culture of excellence and hard work
				embedded in its social environment. It maintains a high national rank among the institutions of higher
				education. It is now among the top 10 engineering institutes in the country. Over the last eight years,
				our graduating students have been engaged with the best corporations in India and worldwide, across
				different verticals. Many have also chosen the less-traveled path of entrepreneurship. It is indeed a
				proud moment for us when our students contribute to society by creating jobs and changing lives. Along
				with their researchers in the last decade, our faculty colleagues have also shown immense perseverance
				to attain new heights of excellence.
			</p>
			<img
				alt="about IITI"
				src={iiti2}
				style={{
					float: "left",
					maxWidth: "max(400px,45%)",
					marginRight: "10px",
				}}
			/>
			<p>
				The teaching and research climate in the Institute has been supported by efficient administration.
				Having been granted its first patent, the Institute has renewed its focus on patenting along with
				publishing. The key focus is to engage with MSMEs, start-ups, and transfer technology. Efforts are also
				underway towards liaison and collaboration with grassroots-level organizations to contribute to our
				immediate neighborhood's development through technological innovation. On behalf of the Institute, I
				congratulate all our graduates and wish them success in the future. 2020 is no ordinary year – the
				normal has been redefined worldwide to pose significant challenges for the education sector.
			</p>
			<br />
			<br />
			<h3 className="font-acme mt-5">Citations and H Index</h3>
			<div className="charts">
				<img alt="about IITI" src={citation} />
				<img alt="about IITI" src={hindex} />
				<img alt="about IITI" src={ranks} style={{ width: "100%", marginTop: "20px" }} />
			</div>
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
			<img alt="about IITI" src={c1} style={{ width: "max(40%, 400px)" }} />
			<p>
				CIIEIR was established in 2016. CIIEIR is an umbrella setup at IIT Indore for fostering entrepreneurship
				and nurturing start-ups. It administers a business incubator that provides ‘Start to scale’ support for
				technology-based entrepreneurship and facilitates the conversion of research activity into
				entrepreneurial ventures.
			</p>
			<p>
				CIIEIR Aims to transform knowledge and Innovation into the creation of successful innovative
				entrepreneurs. Mentoring and developing competitiveness, Innovation, enhancing links between Industry
				and students to enable them to develop emerging technology and be the best entrepreneurs.
			</p>
			<h3 className="mainTitle mt-4">Central Workshop</h3>
			<img alt="about IITI" src={c2} style={{ width: "100%" }} />
			<p>
				The IITI Central Workshop is equipped with modern state-of-the-art instruments. Currently, the workshop
				is having seven shops: Machining, Welding, Forming, Foundry, Injection Molding, Fitting, and Carpentry.
				It is supported by a team of highly skilled operators. Apart from industrial manufacturing work, it also
				provides hands-on-training to students/operators involved in the research and development of industry or
				academics in the production and fabrication of mechanical components. The projects and manufacturing
				divisions satisfy industrial standards and requirements and bridge the gap between industry and
				academia. Completion of a project in a time-bound, cost-effective framework maintaining a high quality
				of products is the aim. The workshop provides excellence and problem-specific solutions to industries
				and research organizations, apart from teaching students handling the facilities.
			</p>
			<h3 className="mainTitle mt-4">Sophisticated Instrumentation Centre (SIC)</h3>
			<img alt="about IITI" src={sic} style={{ width: "max(40%, 400px)", float: "right" }} />
			<p>
				SIC was established in September 2011 with institute funding to expedite research programs at IIT
				Indore. The SIC mission is to support and foster research efforts in Science and Engineering at IIT
				Indore by providing state-of-the-art instrumentation and ancillary equipment and expertise in its use
				and application. The SIC is equipped with Single Crystal X-ray Diffraction, Nuclear Magnetic Resonance,
				High-Resolution Mass Spectrometry, Elemental Analysis, Single-Molecule Imaging Spectroscopy, and other
				Spectroscopic facilities together under one roof to provide the highest quality data for analysis to
				research groups and students. With the existence of excellent facilities and a high level of expertise,
				SIC offers analytical services within the Institute and external organizations.
			</p>
			<p>
				SIC has now emerged as one of the first centers in central India, providing extensive support to users
				across the country. It is also thriving to become a self-sustained center by generating funds from
				services provided to academia and industry users. A major advantage of SIC is its accessibility to
				students within the Institute, a very healthy ratio of students to the time availability on instruments.
			</p>
			<p>
				The SIC instruments strengthen the following research areas: Fundamental Research in Inorganic
				Chemistry, Organic Chemistry, Organometallic Chemistry, Various aspects of Material Science, BioScience
				and Engineering including work on Biosensors, Materials Science and Engineering, and Condensed Matter
				Physics.
			</p>
			<p>
				Recently many new facilities viz. online form submission and dissemination of data, revamping of safety
				and security of the center and hands-on training of students for equipment like single-crystal X-ray
				crystallography are introduced. Further hands-on training workshop for researchers has been planned,
				which will be conducted once the pandemic situation improves.
			</p>
			<h3 className="mainTitle mt-4">Centre for Advanced Electronics (CAE)</h3>
			<p>
				Centre for Advanced Electronics (CAE) has been established at IIT Indore as an interdisciplinary
				research centre that aims to develop materials, devices & technologies for multidisciplinary
				applications, including computing, communication, medical, and energy. The CAE has brought some of the
				academicians at IIT Indore, working in electronics and its allied areas, under one technical roof to
				enable high-quality applied research to benefit humanity. We are honored to have onboard some of the
				renowned academicians, in electronics and related areas, across the globe as our advisors. The CAE is
				committed to coming up as a platform for applied research, device development, skill & workforce
				development in the nationally important area of electronics.
			</p>
			<h3 className="mainTitle mt-4">Computer Center (CC)</h3>
			<p>
				The Computer and Information Technology Center is solely responsible for keeping the Information and
				Communication Technology & Computation related facilities available to every member of IIT Indore. These
				facilities are constantly upgraded to meet the evolving standards of IIT. The Computer Labs remain open
				for twelve hours (8:00 AM to 8:00 PM) in a day. The students visit the labs for their general and
				routine computing tasks. Many departments use the facilities of the Computer Lab to conduct their
				practical classes & examinations. The campus LAN will be extending to all the hostels and residences.
				New hardware and software are procured on a regular basis to provide a state-of-the-art computing
				facility to the IIT Indore family.
			</p>
			<h3 className="mainTitle mt-4">DST-FIST Center of Excellence in Gear Engineering</h3>
			<p>IIT Indore has established DST-FIST Center of Excellence in Gear Engineering in 2015.</p>
			<h3 className="mainTitle mt-4">Center of Futuristic Defense and Space Technology (CFDST)</h3>
			<p>
				IIT Indore has started work towards establishing the Center of Futuristic Defense and Space Technology
				(CFDST). The Centre would be functioning with the objectives to establish collaboration with defense and
				space organizations and help them find solutions for existing and futuristic technologies.
			</p>
			<h3 className="mainTitle mt-4">Centre for Rural Development and Technology (CRDT):</h3>
			<p>
				CRDT Centre of IIT Indore was started to address challenges faced by rural areas and to improve their
				living. It has made substantial contributions by developing and transferring technologies in rural
				areas, including sanitation, cleanliness and water and waste management, etc.
			</p>
			<h3 className="mainTitle mt-4">Training and Placement:</h3>
			<p>
				The Placement Cell handles all facets of campus placements for the graduating students of IIT Indore. It
				involves establishing long-term relations with companies and ensuring an efficient and smooth
				recruitment process. This office is well equipped with first-rate infrastructure & caters to all
				organizations' requirements at every stage of the placement process. Various recruiting organizations
				offer different job roles in Automobile, CS/IT, Manufacturing, Constructions, Oil & Gas, Consulting &
				Analytics, Education, Research & Development, Electronics, E-commerce, etc. The Placement Cell
				established a mutual association with many renowned organizations, which helped students get attractive
				job opportunities with competitive compensation. These mainly include; Microsoft, Amazon, GE India, DE-
				Shaw, Goldman Sachs, ISRO, HPCL, MasterCard, Salesforce, Deloitte, Arcesium, Barclays, CodeNation,
				Razorpay, UnitedHealth Group, HSBC, IOCL, Samsung, Strand Life Sciences, Flipkart, MathWorks, Wipro,
				Capgemini, L&T, Quantile Analytics, Bosch, Fractal Analytics, TCS, Maruti Suzuki, NXP Semiconductors,
				Mentor Graphics, Seagate, Tata Steel, Jindal Steel and help the student to move in their career path.
			</p>
			<p>
				For more information about Centres @ IIT Indore, please visit -{" "}
				<a href="https://www.iiti.ac.in/page/centers">https://www.iiti.ac.in/page/centers</a>
			</p>
			<h2 className="mainTitle mt-4">ADMINISTRATIVE SECTIONS</h2>
			<h3 className="mainTitle mt-4">International Affairs and Outreach</h3>
			<p>
				IIT Indore is rapidly expanding globally, intending to internationalize its teaching and research
				portfolio. Currently, we are collaborating intensely with counties across North America, Europe, Asia,
				and Oceania. In continuation to the previous year, this year we had notable progress on three fronts:
			</p>
			<ol>
				<li>
					We successfully recruited and hosted many international students in our degree programs (from ASEAN
					and SAARC regions).
				</li>
				<li>
					We secured multiple grants from our Ministry of Education, which is feeding well into our
					internationalization endeavors.
				</li>
				<li>We expanded our footprint further in Europe.</li>
			</ol>
			<h4 className="mainTitle mt-4">Recruitment of Foreign Students</h4>
			<p>
				Continuing the upward trajectory in recruiting international students in our degree programs, in
				2019-20, we hosted 03 international students who pursued their Master’s degrees in various disciplines
				at IIT Indore. These students were from SAARC nations (Bangladesh and Nepal) and joined us through the
				Study in India (SII) program. This year also we have got 01 student admitted from Nigeria in ME.
				Although IIT Indore has been hosting foreign internship students since its inception, this past year was
				path-breaking because we hosted 06 Thai exchange students who took regular courses as well. This has
				helped us establish our brand in ASEAN countries, and specifically Thailand.
			</p>
			<h4 className="mainTitle mt-4">MHRD Initiatives</h4>
			<p>
				GIAN, VAJRA, SPARC, and ASEM-DUO are the recent Ministry of Education initiatives that aim to improve
				India's higher education research and teaching ecosystem. In the year 2019-20, a substantial number of
				such projects were awarded to IIT Indore.
			</p>
			<ol>
				<li> GIAN Courses - 07 </li>
				<li> VAJRA Fellowships - 03 </li>
				<li> SPARC Projects – 09 </li>
				<li>ASEM-DUO Fellowships – 06</li>
			</ol>
			<h3 className="mainTitle mt-4">Academic Office</h3>
			<p>
				The Academic Office is responsible for all the academic affairs of the students of the Institute. There
				is a Dean of Academic Affairs, two Associate Dean (Academic), an Administrative Officer, Managers, and
				Deputy Managers in this office besides some contractual employees.
			</p>
			<p>
				For more information about Academic Office @ IIT Indore, please visit -{" "}
				<a href="https://academic.iiti.ac.in/">https://academic.iiti.ac.in/</a>
			</p>
			<h3 className="mainTitle mt-4">Research and Development</h3>
			<p>
				IIT Indore envisages the convergence of traditional disciplines as the key to accomplish the previously
				unimaginable. With this foresight, IIT Indore has been promoting inter-disciplinary research programs
				focusing on basic and applied research, technology development, and innovation. This vision has helped
				the institute to excel in all spheres of science, engineering, and humanities, and social sciences. From
				academic to outreach programs, research is at the heart of IIT Indore’s vision to accomplish the
				previously unimaginable. Thus, while focusing on the basic and applied research, IIT Indore has been
				promoting inter-disciplinary research programs to further stimulate technology development and
				innovation. This vision has helped the institute to excel in all spheres of science, engineering, and
				humanities, and social sciences.
			</p>
			<img alt="about IITI" src={rnd} style={{ width: "100%" }} />
			<p>
				A critical competency of IIT Indore is a research-driven academic program as it forms a core component
				of undergraduate and postgraduate teaching. IIT Indore has consciously promulgated the idea of involving
				undergraduate students in forefront research projects. This led to the initiation of a formal
				undergraduate research scheme, Promotion of Research and Innovation for Undergraduate Students (PRIUS).
				Research at IIT Indore has been recognized at both the international and national levels. Faculty
				members and scientists are actively involved in several key global projects and joint collaborations
				with research organizations in Japan, South Korea, Russia, Portugal, France, Germany, UK, the USA, and
				many other countries. The institute has been successful in securing 331 externally sponsored research
				projects with a sanctioned amount of Rs. 218 Crores.
			</p>
			<p>
				For more information about Research and Development @ IIT Indore, please visit -{" "}
				<a href="https://rnd.iiti.ac.in/">https://rnd.iiti.ac.in/</a>
			</p>
			<h3 className="mainTitle mt-4">Student Affairs</h3>
			<p>
				The Student Affairs Section comprises various sub-sections, namely Technical, Cultural, Sports,
				Placement, Counselling, and Hostels. These sections conduct activities to enhance their confidence,
				leadership qualities, attitude, management, communication, and creative skills. The period from April
				2019 to March 2020 witnessed a buzz of activity across various domains. It included resumption of
				Students’ Gymkhana, creation of Graduate Students’ Forum for PG students, formulation of Constitution of
				Gymkhana, making of Student Affairs Section webpage.
			</p>
			<img alt="about IITI" src={sa} style={{ width: "100%" }} />
			<p>
				When it comes to studying at an IIT, people have the misconception that IITians are studious dweebs who
				can't break out of their schedules' humdrum monotony; trapped in a perpetual loop of assignments,
				quizzes, vivas, and semester examinations. With a panoply of activities organized under the banner of
				cultural and technical events, to a multitude of clubs that help the students follow their interests,
				the students gain an impressive repertoire of skills, apart from academic excellence. Whether it be the
				performance at inter-IITs, at annual TvsMs, or international competitions, the students at IITI have
				consistently shone with full brilliance. With a close-knit community of more than 1800 students,
				students here form solid and lasting friendships for life.
			</p>
			<p>
				For more information about Student Affairs @ IIT Indore, please visit -{" "}
				<a href="https://studentaffairs.iiti.ac.in/">https://studentaffairs.iiti.ac.in/</a>
			</p>
			<h3 className="mainTitle mt-4">Ek Bharat Shreshtha Bharat @IIT Indore</h3>
			<p>
				India is a unique nation whose fabric has been woven by diverse linguistic, cultural, and religious
				threads, held together into a composite national identity by a rich history of cultural evolution. Ek
				Bharat Shreshtha Bharat is a pioneering initiative launched by the Government of India to enhance unity
				in diversity of our nation India.
			</p>
			<p>
				This program aims to strengthen the existing cultural connection among diverse parts of the country and
				enhance interaction between people living in various states and union territories. This initiative aims
				to improve mutual understanding and reciprocity among the people of India so that a shared spirit of
				understanding may reverberate throughout the country.
			</p>
			<p>
				As part of this initiative, the States and UTs are to embark on a mission to augment their cultural,
				academic, and economic ties by entering into an eclectic range of mutual engagements with the paired
				States/UTs covering the spheres of music, drama, cuisine, language, history, tourism and other forms of
				exchange.
			</p>
			<p>At IIT Indore, Various Clubs Under EBSB:</p>
			<p>
				Rashtriya Avishkar Abhiyan, RuTAG, Swachha Bharat Mission, and Unnat Bharat Abhiyan. IIT Indore has
				started its Social Outreach Program in 2011 with the constitution of a social organization called{" "}
				<strong>AVANA</strong>, constituted by a group of socially conscious faculty members and students. So
				far, the group has reached out to a neighboring school and extended its support to the school in various
				forms, including teaching students about cleanliness and hygiene. Rashtriya Avishkar Abhiyan is a unique
				concept developed by the Ministry of Human Resource Development that aims to inculcate a spirit of
				inquiry, creativity, and love for Science and Mathematics in school children.
			</p>
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
