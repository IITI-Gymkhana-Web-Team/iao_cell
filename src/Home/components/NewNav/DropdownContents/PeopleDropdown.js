import React from "react";
import { Heading, HeadingLink, LinkList, DropdownSection, Icon } from "./Components";
import { Link } from "react-router-dom";

const PeopleDropdown = () => {
	return (
		<div style={{ width: "25.5rem" }}>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink>
						<Link to="/people/oia">
							<Icon /> Office of International Affairs
						</Link>
					</HeadingLink>
					<HeadingLink>
						<Link to="/people/oc">
							<Icon /> Outreach Committee
						</Link>
					</HeadingLink>
					<HeadingLink noMarginBottom>
						<Link to="/people/sc">
							<Icon /> SIR Cell
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

export default PeopleDropdown;
