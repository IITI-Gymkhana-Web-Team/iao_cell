import React from "react";
import { NavDropdown } from "react-bootstrap";

export const CustomNavDropdownLink = ({ navLink, index, show, showDropdown, hideDropdown }) => {
	return (
		<NavDropdown className="font-acme"
			title={navLink["name"]}
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
				return <NavDropdown.Item href={innerLink["href"]}>{innerLink["name"]}</NavDropdown.Item>;
			})}
		</NavDropdown>
	);
};
