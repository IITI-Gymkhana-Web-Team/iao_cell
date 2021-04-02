import React, { useState } from "react";
import {
	Heading,
	HeadingLink,
	LinkList,
	DropdownSection,
	Icon,
} from "./Components";
import { Link } from "react-router-dom";

const CollaborationsDropdown = () => {
	const [index, setIndex] = useState(0);

	return (
		<div style={{ width: "28rem" }}>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink>
						<Link
							to="#"
							onClick={() => {
								setIndex(index == 1 ? 0 : 1);
							}}
						>
							<Icon /> MOU
						</Link>
					</HeadingLink>
					{index == 1 && (
						<div className="d-flex mobDropdown">
							<DropdownSection>
								<li>
									<Link to="/mou/asia">
										Asian Universities
									</Link>
								</li>
								<li>
									<Link to="/mou/australia">
										Australian Universities
									</Link>
								</li>
								<li>
									<Link to="/mou/america">
										American Universities
									</Link>
								</li>
								<li>
									<Link to="/mou/europe">
										European Universities
									</Link>
								</li>
							</DropdownSection>
						</div>
					)}

					<HeadingLink>
						<Link
							to="#"
							onClick={() => {
								setIndex(index == 2 ? 0 : 2);
							}}
						>
							<Icon /> Mobility Exchange
						</Link>
					</HeadingLink>
					{index == 2 && (
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
					)}

					<HeadingLink>
						<Link
							to="#"
							onClick={() => {
								setIndex(index == 3 ? 0 : 3);
							}}
						>
							<Icon /> International Students
						</Link>
					</HeadingLink>
					{index == 3 && (
						<div className="d-flex mobDropdown">
							<DropdownSection>
								<li>
									<Link to="/int/students">
										Students List
									</Link>
								</li>
								<li>
									<Link to="/int/testimonials">
										Testimonials
									</Link>
								</li>
							</DropdownSection>
						</div>
					)}
					<HeadingLink>
						<Link
							to="#"
							onClick={() => {
								setIndex(index == 4 ? 0 : 4);
							}}
						>
							<Icon /> Grants
						</Link>
					</HeadingLink>
					{index == 4 && (
						<div className="d-flex mobDropdown">
							<DropdownSection>
								<li>
									<Link to="/grants/bsbe">
										Biosciences and Bioengineering
									</Link>
								</li>
								<li>
									<Link to="/grants/ch">Chemistry</Link>
								</li>
								<li>
									<Link to="/grants/cse">
										Computer Science and Engineering
									</Link>
								</li>
								<li>
									<Link to="/grants/hss">
										Humanities and Social Sciences
									</Link>
								</li>
								<li>
									<Link to="/grants/math">Mathematics</Link>
								</li>
								<li>
									<Link to="/grants/me">
										Mechanical Engineering
									</Link>
								</li>
								<li>
									<Link to="/grants/mems">
										Metallurgical Engineering and Material
										Science
									</Link>
								</li>
								<li>
									<Link to="/grants/ph">Physics</Link>
								</li>
							</DropdownSection>
						</div>
					)}
					<HeadingLink>
						<Link
							to="#"
							onClick={() => {
								setIndex(index == 5 ? 0 : 5);
							}}
						>
							<Icon /> Publication
						</Link>
					</HeadingLink>
					{index == 5 && (
						<div className="d-flex mobDropdown">
							<DropdownSection>
								<li>
									<Link to="/publications/bsbe">
										Biosciences and Bioengineering
									</Link>
								</li>
								<li>
									<Link to="/publications/ch">Chemistry</Link>
								</li>
								<li>
									<Link to="/publications/cse">
										Computer Science and Engineering
									</Link>
								</li>
								<li>
									<Link to="/publications/hss">
										Humanities and Social Sciences
									</Link>
								</li>
								<li>
									<Link to="/publications/math">
										Mathematics
									</Link>
								</li>
								<li>
									<Link to="/publications/me">
										Mechanical Engineering
									</Link>
								</li>
								<li>
									<Link to="/publications/mems">
										Metallurgical Engineering and Material
										Science
									</Link>
								</li>
								<li>
									<Link to="/publications/ph">Physics</Link>
								</li>
								<li>
									<Link to="/publications/ce">
										Civil Engineering
									</Link>
								</li>
							</DropdownSection>
						</div>
					)}
				</ul>
			</DropdownSection>
		</div>
	);
};

export default CollaborationsDropdown;
