import React from "react";
import img from "../../../assets/visaimg.webp";
export const Visa = () => {
	return (
		<>
			<div className="container bg-light font-ubuntu" style={{ margin: "20px auto" }}>
				<div className="single_blog">
					<h3 className="font-acme">How We Help with your Visa Application</h3>
					<div
						style={{
							width: "min(500px, 100%)",
							margin: "auto auto 10px auto",
							float: "right",
							padding: "10px",
						}}
					>
						<img src={img} style={{ maxWidth: "100%" }} />
					</div>
					<div className="blog_commentbox"></div>
					<div style={{ margin: "auto" }}>
						Whether you are an international student planning to visit IIT Indore for a
						degree or for short term research/coursework, or you are an international
						faculty member planning to visit IIT Indore for a conference or research
						collaboration, you will need an appropriate visa to come to India. The
						Office of International Relations (OIR) will help you throughout the
						process.
						<ul className="mt-2">
							<li>
								We will work with you and your host (mentor/ collaborator) at IIT
								Indore to help plan your visit.
							</li>
							<li>
								Once the plan of your academic engagement is finalized, we will ask
								for your basic information by filling up this{" "}
								<a
									href="/static/website/Internal%20Documents/MHRD%20form%20for%20GoI%20clearance.docx"
									style={{ color: "blue" }}
								>
									MHRD Clearance Form
								</a>
								. We will also need copies of your passport pages.
							</li>
							<li>
								Upon receiving approval for your visit from concerned authorities,
								we will issue you an Invitation Letter.
							</li>
							<li>
								We will also notify the local Indian Embassy/ Consular Office in
								your country of residence about your invitation.
							</li>
							<li>
								Upon your arrival on campus, we will help you complete your
								registration process with the local Foreigners Registration Office.
							</li>
							<li>
								We will also help you quickly settle into the campus life, interface
								with various offices of the Institute, and start your academic
								activities.
							</li>
							<li>
								When you are ready to leave after completing your assignment, we
								will help you complete your exit formalities with the government.
							</li>
						</ul>
					</div>
					<div style={{ margin: "40px auto" }}>
						<h3 className="font-acme">What You Need to Do</h3>
						<ul>
							<li>
								As soon as the plan of your academic engagement is finalized, please
								complete the MHRD Clearance Form and send us your passport details.
								It can take considerable time to obtain government clearance.
							</li>
							<li>
								You should let us know which Indian Embassy/Consulate you are going
								to apply for your visa.
							</li>
							<li>
								Please remember, the Letter of Invitation is only one of the primary
								documents required for the Visa processing. The complete check list
								of documents under various Visa categories can be found below.
							</li>
							<li>
								For any clarificaiton or assistance, please contact OIR Executives
								directly, and please keep your host mentor/ collaborator in the
								loop.
							</li>
						</ul>
					</div>
					<div style={{ margin: "40px auto" }}>
						<h3 className="font-acme"> How to Apply</h3>
						According to the Bureau of Immigration (BOI), Govt. of India (GOI), all
						Individual visa seekers need to apply for Indian Visa online at{" "}
						<a href="https://indianvisaonline.gov.in" style={{ color: "blue" }}>
							https://indianvisaonline.gov.in
						</a>
						. To view the details of visas granted by the Govt. of India (GOI),{" "}
						<a
							href="https://mha.gov.in/PDF_Other/AnnexIII_01022018.pdf"
							style={{ color: "blue" }}
						>
							Click here
						</a>
						. For complete information on applying for Indian Visa please log on to:{" "}
						<a
							href="https://boi.gov.in/content/apply-visa-online"
							style={{ color: "blue" }}
						>
							https://boi.gov.in/content/apply-visa-online
						</a>{" "}
						or{" "}
						<a href="https://indianvisaonline.gov.in/visa/" style={{ color: "blue" }}>
							https://indianvisaonline.gov.in/visa/
						</a>
						.
					</div>
					<div style={{ margin: "40px auto" }}>
						<h3 className="font-acme">Registration of Foreigners</h3>
						If the visa is valid for more than 180 days, registration is compulsory
						within 14 days of arrival in India. No fee is required to be paid for
						registration, but a penalty in Indian currency equivalent to US$ 30/- or
						equivalent (In Indian currency) would be charged in case of late
						registration. The Foreigners visiting India are also required to adhere to
						the Special Endorsement made on the Visa by the Indian Mission. Post arrival
						to IITKGP campus, the Office of International Relations (OIR) will assist
						you to complete the registration process with the local authorities. For
						more information on the general instructions for the registration by the
						Foreigners please visit:{" "}
						<a
							href="https://boi.gov.in/content/general-instructions-registration-foreigners"
							style={{ color: "blue" }}
						>
							https://boi.gov.in/content/general-instructions-registration-foreigners
						</a>
						.
					</div>
					<div style={{ margin: "40px auto" }}>
						<h3 className="font-acme">Visa Extension</h3>
						As per the BOI, Govt. of India: All Foreigners must submit application for
						extension of residential permit / visa at least 60 days before the date of
						expiry of respective residential permit/visa. Follow this{" "}
						<a
							href="https://boi.gov.in/content/documents-be-produced-extension-visa"
							style={{ color: "blue" }}
						>
							link
						</a>{" "}
						for the list of documents required for visa extension. It is advised to talk
						to OIR Executives when there is any requirement for visa extension. The OIR
						will arrange to get the visa extension done on before the date of expiry of
						respective residential permit/visa. A foreigner shall be charged a penalty
						in Indian currency equivalent to US $30/- for late or delayed renewal of RP.
						<br />
						<br />
						<h3 className="font-acme">Overstay</h3>
						In the event of overstay, a foreigner will be subject to penal measure as
						per{" "}
						<a href="https://boi.gov.in/" style={{ color: "blue" }}>
							GOI provisions.
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
