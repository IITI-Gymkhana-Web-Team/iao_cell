import React from "react";
import { Heading, HeadingLink, LinkList, DropdownSection, Icon } from "./Components";

const ResearchDropdown = () => {
	return (
		<div style={{ width: "12rem" }}>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink noMarginBottom>
						<a href="http://rnd.iiti.ac.in/" target="_blank">
							<Icon /> R&D @IITI
						</a>
					</HeadingLink>
				</ul>
			</DropdownSection>
		</div>
	);
};

export default ResearchDropdown;
