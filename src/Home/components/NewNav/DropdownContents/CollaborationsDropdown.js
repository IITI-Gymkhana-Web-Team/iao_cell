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
					<HeadingLink>
						<Icon /> Mobility Exchange
					</HeadingLink>
					<div className="d-flex mobDropdown">
						<DropdownSection>
							<li>
								<a href="https://academic.iiti.ac.in/" target="_blank">
									Student
								</a>
							</li>
							<li>
								<Link to="/">Faculty</Link>
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
