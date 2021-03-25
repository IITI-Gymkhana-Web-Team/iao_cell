import React from "react";
import { Heading, HeadingLink, LinkList, DropdownSection, Icon } from "./Components";
import { Link } from "react-router-dom";

const PsDropdown = () => {
	return (
		<div style={{ width: "25rem" }}>
			<DropdownSection data-first-dropdown-section noMarginBottom>
				<h3 className="mt-1 ml-3" style={{ color: "#6772e5" }}>
					INBOUND
				</h3>
				<div className="d-flex outDropdown">
					<DropdownSection>
						<HeadingLink>
							<Icon /> Faculty
						</HeadingLink>
						<li>
							<Link to="/ProsFaculty/visa">Visa Process</Link>
						</li>
						<li>
							<Link to="/ProsFaculty/places">Places to visit</Link>
						</li>
					</DropdownSection>
					<DropdownSection>
						<HeadingLink>
							<Icon /> Student
						</HeadingLink>
						<li>
							<Link to="/ProsStud/admission">Admission</Link>
						</li>
						<li>
							<Link to="/ProsStud/programs">Programs</Link>
						</li>
						<li>
							<Link to="/ProsStud/visa">Visa Process</Link>
						</li>
						<li>
							<Link to="/ProsStud/places">Places to visit</Link>
						</li>
					</DropdownSection>
				</div>
			</DropdownSection>

			<DropdownSection noMarginBottom>
				<h3 className="ml-3 outbound" style={{ color: "#6772e5" }}>
					OUTBOUND
				</h3>
				<div className="d-flex outDropdown">
					<DropdownSection>
						<HeadingLink>
							<Icon /> Faculty
						</HeadingLink>
					</DropdownSection>
					<DropdownSection>
						<HeadingLink>
							<Icon /> Student
						</HeadingLink>
					</DropdownSection>
				</div>
			</DropdownSection>
		</div>
	);
};

export default PsDropdown;
