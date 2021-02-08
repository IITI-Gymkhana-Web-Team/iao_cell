import React from "react";
import logo from "../../assets/iiti_logo_2.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Title = () => {
	return (
		<div className="Title">
			{/*<p className="titleCollege">
				<div className="container-fluid">
					Indian Institute of Technology, Indore
					<a href="#" className="socLink" target="_blank">
						<i class="far fa-envelope"></i>
					</a>
					<a href="#" className="socLink" target="_blank">
						<i class="fab fa-linkedin-in"></i>
					</a>
					<a href="#" className="socLink" target="_blank">
						<i class="fab fa-instagram"></i>
					</a>
					<a href="#" className="socLink" target="_blank">
						<i class="fab fa-facebook-f"></i>
					</a>
				</div>
	</p>*/}
			<Navbar bg="light" variant="light" className="ba">
				<div className="container-fluid">
					<Navbar.Brand href="/">
						<img src={logo} alt="logo" className="titleLogo" />
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Nav className="mr-auto">
							<NavDropdown
								title={
									<div className="quickLink">
										Quick Links <i className="fas fa-caret-down" />
									</div>
								}
								id="basic-nav-dropdown-0"
								className="myqdwn"
							>
								<NavDropdown.Item className="qdwn" href="#action/3.1">
									Action
								</NavDropdown.Item>
								<NavDropdown.Item className="qdwn" href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item className="qdwn" href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Item className="qdwn" href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</div>
	);
};
