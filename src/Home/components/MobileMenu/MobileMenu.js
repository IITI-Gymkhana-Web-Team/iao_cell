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
				{ name: "About IITI", link: "/Aboutiiti" },
			],
		},
		{
			name: "Research",
			innerLinks: [{ name: "R&D @IITI", link: "http://rnd.iiti.ac.in/" }],
		},
		{
			name: "People",
			innerLinks: [
				{ name: "OIA", link: "/people/oia" },
				{ name: "Outreach Comm.", link: "/people/oc" },
				{ name: "SIR Cell", link: "/people/sc" },
			],
		},
		{
			name: "Opportunities",
			innerLinks: [
				{ name: "Internships", link: "/" },
				{ name: "PG/PHD", link: "/" },
				{ name: "Post Doc", link: "/" },
			],
		},
		{
			name: "Prospective",
			innerLinks: [
				{ name: "Visa Process", link: "/ProsStud/visa" },
				{ name: "Places To Visit", link: "/ProsStud/places" },
				{ name: "Academic", link: "https://academic.iiti.ac.in/" },
				{ name: "Programs", link: "/ProsStud/programs" },
				{ name: "Admission", link: "/ProsStud/admission" },
			],
		},
		{
			name: "Outreach",
			innerLinks: [
				{ name: "News", link: "/outreach/news" },
				{ name: "Events", link: "/" },
			],
		},
		{
			name: "Collaborations",
			innerLinks: [{ name: "Collaborations", link: "/" }],
		},
		{
			name: "Contact",
			innerLinks: [{ name: "Office of IR", link: "/OfficeIR" }],
		},
	]);

	return (
		<div className="mobileMenuOuter" style={show ? { display: "" } : { display: "none" }}>
			<div className="mobileMenu">
				<AiOutlineCloseCircle className="closeIcon" onClick={() => setShow(false)} />
				<h4 className="font-acme menuHeading">International Relations, IITI</h4>
				{links.map((link1, index) => {
					return (
						<div key={`${index}-di`} className="indiMenu">
							<h5 className="mobileMenuHeading font-acme">{link1.name}</h5>
							<ul>
								{link1.innerLinks.map((link2, index) => {
									return (
										<li key={`${index}-mobi`}>
											{link2.link[0] == "h" && (
												<a target="_blank" href={link2.link} onClick={() => setShow(false)} className="font-ubuntu indiLink">
													{link2.name}
												</a>
											)}
											{link2.link[0] != "h" && (
												<Link to={link2.link} onClick={() => setShow(false)} className="font-ubuntu indiLink">
													{link2.name}
												</Link>
											)}
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
				<Link to="/" style={{ textAlign: "center", width: "150px" }}>
					<button className="btn btn-primary" style={{ width: "150px", textAlign: "center" }}>
						<h5 className="font-ubuntu">Sign In</h5>
					</button>
				</Link>
			</div>
		</div>
	);
};
