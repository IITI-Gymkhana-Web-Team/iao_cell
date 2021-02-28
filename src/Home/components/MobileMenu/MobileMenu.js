import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./MobileMenu.css";
import { BsFillSquareFill } from "react-icons/bs";

export const MobileMenu = ({ show, setShow }) => {
	const [links] = useState([
		{
			name: "About",
			innerLinks: [{ name: "About IITI", link: "/" }],
		},
		{
			name: "Research",
			innerLinks: [{ name: "R&D @IITI", link: "http://rnd.iiti.ac.in/" }],
		},
		{
			name: "People",
			innerLinks: [
				{ name: "Office of International Affairs", link: "/people/oia" },
				{ name: "Outreach Committee", link: "/people/oc" },
				{ name: "SIR Cell", link: "/people/sc" },
			],
		},
		{
			name: "Prospective Students",
			innerLinks: [
				{ name: "Visa Process", link: "/" },
				{ name: "Places To Visit", link: "/" },
				{ name: "Academic", link: "https://academic.iiti.ac.in/" },
				{ name: "Programs", link: "/" },
				{ name: "Eligibility", link: "/" },
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
			name: "Outreach",
			innerLinks: [
				{ name: "News", link: "/" },
				{ name: "Events", link: "/" },
			],
		},
		{
			name: "Collaborations",
			innerLinks: [{ name: "Collaborations", link: "/" }],
		},
		{
			name: "Contact",
			innerLinks: [{ name: "Office of IR", link: "/" }],
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
											{link2.link[0] == "h" && (
												<a target="_blank" href={link2.link} onClick={() => setShow(false)} className="font-ubuntu indiLink">
													<BsFillSquareFill className="listIcon" /> {link2.name}
												</a>
											)}
											{link2.link[0] != "h" && (
												<Link to={link2.link} onClick={() => setShow(false)} className="font-ubuntu indiLink">
													<BsFillSquareFill className="listIcon" /> {link2.name}
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
