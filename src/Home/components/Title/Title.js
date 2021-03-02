import React, { useState } from "react";
import { iiti_logo_4 } from "../../../assets";
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
						<img src={iiti_logo_4} style={{ width: '100%' }} alt="logo" className="titleLogo" />
					</Navbar.Brand>
					<BiMenu className="burger" onClick={() => setShow(true)} />
				</div>
				<MobileMenu show={show} setShow={setShow} />
			</Navbar>
		</div>
	);
};
