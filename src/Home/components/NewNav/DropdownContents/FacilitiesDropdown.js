import React from "react";
import { Heading, HeadingLink, LinkList, DropdownSection, Icon } from "./Components";
import { Link } from "react-router-dom";

const FacilitiesDropdown = () => {
	return (
		<div style={{ width: "20rem" }}>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink>
						<a href="http://hostel.iiti.ac.in/" target="_blank">
							<Icon />
							Hostels
						</a>
					</HeadingLink>
					<HeadingLink>
						<Link to="/guestHouse">
							<Icon />
							Guest House
						</Link>
					</HeadingLink>
					<HeadingLink>
						<a href="http://eateries.iiti.ac.in/" target="_blank">
							<Icon />
							Eateries
						</a>
					</HeadingLink>
					<HeadingLink>
						<a href="http://people.iiti.ac.in/~medical/" target="_blank">
							<Icon />
							Health Centre
						</a>
					</HeadingLink>
					<HeadingLink>
						<a href="http://iiti.ac.in/page/counselling-cell" target="_blank">
							<Icon />
							Counselling Cell
						</a>
					</HeadingLink>
					<HeadingLink>
						<a href="http://placement.iiti.ac.in/" target="_blank">
							<Icon />
							Training and Placement
						</a>
					</HeadingLink>
					<HeadingLink>
						<a href="http://cc.iiti.ac.in/" target="_blank">
							<Icon />
							Computer and IT Center
						</a>
					</HeadingLink>
					<HeadingLink>
						<a href="http://people.iiti.ac.in/~creche/" target="_blank">
							<Icon />
							Nursery School
						</a>
					</HeadingLink>
					<HeadingLink>
						<a href="http://iiti.ac.in/page/e-payments" target="_blank">
							<Icon />
							E-Payments
						</a>
					</HeadingLink>
					<HeadingLink>
						<a
							href="http://people.iiti.ac.in/~smartcard/CampusCards.html"
							target="_blank"
						>
							<Icon />
							Smart card facility
						</a>
					</HeadingLink>
					<HeadingLink>
						<a href="http://vbs.iiti.ac.in/" target="_blank">
							<Icon />
							Transport Booking
						</a>
					</HeadingLink>
					<HeadingLink noMarginBottom>
						<a
							href="https://www.iiti.ac.in/public/storage/Green%20vehicle%20schedule-%202021.pdf"
							target="_blank"
						>
							<Icon />
							Green vehicle schedule
						</a>
					</HeadingLink>
				</ul>
			</DropdownSection>
		</div>
	);
};

export default FacilitiesDropdown;
