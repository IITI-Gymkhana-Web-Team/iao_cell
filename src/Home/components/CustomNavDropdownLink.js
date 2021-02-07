import React from "react";
import { NavDropdown } from "react-bootstrap";

export const CustomNavDropdownLink = ({ name, ival, index, show, showDropdown, hideDropdown }) => {
	return (
		<NavDropdown
			title={name}
			id={"basic-nav-dropdown-" + String(Number(ival) + 1)}
			show={index == Number(ival) ? show : false}
			onMouseEnter={() => showDropdown(Number(ival))}
			onMouseLeave={() => hideDropdown()}
		>
			<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
			<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
			<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
			<NavDropdown.Divider />
			<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		</NavDropdown>
	);
};
