import React, { useState } from "react";
import { iiti_logo_4 } from "../../../assets";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Title.css";
import { BiMenu } from "react-icons/bi";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { CustomNavbar } from "./CustomNavbar";

export const Title = () => {
	const [show, setShow] = useState(false);
	const [i, setI] = useState(0);

	return (
		<div className="Title">
			<Navbar bg="light" variant="light" className="ba">
				<div className="container-fluid">
					<Navbar.Brand href="/">
						<img src={iiti_logo_4} alt="logo" className="titleLogo" />
					</Navbar.Brand>
					<CustomNavbar />
					<BiMenu
						className="burger"
						onClick={() => {
							setI(1);
							setShow(true);
						}}
					/>
				</div>
				<MobileMenu show={show} setShow={setShow} i={i} setI={setI} />
			</Navbar>
		</div>
	);
};
