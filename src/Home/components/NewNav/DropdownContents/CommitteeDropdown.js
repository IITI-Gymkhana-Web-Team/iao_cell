import React from "react";
import { Heading, HeadingLink, LinkList, DropdownSection, Icon } from "./Components";
import { Link } from "react-router-dom";

const CommitteeDropdown = () => {
	return (
		<div style={{ width: "24rem" }}>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink>
						<Link to="/committee/oc">
							<Icon /> Outreach Committee
						</Link>
					</HeadingLink>
					<HeadingLink noMarginBottom>
						<Link to="/committee/mec">
							<Icon /> ISMAE Committee
						</Link>
					</HeadingLink>
				</ul>
			</DropdownSection>
		</div>
	);
};

export default CommitteeDropdown;
