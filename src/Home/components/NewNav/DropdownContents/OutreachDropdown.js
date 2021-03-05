import React from "react";
import { Heading, HeadingLink, LinkList, DropdownSection, Icon } from "./Components";
import { Link } from "react-router-dom";

const OutreachDropdown = () => {
	return (
		<div style={{ width: "11rem" }}>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink>
						<Link to="/outreach/news">
							<Icon /> News
						</Link>
					</HeadingLink>
					<HeadingLink noMarginBottom>
						<Link to="/">
							<Icon /> Events
						</Link>
					</HeadingLink>
				</ul>
			</DropdownSection>
		</div>
	);
};

export default OutreachDropdown;
