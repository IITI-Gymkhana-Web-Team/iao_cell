import React from "react";
import { NavDropdown } from "react-bootstrap";
import { RiArrowDropDownLine } from "react-icons/ri";

export const CustomNavDropdownLink = ({ navLink, index, show, showDropdown, hideDropdown }) => {
	const navTitle = (
		<>
			{navLink["name"]} <RiArrowDropDownLine className="downIcon" />
		</>
	);

	return (
		<NavDropdown
			className="font-ubuntu"
			title={navTitle}
			id={"basic-nav-dropdown-" + String(Number(navLink["ival"]) + 1)}
			show={index == Number(navLink["ival"]) ? show : false}
			onMouseEnter={() => {
				if (window.innerWidth > 992) {
					showDropdown(navLink["ival"]);
				}
			}}
			onMouseLeave={() => hideDropdown()}
			onClick={() => showDropdown(navLink["ival"])}
		>
			{navLink["innerLinks"].map((innerLink) => {
				return (
					<NavDropdown.Item href={innerLink["href"]} className="font-ubuntu">
						{innerLink["name"]}
					</NavDropdown.Item>
				);
			})}
		</NavDropdown>
	);
};
