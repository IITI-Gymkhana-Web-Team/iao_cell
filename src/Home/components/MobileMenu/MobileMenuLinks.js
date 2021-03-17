import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";

export const MobileMenuLinks = ({ link1, setShow2, show2 }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (show2 == false) setShow(false);
	}, [show2]);

	return (
		<>
			{(typeof link1.innerLinks !== "undefined" && (
				<li className={"menu" + link1.level}>
					<span
						onClick={() => setShow(!show)}
						style={show ? { backgroundColor: "#4f3ef5", color: "white" } : { backgroundColor: "white", color: "black" }}
						className="indiMenuHeading indiMenuLink"
					>
						{link1.name}
						<HiOutlineChevronDown className={show ? "upIcon" : "downIcon"} />
					</span>
					<ul style={show ? { display: "" } : { display: "none" }} className="innerIndiMenu">
						{link1.innerLinks.map((link2) => {
							return <MobileMenuLinks link1={link2} show2={show} setShow2={setShow2} key={link2.name} />;
						})}
					</ul>
				</li>
			)) ||
				(typeof link1.innerLinks === "undefined" && (
					<li className={"menu" + link1.level + " indiMenuLink"}>
						<Link
							to={link1.link}
							onClick={() => {
								setShow2(false);
								setShow(false);
							}}
						>
							{link1.name}
						</Link>
					</li>
				))}
		</>
	);
};
