import React from "react";
import { Heading, HeadingLink, LinkList, DropdownSection, Icon } from "./Components";
import { Link } from "react-router-dom";

const CollaborationsDropdown = () => {
	return (
		<div style={{ width: "18rem" }}>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink>
						<Link to="/mou">
							<Icon /> MOU
						</Link>
					</HeadingLink>
					<div className="d-flex mobDropdown">
						<DropdownSection>
							<li>
								<Link to="/mou/asia">Asia</Link>
							</li>
							<li>
								<Link to="/mou/australia">Australia</Link>
							</li>
							<li>
								<Link to="/mou/americas">Americas</Link>
							</li>
							<li>
								<Link to="/mou/europe">Europe</Link>
							</li>
						</DropdownSection>
					</div>
					<HeadingLink>
						<Icon /> Mobility Exchange
					</HeadingLink>
					<div className="d-flex mobDropdown">
						<DropdownSection>
							<li>
								<Link to="/mobility/student">Student</Link>
							</li>
							<li>
								<Link to="/mobility/faculty">Faculty</Link>
							</li>
						</DropdownSection>
					</div>
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
