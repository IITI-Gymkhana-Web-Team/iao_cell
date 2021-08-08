import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export const NavOutbound = () => {
	const [show, setShow] = useState(false);

	const hideNav = () => {
		setShow(false);
	};

	const showNav = () => {
		setShow(true);
	};

	return (
		<div className="mainLink" onMouseLeave={hideNav}>
			<p className="mainLink-heading" onMouseEnter={showNav}>
				Outbound <FiChevronDown />
			</p>
			{show && (
				<div style={{ justifyContent: "space-between" }}>
					<div style={{ width: "70%" }}>
						<p className="navHeading nh1 mb-3" style={{ color: "#000" }}>
							For Students
						</p>
						<div className="d-flex flex-wrap" style={{ justifyContent: "space-between" }}>
							<div className="mb-3">
								<p className="navHeading nh2">UK Scholarships</p>
								<div>
									<p>
										<a
											href="https://www.britishcouncil.in/study-uk/scholarships"
											target="_blank"
											rel="noreferrer"
										>
											British Council India
										</a>
									</p>
									<p>
										<a
											href="https://www.ukri.org/our-work/collaborating-internationally/our-international-offices/ukri-india/"
											target="_blank"
											rel="noreferrer"
										>
											UKRI India
										</a>
									</p>
									<p>
										<a
											href="https://www.charleswallaceindiatrust.com/"
											target="_blank"
											rel="noreferrer"
										>
											Charles Wallace India Trust
										</a>
									</p>
									<p>
										<a
											href="https://www.britishcouncil.in/study-uk/scholarships/commonwealth-scholarships"
											target="_blank"
											rel="noreferrer"
										>
											Commonwealth Scholarships
										</a>
									</p>
									<p>
										<a
											href="https://study-uk.britishcouncil.org/scholarships/great-scholarships/india"
											target="_blank"
											rel="noreferrer"
										>
											GREAT Scholarships India
										</a>
									</p>
									<p>
										<a
											href="https://www.britishcouncil.in/programmes/higher-education/newton-fund"
											target="_blank"
											rel="noreferrer"
										>
											Newton Bhabha Fund
										</a>
									</p>
								</div>
							</div>
							<div className="mb-3">
								<p className="navHeading nh2">German Scholarships</p>
								<div>
									<p>
										<a
											href="https://www.humboldt-foundation.de/en/"
											target="_blank"
											rel="noreferrer"
										>
											Alexander von Humboldt Foundation
										</a>
									</p>
									<p>
										<a
											href="https://www.daad.in/en/study-research-in-germany/"
											target="_blank"
											rel="noreferrer"
										>
											DAAD
										</a>
									</p>
									<p>
										<a href="https://www.igstc.org" target="_blank" rel="noreferrer">
											Indo-German Science & Technology Center
										</a>
									</p>
									<p>
										<a
											href="https://www.goethe.de/ins/in/en/sta/new.html"
											target="_blank"
											rel="noreferrer"
										>
											German Language
										</a>
									</p>
									<p>
										<a
											href="https://indien.ahk.de/education/indo-german-training-centre"
											target="_blank"
											rel="noreferrer"
										>
											Indo-German Training Centre
										</a>
									</p>
								</div>
							</div>
							<div className="mb-3">
								<p className="navHeading nh2">French Scholarships</p>
								<div>
									<p>
										<a href="Raman-Charpak Fellowship" target="_blank" rel="noreferrer">
											Raman-Charpak Fellowship
										</a>
									</p>
									<p>
										<a
											href="http://www.cefipra.org/Cefipra_ESONN.aspx"
											target="_blank"
											rel="noreferrer"
										>
											CEFIPRA-ESONN Fellowship
										</a>
									</p>
									<p>
										<a
											href="http://www.ens-lyon.fr/en/studies/admissions/application-research-internship"
											target="_blank"
											rel="noreferrer"
										>
											ENS Internship program
										</a>
									</p>
								</div>
							</div>
							<div className="mb-3">
								<p className="navHeading nh2">Canadian Scholarships</p>
								<div>
									<p>
										<a href="https://www.shastriinstitute.org/" target="_blank" rel="noreferrer">
											Indo-Shastri Canadian Institute
										</a>
									</p>
									<p>
										<a href="https://indocanadaeducation.org/" target="_blank" rel="noreferrer">
											Indo-Canada Education Council
										</a>
									</p>
									<p>
										<a
											href="https://www.mitacs.ca/en/programs/globalink/come-to-canada"
											target="_blank"
											rel="noreferrer"
										>
											MITACS
										</a>
									</p>
								</div>
							</div>
							<div className="mb-3">
								<p className="navHeading nh2">Japanese Scholarships</p>
								<div>
									<p>
										<a href="https://www.jsps.go.jp/english/" target="_blank" rel="noreferrer">
											JSPS
										</a>
									</p>
									<p>
										<a
											href="https://www.in.emb-japan.go.jp/Education/japanese_government_scholarships.html"
											target="_blank"
											rel="noreferrer"
										>
											MEXT Scholarship
										</a>
									</p>
								</div>
							</div>
							<div className="mb-3">
								<p className="navHeading nh2">Other Scholarships</p>
								<div className="d-flex">
									<div style={{ marginRight: "20px" }}>
										<p>
											<a href="https://www.iusstf.org/" target="_blank" rel="noreferrer">
												USA
											</a>
										</p>
										<p>
											<a
												href="https://aistic.gov.in/ASEAN/HomePage"
												target="_blank"
												rel="noreferrer"
											>
												Asean
											</a>
										</p>
										<p>
											<a
												href="http://www.anso.org.cn/programmes/talent/scholarship/"
												target="_blank"
												rel="noreferrer"
											>
												China
											</a>
										</p>
										<p>
											<a
												href="https://www.icdf.org.tw/ct.asp?xItem=12505&CtNode=30316&mp=2"
												target="_blank"
												rel="noreferrer"
											>
												Taiwan
											</a>
										</p>
									</div>
									<div>
										<p>
											<a
												href="https://www.crg.eu/en/content/training/undergraduates-and-masters"
												target="_blank"
												rel="noreferrer"
											>
												Spain
											</a>
										</p>
										<p>
											<a
												href="https://www.scholarships.at/default.aspx"
												target="_blank"
												rel="noreferrer"
											>
												Austria
											</a>
										</p>
										<p>
											<a
												href="https://www.nzscholarships.govt.nz/"
												target="_blank"
												rel="noreferrer"
											>
												New Zealand
											</a>
										</p>
										<p>
											<a
												href="https://www.ait.ac.th/admissions/scholarships/bangchak-master-scholarships/"
												target="_blank"
												rel="noreferrer"
											>
												Thailand
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className="mb-3">
								<p className="navHeading nh2">Other Links</p>
								<div>
									<p>
										<Link onClick={hideNav} to="/opportunities/internships">
											Internships
										</Link>
									</p>
									<p>
										<Link onClick={hideNav} to="/opportunities/pg_phd_post_doc">
											PG / PhD / Post Doc
										</Link>
									</p>
									<p>
										<a
											href="https://www.indianstudentsgermany.org/"
											target="_blank"
											rel="noreferrer"
										>
											ISG
										</a>
									</p>
									<p>
										<a href="https://www.britishcouncil.in/" target="_blank" rel="noreferrer">
											British Council India
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div style={{ maxWidth: "30%" }}>
						<p className="navHeading nh1 mb-3" style={{ color: "#000" }}>
							For Researchers
						</p>
						<div
							className="d-flex flex-wrap"
							style={{ justifyContent: "space-between", flexDirection: "column" }}
						>
							<div>
								<p className="navHeading nh2">Indo - Germany</p>
								<div>
									<p>
										<a
											href="https://www.humboldt-foundation.de/en/"
											target="_blank"
											rel="noreferrer"
										>
											Alexander von Humboldt Foundation
										</a>
									</p>
									<p>
										<a
											href="https://www.daad.in/en/study-research-in-germany/"
											target="_blank"
											rel="noreferrer"
										>
											DAAD
										</a>
									</p>
									<p>
										<a href="https://www.igstc.org" target="_blank" rel="noreferrer">
											Indo-German Science & Technology Center
										</a>
									</p>
								</div>
							</div>
							<div>
								<p className="navHeading nh2 mt-3">Others</p>
								<div>
									<p>
										<a href="http://www.cefipra.org/" target="_blank" rel="noreferrer">
											Indo - French
										</a>
									</p>
									<p>
										<a href="https://www.jsps.go.jp/english/" target="_blank" rel="noreferrer">
											Indo - Japan
										</a>
									</p>
									<p>
										<a href="https://www.iusstf.org/" target="_blank" rel="noreferrer">
											Indo - USA
										</a>
									</p>
									<p>
										<a
											href="https://www.ukri.org/our-work/collaborating-internationally/our-international-offices/ukri-india/"
											target="_blank"
											rel="noreferrer"
										>
											Indo - UK
										</a>
									</p>
									<p>
										<a href="https://aistic.gov.in/ASEAN/HomePage" target="_blank" rel="noreferrer">
											Indo - Asean
										</a>
									</p>
									<p>
										<a href="https://www.shastriinstitute.org/" target="_blank" rel="noreferrer">
											Indo - Canada
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
