import React from "react";
import { Heading, HeadingLink, LinkList, DropdownSection, Icon } from "./Components";
import { Link } from "react-router-dom";

const AboutDropdown = () => {
	return (
		<div style={{ visibility: 'hidden', width: "20rem" }}>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink>
						<Link to="/people/oia">
							<Icon /> International Affairs
						</Link>
					</HeadingLink>
					<HeadingLink noMarginBottom>
						<Link to="/people/sc">
							<Icon /> SIA Cell
						</Link>
					</HeadingLink>
				</ul>
			</DropdownSection>
			{/*<DropdownSection>
				<div>
					<Heading>
						<Icon />
						From the Blog
					</Heading>
					<LinkList marginLeft="25px">
						<li>
							<a href="/">Stripe Atlas &rsaquo;</a>
						</li>
						<li>
							<a href="/">Stripe Home &rsaquo;</a>
						</li>
						<li>
							<a href="/">Improved Fraud Detection &rsaquo;</a>
						</li>
					</LinkList>
				</div>
			</DropdownSection>*/}
		</div>
	);
};

export default AboutDropdown;
