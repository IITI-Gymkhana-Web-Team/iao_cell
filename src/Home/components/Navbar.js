import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomNavDropdownLink } from "./CustomNavDropdownLink";

export const NavBar = () => {
	const [show, setShow] = useState(false);
	const [index, setIndex] = useState(-1);

	const showDropdown = (i) => {
		console.log(i);
		setIndex(i);
		console.log("index", index);
		setShow(!show);
	};
	const hideDropdown = () => {
		setShow(false);
	};

	return (
		<div>
			<Navbar expand="lg" className="navbar2">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<CustomNavDropdownLink name="About Us" show={show} ival={0} index={index} showDropdown={showDropdown} hideDropdown={hideDropdown} />
						<CustomNavDropdownLink name="People" show={show} ival={1} index={index} showDropdown={showDropdown} hideDropdown={hideDropdown} />
						<CustomNavDropdownLink name="Education" show={show} ival={2} index={index} showDropdown={showDropdown} hideDropdown={hideDropdown} />
						<CustomNavDropdownLink name="Research" show={show} ival={3} index={index} showDropdown={showDropdown} hideDropdown={hideDropdown} />
						<CustomNavDropdownLink name="Admission" show={show} ival={4} index={index} showDropdown={showDropdown} hideDropdown={hideDropdown} />
						<CustomNavDropdownLink name="Facilities" show={show} ival={5} index={index} showDropdown={showDropdown} hideDropdown={hideDropdown} />
						<CustomNavDropdownLink name="Outreach" show={show} ival={6} index={index} showDropdown={showDropdown} hideDropdown={hideDropdown} />
						<CustomNavDropdownLink name="Contact" show={show} ival={7} index={index} showDropdown={showDropdown} hideDropdown={hideDropdown} />
						<CustomNavDropdownLink name="Partnerships" show={show} ival={8} index={index} showDropdown={showDropdown} hideDropdown={hideDropdown} />
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
