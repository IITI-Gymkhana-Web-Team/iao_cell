import React, { useState } from "react";
import { iiti_logo_4 } from "../../../../assets";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Title.css";
import { BiMenu } from "react-icons/bi";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { CustomNavbar } from "./CustomNavbar";
import { Link } from "react-router-dom";

export const Title = ({ setVal }) => {
	const [show, setShow] = useState(false);
	const [i, setI] = useState(0);

	const [showSearch, setShowSearch] = useState(false);
	const hideSearchComp = () => {
		setShowSearch(false);
	};
	const showSearchComp = () => {
		setShowSearch(true);
	};

	return (
		<div className="Title">
			<Navbar bg="light" variant="light" className="ba">
				<div className="container-fluid">
					<Navbar.Brand>
						<Link
							to="/"
							onClick={() => {
								setVal(0);
							}}
						>
							<img src={iiti_logo_4} alt="logo" className="titleLogo" />
						</Link>
					</Navbar.Brand>
					<CustomNavbar
						setVal={setVal}
						showSearch={showSearch}
						hideSearchComp={hideSearchComp}
						showSearchComp={showSearchComp}
						setShow={setShow}
					/>
					<BiMenu
						className="burger"
						onClick={() => {
							setI(1);
							setShow(true);
						}}
					/>
				</div>
				<MobileMenu show={show} setShow={setShow} i={i} setI={setI} showSearchComp={showSearchComp} />
			</Navbar>
		</div>
	);
};
