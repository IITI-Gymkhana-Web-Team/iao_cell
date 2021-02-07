import React from "react";
import logo from "../../assets/logo.png";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Title = () => {
	return (
		<div className="Title">
			<Navbar bg="light" variant="light" className="ba">
				<Navbar.Brand href="#home">
					<img src={logo} alt="logo" className="titleLogo" />
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						<h2 className="titleText">International Relations</h2>
					</Navbar.Text>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
