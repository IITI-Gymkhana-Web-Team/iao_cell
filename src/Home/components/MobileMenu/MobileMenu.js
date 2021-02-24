import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./MobileMenu.css";
import { BsFillSquareFill } from "react-icons/bs";

export const MobileMenu = ({ show, setShow }) => {
	const [links] = useState([
		{
			name: "About",
			innerLinks: [
				{ name: "Home", link: "/" },
				{ name: "Open Source", link: "/" },
			],
		},
		{
			name: "People",
			innerLinks: [
				{ name: "People", link: "/people" },
				{ name: "Link2", link: "/" },
			],
		},
		{
			name: "Education",
			innerLinks: [
				{ name: "Link1", link: "/" },
				{ name: "Link2", link: "/" },
			],
		},
		{
			name: "Research",
			innerLinks: [
				{ name: "Link1", link: "/" },
				{ name: "Link2", link: "/" },
			],
		},
		{
			name: "Admission",
			innerLinks: [
				{ name: "Link1", link: "/" },
				{ name: "Link2", link: "/" },
			],
		},
		{
			name: "Facilities",
			innerLinks: [
				{ name: "Link1", link: "/" },
				{ name: "Link2", link: "/" },
			],
		},
		{
			name: "Outreach",
			innerLinks: [
				{ name: "Link1", link: "/" },
				{ name: "Link2", link: "/" },
			],
		},
		{
			name: "Contact",
			innerLinks: [
				{ name: "Link1", link: "/" },
				{ name: "Link2", link: "/" },
			],
		},
	]);

	return (
		<div className="mobileMenuOuter" style={show ? { display: "" } : { display: "none" }}>
			<div className="mobileMenu">
				<AiOutlineCloseCircle className="closeIcon" onClick={() => setShow(false)} />
				<h4 className="font-acme menuHeading">International Relations, IITI</h4>
				{links.map((link1) => {
					return (
						<div className="indiMenu">
							<h5 className="mobileMenuHeading font-acme">{link1.name}</h5>
							<ul>
								{link1.innerLinks.map((link2) => {
									return (
										<li>
											<Link to={link2.link} onClick={() => setShow(false)} className="font-ubuntu indiLink">
												<BsFillSquareFill className="listIcon" /> {link2.name}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
};
