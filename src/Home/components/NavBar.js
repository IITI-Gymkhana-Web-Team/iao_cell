import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomNavDropdownLink } from "./CustomNavDropdownLink";

export const NavBar = () => {
	const [show, setShow] = useState(false);
	const [index, setIndex] = useState(-1);

	const [navLinks, setNavLinks] = useState([
		{
			ival: 0,
			name: "+ About",
			innerLinks: [
				{ name: "Link 1", href: "#" },
				{ name: "Link 2", href: "#" },
			],
		},
		{
			ival: 1,
			name: "+ People",
			innerLinks: [
				{ name: "Link 1", href: "#" },
				{ name: "Link 2", href: "#" },
				{ name: "Link 3", href: "#" },
			],
		},
		{
			ival: 2,
			name: "+ Education",
			innerLinks: [
				{ name: "Link 1", href: "#" },
				{ name: "Link 2", href: "#" },
				{ name: "Link 3", href: "#" },
			],
		},
		{
			ival: 3,
			name: "+ Research",
			innerLinks: [
				{ name: "Link 1", href: "#" },
				{ name: "Link 2", href: "#" },
				{ name: "Link 3", href: "#" },
			],
		},
		{
			ival: 4,
			name: "+ Admission",
			innerLinks: [
				{ name: "Link 1", href: "#" },
				{ name: "Link 2", href: "#" },
				{ name: "Link 3", href: "#" },
				{ name: "Link 4", href: "#" },
			],
		},
		{
			ival: 5,
			name: "+ Facilities",
			innerLinks: [
				{ name: "Link 1", href: "#" },
				{ name: "Link 2", href: "#" },
				{ name: "Link 3", href: "#" },
			],
		},
		{
			ival: 6,
			name: "+ Outreach",
			innerLinks: [
				{ name: "Link 1", href: "#" },
				{ name: "Link 2", href: "#" },
				{ name: "Link 3", href: "#" },
			],
		},
		{
			ival: 7,
			name: "+ Contact",
			innerLinks: [
				{ name: "Link 1", href: "#" },
				{ name: "Link 2", href: "#" },
				{ name: "Link 3", href: "#" },
			],
		},
	]);

	const showDropdown = (i) => {
		console.log(i);
		setIndex(i);
		console.log(window.innerWidth);
		setShow(!show);
	};

	const hideDropdown = () => {
		setIndex(-1);
		setShow(false);
	};

	return (
		<div className="nav2">
			<Navbar variant="dark" expand="lg" className="navbar2">
				<span className="textStuff"> </span>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						{navLinks.map((navLink) => {
							return (
								<CustomNavDropdownLink navLink={navLink} show={show} index={index} showDropdown={showDropdown} hideDropdown={hideDropdown} />
							);
						})}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
