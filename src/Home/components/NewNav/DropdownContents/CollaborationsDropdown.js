import React from "react";
import { Heading, HeadingLink, LinkList, DropdownSection, Icon } from "./Components";
import { Link } from "react-router-dom";

const CollaborationsDropdown = () => {
	return (
		<div style={{ width: "18rem" }}>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink>
						<Link to="/">
							<Icon /> MOU
						</Link>
					</HeadingLink>
					<HeadingLink>
						<Link to="/">
							<Icon /> Mobility Exchange
						</Link>
					</HeadingLink>
					<HeadingLink>
						<a href="https://academic.iiti.ac.in/" target="_blank">
							<Icon /> Student
						</a>
					</HeadingLink>
					<HeadingLink>
						<Link to="/">
							<Icon /> Faculty
						</Link>
					</HeadingLink>
					<HeadingLink noMarginBottom>
						<Link to="/">
							<Icon /> Grants
						</Link>
					</HeadingLink>
				</ul>
			</DropdownSection>
		</div>
	);
};

export default CollaborationsDropdown;
