import React from "react";
import styled from "styled-components";
import { Icon, DropdownSection, Heading, HeadingLink } from "./Components";
import { Link } from "react-router-dom";

const OpportunitiesDropdown = () => {
	return (
		<div style={{ width: "52rem" }}>
			<DropdownSection data-first-dropdown-section noMarginBottom>
				<div className="d-flex outDropdown">
					<DropdownSection data-first-dropdown-section noMarginBottom>
						<h3 className="mt-1 ml-3 mb-0" style={{ color: "#6772e5" }}>
							Students
						</h3>
						<div className="d-flex outDropdown">
							<DropdownSection>
								<HeadingLink>
									<Icon />
									<Link to="/">Internships</Link>
								</HeadingLink>
								<HeadingLink>
									<Icon />
									<Link to="/opportunities/pg_phd_post_doc">PG/PhD/Post Doc</Link>
								</HeadingLink>
								<HeadingLink>
									<Icon />
									<Link to="/opportunities/scholarship">Scholarships</Link>
								</HeadingLink>
							</DropdownSection>
						</div>
					</DropdownSection>
					<DropdownSection>
						<h3 className="mt-1 ml-3 mb-0" style={{ color: "#6772e5" }}>
							Faculties
						</h3>
						<div className="d-flex outDropdown">
							<DropdownSection>
								<HeadingLink>
									<Icon />
									<a target="_blank" href="http://www.cefipra.org/">
										Indo-French
									</a>
								</HeadingLink>
								<HeadingLink>
									<Icon />
									<a target="_blank" href="https://www.jsps.go.jp/english/">
										Indo-Japan
									</a>
								</HeadingLink>
								<HeadingLink>
									<Icon /> Indo-Germany
								</HeadingLink>
								<div className="d-flex mobDropdown">
									<DropdownSection>
										<li>
											<a
												target="_blank"
												href="https://www.humboldt-foundation.de/en/"
											>
												Alexander von Humboldt Foundation
											</a>
										</li>
										<li>
											<a
												target="_blank"
												href="https://www.daad.in/en/study-research-in-germany/"
											>
												DAAD
											</a>
										</li>
										<li>
											<a target="_blank" href="https://www.igstc.org/">
												Indo-German Science & Technology Center
											</a>
										</li>
									</DropdownSection>
								</div>
								<HeadingLink>
									<Icon />
									<a target="_blank" href="https://www.iusstf.org/">
										Indo-USA
									</a>
								</HeadingLink>
								<HeadingLink>
									<Icon />
									<a
										target="_blank"
										href="https://www.ukri.org/our-work/collaborating-internationally/our-international-offices/ukri-india/"
									>
										Indo-UK
									</a>
								</HeadingLink>
								<HeadingLink>
									<Icon />
									<a target="_blank" href="https://aistic.gov.in/ASEAN/HomePage">
										Indo-ASEAN
									</a>
								</HeadingLink>
								<HeadingLink>
									<Icon /> Indo-Canada
								</HeadingLink>
								<div className="d-flex mobDropdown">
									<DropdownSection>
										<li>
											<a
												target="_blank"
												href="https://www.shastriinstitute.org/"
											>
												Indo-Shastri Canadian Institute
											</a>
										</li>
									</DropdownSection>
								</div>
							</DropdownSection>
						</div>
					</DropdownSection>
				</div>
			</DropdownSection>
		</div>
	);
};

export default OpportunitiesDropdown;
