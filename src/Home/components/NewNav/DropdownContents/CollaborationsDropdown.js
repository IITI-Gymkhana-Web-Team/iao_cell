import React from "react";
import { Heading, HeadingLink, LinkList, DropdownSection, Icon } from "./Components";
import { Link } from "react-router-dom";

const CollaborationsDropdown = () => {
	return (
		<div style={{ width: "15.5rem" }}>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink noMarginBottom>
						<Link to="/">
							<Icon /> Collaborations
						</Link>
					</HeadingLink>
				</ul>
			</DropdownSection>
		</div>
	);
};

export default CollaborationsDropdown;
