import React, { useState, useEffect } from "react";
import "./ReachUs.css";
import Iframe from "react-iframe";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiLink2 } from "react-icons/fi";
import { BiTimeFive, BiCalendarCheck } from "react-icons/bi";

export default function ReachUs() {
	const [width, setWidth] = useState("600px");
	const [card2Width, setCard2Width] = useState("400px");

	const updateDimensions = () => {
		if (window.innerWidth <= 600) {
			setWidth("400px");
			setCard2Width("400px");
		} else setWidth("650px");
		if (window.innerWidth <= 1000 && window.innerWidth > 600) setCard2Width("650px");
		else setCard2Width("");
	};

	useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, [window.innerWidth]);

	return (
		<div className="container reachUs font-ubuntu mb-5">
			<h1 className="mt-4 mainTitle mb-3 text-center">Reach Us</h1>
			<div className="part1 p-4">
				<div
					className="card2"
					style={{
						maxHeight: "500px",
						width: card2Width,
					}}
				>
					<h3 className="font-acme">IIT Indore International Affairs</h3>
					<br />
					<p>
						Office of International Affairs,
						<br />
						Indian Institute of Technology Indore,
						<br />
						1st floor, Main Building,
						<br />
						Khandwa Road, Simrol,
						<br /> Indore - 453552
						<br />
						Madhya Pradesh,India
					</p>
					<p>
						<FaPhoneAlt className="contactIcons" />
						<a href="tel:+91 1234567890">+91 1234567890</a>
					</p>
					<p>
						<IoMdMail className="contactIcons" />
						<a href="mailto:intloffice@iiti.ac.in">intloffice@iiti.ac.in</a>
					</p>
					<p>
						<FiLink2 className="contactIcons" />
						<a href="http://iiti.ac.in/">http://iiti.ac.in</a>
					</p>
					<p>
						<BiTimeFive className="contactIcons" />
						10.00 - 19.00 Hrs
					</p>
					<p>
						<BiCalendarCheck className="contactIcons" />
						<span className="days">S</span>
						<span className="days activeDays">M</span>
						<span className="days activeDays">T</span>
						<span className="days activeDays">W</span>
						<span className="days activeDays">T</span>
						<span className="days activeDays">F</span>
						<span className="days">S</span>
					</p>
				</div>
				<Iframe
					url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5687000959156!2d75.91853441489567!3d22.520359685209645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIIT%20Indore!5e0!3m2!1sen!2sin!4v1617012970021!5m2!1sen!2sin"
					width={width}
					height="500px"
					styles={{ width: "max(400px, 50%)" }}
					loading="lazy"
					className="reachUsMap"
				></Iframe>
			</div>
		</div>
	);
}
