import React, { useState } from "react";
import logo from "../../../assets/iiti_logo_4.png";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Title.css";
import { BiMenu } from "react-icons/bi";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Title = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="Title">
			<Navbar bg="light" variant="light" className="ba">
				<div className="container-fluid">
					<Navbar.Brand href="/">
						<img src={logo} alt="logo" className="titleLogo" />
					</Navbar.Brand>
					<BiMenu className="burger" onClick={() => setShow(true)} />
				</div>
				<MobileMenu show={show} setShow={setShow}/>
			</Navbar>
		</div>
	);
};
