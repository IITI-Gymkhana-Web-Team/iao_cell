import React from "react";
import logo from "../../assets/iiti_logo_1.png";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Title = () => {
	return (
		<div className="Title">
			<p className="titleCollege">
				<div className="container-fluid">Indian Institute of Technology, Indore</div>
			</p>
			<Navbar bg="light" variant="light" className="ba">
				<div className="container-fluid">
					<Navbar.Brand href="#home">
						<img src={logo} alt="logo" className="titleLogo" />
					</Navbar.Brand>
					{/*
						<Navbar.Toggle />
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text>
								<h2 className="titleText" id="titleText1">
									International Relations
								</h2>
							</Navbar.Text>
						</Navbar.Collapse>
					*/}
				</div>
			</Navbar>
		</div>
	);
};
