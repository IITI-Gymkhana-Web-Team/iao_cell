import React from "react";
import { Table } from "react-bootstrap";
import "./Admission.css";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Admission = () => {
	return (
		<article className="container bg-light pt-3 mt-3 font-ubuntu">
			<section>
				<h3 className="font-acme">Admission Category</h3>
				<p className="text-justify">
					Anyone who is not a national of India will be considered as an international student for the
					purposes of admission and fees. International students can seek admission to various Postgraduate
					and Research Programmes (Ph.D., M.Tech., M.S. (Research) and M.Sc.) under the following categories:
				</p>
				<Table striped bordered hover variant="primary">
					<thead>
						<tr>
							<th>Sr. No.</th>
							<th>Scheme</th>
							<th>Category</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>ISF (International Self Finance)</td>
							<td> Self-Financing Students</td>
						</tr>
						<tr>
							<td>2</td>
							<td>ISW (International Sponsored by Industry or NGO)</td>
							<td>a) Industry Sponsorship b) NGO (Non-Government Organization) Sponsorship</td>
						</tr>
						<tr>
							<td>3</td>
							<td> GSW (International Sponsored by Government organization)</td>
							<td>
								a) ICCR Scholarship of Government of India Link{" "}
								<a target="_blank" rel="noreferrer" href="http://a2ascholarships.iccr.gov.in/">
									{" "}
									<RiExternalLinkFill />
								</a>
								<br />
								b) Study In India, Government of India Link
								<a target="_blank" rel="noreferrer" href="https://www.studyinindia.gov.in/">
									{" "}
									<RiExternalLinkFill />
								</a>
								<br />
								c) Foreign Government Sponsorships
							</td>
						</tr>
					</tbody>
				</Table>
			</section>

			<section>
				<h3 className=" mb-4 font-acme">Required forms for International Exchange students</h3>

				<Table striped bordered hover variant="primary">
					<thead>
						<tr>
							<th>Forms</th>
							<th style={{ textAlign: "center" }}>Download</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Declaration Form for Anti-Ragging Rules</td>

							<td style={{ textAlign: "center" }}>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://academic.iiti.ac.in/New_student/Declaration%20Form/Anti-Ragging%20Rules%20&%20Decl..pdf"
								>
									<RiExternalLinkFill />
								</a>
							</td>
						</tr>
						<tr>
							<td>Declaration Form for Dining Rules</td>
							<td style={{ textAlign: "center" }}>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://academic.iiti.ac.in/New_student/Declaration%20Form/Dining%20Rules%20%20&%20Decl.pdf"
								>
									<RiExternalLinkFill />
								</a>
							</td>
						</tr>
						<tr>
							<td>Declaration Form for Internet Usage Policy</td>
							<td style={{ textAlign: "center" }}>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://academic.iiti.ac.in/New_student/Declaration%20Form/Internet%20usage%20Policy%20&%20Decl.%20(1).pdf"
								>
									<RiExternalLinkFill />
								</a>
							</td>
						</tr>
						<tr>
							<td>Declaration Form for Safety and Security Rules</td>
							<td style={{ textAlign: "center" }}>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://academic.iiti.ac.in/New_student/Declaration%20Form/Safety%20&%20Security%20Rules%20&%20Decl.%20(1).pdf"
								>
									<RiExternalLinkFill />
								</a>
							</td>
						</tr>
						<tr>
							<td>Library Membership Form for Students</td>
							<td style={{ textAlign: "center" }}>
								<a target="_blank" rel="noreferrer" href="http://library.iiti.ac.in/?page_id=41">
									<RiExternalLinkFill />
								</a>
							</td>
						</tr>
						<tr>
							<td>Medical Fitness Form</td>
							<td style={{ textAlign: "center" }}>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://academic.iiti.ac.in/New_student/Declaration%20Form/Medical%20Fitness%20Form.pdf"
								>
									<RiExternalLinkFill />
								</a>
							</td>
						</tr>
					</tbody>
				</Table>
			</section>

			<section className="text-justify">
				<h3 className="font-acme">Selection Procedure</h3>
				<p>
					Admission of International Students to IIT Indore's Ph.D., M. Tech., M.S. (Research) and M.Sc.
					programs require the below besides the academic requirements:
					<ul>
						<li>
							a valid score of TOEFL/IELTS <strong>or equivalent</strong>
						</li>
						<li>a statement of purpose</li>
						<li>letters of recommendation</li>
						<li>an interview (in-person or over video conference/skype)</li>
					</ul>
				</p>
				<p>
					Students seeking admission in any one of the aforesaid categories (at Sr. No. 1) will have to
					satisfy the minimum eligibility criteria for admission to the programmes as prescribed by the
					Institute. But merely fulfilling the minimum eligibility criteria does not guarantee the selection
					of a candidate into any program.
				</p>
			</section>

			<section className="text-justify">
				<h3 className="font-acme">Fees for International Students:</h3>
				<p>
					<ul>
						<li>
							Tuition fees per semester - <strong>1000 USD</strong>
						</li>
						<li>
							Living expenses per semester* - <strong>600 USD</strong>
						</li>
						<li>
							If an international student registers up to two courses then the fee will be{" "}
							<strong>200 USD</strong> per course per semester, whereas the living expense will remain the
							same.
						</li>
					</ul>
				</p>
				<p>
					* Living Expenses per semester include accommodation charges, registration fee, refundable security
					deposits, one-time admission fee and charges towards Group Insurance Premium per annum. The charges
					for food expenses are not included in the living expenses and the student will have to pay
					separately as per prevailing rates.
				</p>
			</section>
			<section className="text-justify">
				<h3 className="font-acme">Admission</h3>
				<p>
					For more information,{" "}
					<a href="https://academic.iiti.ac.in/admission.php" target="_blank" rel="noreferrer">
						Click here
					</a>
				</p>
			</section>
			<section className="text-justify">
				<h3 className="font-acme">International Student List</h3>
				<p>
					For more information, <Link to="/int/students">Click here</Link>
				</p>
			</section>
		</article>
	);
};
