import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
						<NavDropdown
							title="About Us"
							id="basic-nav-dropdown-1"
							show={index == 0 ? show : false}
							onMouseEnter={() => showDropdown(0)}
							onMouseLeave={() => hideDropdown()}
						>
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title="People"
							id="basic-nav-dropdown-2"
							show={index == 1 ? show : false}
							onMouseEnter={() => showDropdown(1)}
							onMouseLeave={() => hideDropdown()}
						>
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title="Education"
							id="basic-nav-dropdown-3"
							show={index == 2 ? show : false}
							onMouseEnter={() => showDropdown(2)}
							onMouseLeave={() => hideDropdown()}
						>
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title="Research"
							id="basic-nav-dropdown-4"
							show={index == 3 ? show : false}
							onMouseEnter={() => showDropdown(3)}
							onMouseLeave={() => hideDropdown()}
						>
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title="Admission"
							id="basic-nav-dropdown-5"
							show={index == 4 ? show : false}
							onMouseEnter={() => showDropdown(4)}
							onMouseLeave={() => hideDropdown()}
						>
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title="Facilities"
							id="basic-nav-dropdown-6"
							show={index == 5 ? show : false}
							onMouseEnter={() => showDropdown(5)}
							onMouseLeave={() => hideDropdown()}
						>
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title="Outreach"
							id="basic-nav-dropdown-7"
							show={index == 6 ? show : false}
							onMouseEnter={() => showDropdown(6)}
							onMouseLeave={() => hideDropdown()}
						>
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title="Contact"
							id="basic-nav-dropdown-8"
							show={index == 7 ? show : false}
							onMouseEnter={() => showDropdown(7)}
							onMouseLeave={() => hideDropdown()}
						>
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title="Partnerships"
							id="basic-nav-dropdown-9"
							show={index == 8 ? show : false}
							onMouseEnter={() => showDropdown(8)}
							onMouseLeave={() => hideDropdown()}
						>
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
