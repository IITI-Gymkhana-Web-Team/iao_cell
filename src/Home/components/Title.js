import React from "react";
import logo from "../../assets/iiti_logo_1.png";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Title = () => {
	return (
		<div className="Title">
			<p className="titleCollege">
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
			</p>
			<Navbar bg="light" variant="light" className="ba">
				<div className="container-fluid">
					<Navbar.Brand href="#home">
						<img src={logo} alt="logo" className="titleLogo" />
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							<h2 className="titleText" id="titleText1">
								International Cell
							</h2>
						</Navbar.Text>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</div>
	);
};
