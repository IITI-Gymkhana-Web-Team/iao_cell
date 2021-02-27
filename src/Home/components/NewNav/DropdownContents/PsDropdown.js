import React from "react";
import { Heading, HeadingLink, LinkList, DropdownSection, Icon } from "./Components";
import { Link } from "react-router-dom";

const PsDropdown = () => {
	return (
		<div style={{ width: "14.5rem" }}>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink>
						<Link to="/">
							<Icon /> Visa Process
						</Link>
					</HeadingLink>
					<HeadingLink>
						<Link to="/">
							<Icon /> Places To Visit
						</Link>
					</HeadingLink>
					<HeadingLink>
						<a href="https://academic.iiti.ac.in/" target="_blank">
							<Icon /> Academic
						</a>
					</HeadingLink>
					<HeadingLink>
						<Link to="/">
							<Icon /> Programs
						</Link>
					</HeadingLink>
					<HeadingLink noMarginBottom>
						<Link to="/">
							<Icon /> Eligibility
						</Link>
					</HeadingLink>
				</ul>
			</DropdownSection>
		</div>
	);
};

export default PsDropdown;
