import React, { useState, useEffect } from "react";
import "./ReachUs.css";
import Iframe from "react-iframe";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiLink2 } from "react-icons/fi";
// import { BiTimeFive, BiCalendarCheck } from "react-icons/bi";
import { Card, Table } from "react-bootstrap";
import { train, plane, bus } from "../../../assets";
import Saitour from "../../../assets/Sai Tour and Travelling.pdf";
import Sachidananda from "../../../assets/Sachidanand Travels.pdf";

export default function ReachUs() {
	const [width, setWidth] = useState("600px");
	const [card2Width, setCard2Width] = useState("400px");

	const updateDimensions = () => {
		if (window.innerWidth <= 350) {
			setWidth("300px");
			setCard2Width("300px");
		} else if (window.innerWidth <= 600) {
			setWidth("400px");
			setCard2Width("400px");
		} else {
			setWidth("650px");
			setCard2Width("650px");
		}
		if (window.innerWidth >= 1204 && window.innerWidth > 600) setCard2Width("");
	};

	useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	return (
		<div className="container-fluid reachUs font-ubuntu mb-5">
			<h1 className="mt-4 mainTitle mb-3 text-center">Contact Us</h1>
			<div className="part1 p-4 container">
				<div
					className="mx-auto card2 mb-3"
					style={{
						minHeight: "500px",
						width: card2Width,
					}}
				>
					<h3 className="font-acme">Office of International Affairs and Outreach</h3>
					<br />
					<p>
						Office of International Affairs and outreach,
						<br />
						Abhinandan bhavan, 7th Floor, west wing,
						<br />
						Indian Institute of Technology Indore,
						<br />
						Khandwa Road, Simrol,
						<br /> Indore - 453552
						<br />
						Madhya Pradesh,India
					</p>
					<p>
						<FaPhoneAlt className="contactIcons" />
						<a href="tel:+91 07316603479">+91 0731660 3479</a> / <a href="tel:+91 07316603573">3573</a>
					</p>
					<p>
						<IoMdMail className="contactIcons" />
						<a href="mailto:intloffice@iiti.ac.in">intloffice@iiti.ac.in</a>
					</p>
					<p>
						<FiLink2 className="contactIcons" />
						<a href="/">http://international.iiti.ac.in/</a>
					</p>
					{/* <p>
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
					</p> */}
				</div>
				<Iframe
					url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5687000959156!2d75.91853441489567!3d22.520359685209645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIIT%20Indore!5e0!3m2!1sen!2sin!4v1617012970021!5m2!1sen!2sin"
					width={width}
					height="500px"
					loading="lazy"
					className="reachUsMap mx-auto"
				></Iframe>
			</div>
			<h1 className="font-acme mt-5 text-center mb-4">How To Reach Us</h1>
			<div className=" text-justify cardsGrp">
				<Card className="mt-4" style={{ width: "max(30%,22rem)" }}>
					<Card.Header>
						<h3 className="font-acme">From Indore Railway Station</h3>
					</Card.Header>
					<Card.Img variant="top" src={train} />
					<Card.Body>
						<Card.Text>Distance: Approximately 24.4 Kms</Card.Text>
						<Card.Text>Travel time: 50 min</Card.Text>
						<Card.Text>
							Book Taxi/Auto (fare approx. INR 400-500) up to Campus of IIT Indore, Simrol
						</Card.Text>
						<Card.Text>
							Please ask your driver to follow the way via Tejaji Nagar, which is the shortest route to
							reach IIT Indore Simrol 453552 from Indore Railway Station.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="mt-4" style={{ width: "max(30%,22rem)" }}>
					<Card.Header>
						<h3 className="font-acme">From Indore Airport</h3>
					</Card.Header>
					<Card.Img variant="top" src={plane} />
					<Card.Body>
						<Card.Text>Distance: Approximately 35.3 Kms</Card.Text>
						<Card.Text>Travel time: 1hr 6min</Card.Text>
						<Card.Text>
							Book Taxi/Auto (fare approx. INR 800-900) up to Campus of IIT Indore, Simrol
						</Card.Text>
						<Card.Text>
							Please ask your driver to follow the way via Tejaji Nagar, which is the shortest route to
							reach Simrol (IIT Indore) from Indore Airport (Devi Ahilya Bai Holkar Airport).
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="mt-4" style={{ width: "max(30%,22rem)" }}>
					<Card.Header>
						<h3 className="font-acme">City Bus Service</h3>
					</Card.Header>
					<Card.Img variant="top" src={bus} />
					<Card.Body>
						<Card.Text>Distance: Approximately 22 Kms</Card.Text>
						<Card.Text>Travel time: 1hr 10min</Card.Text>
						<Card.Text>The bus fare from Bhanwarkuan to IIT Indore is INR 25 per person.</Card.Text>
						<Card.Text>
							One can board a local bus shuttle service which originates from Bhanwarkuan bus stand (about
							5km from railway station) to reach IIT Indore campus.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
			<h1 className="font-acme mt-5 text-center">Cab Services</h1>
			<div className="container">
				<Table striped bordered hover variant="primary" responsive className="mb-4 mt-2">
					<thead>
						<tr>
							<th>Name</th>
							<th>Contact Number</th>
							<th>Contract</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Sai Tour & Travelling Services</td>
							<td>
								<a href="tel:+91 9479583639">+91 9479583639</a>,
								<a href="tel:+91 9165168899">+91 9165168899</a>
							</td>
							<td>
								<a href={Saitour} target="_blank" rel="noreferrer">
									Link
								</a>
							</td>
						</tr>
						<tr>
							<td>Sachidananda Tours & Travels</td>
							<td>
								<a href="tel:+91 9826027085">+91 9826027085</a>,
								<a href="tel:+91 9893027085">+91 9893027085</a>
							</td>
							<td>
								<a href={Sachidananda} target="_blank" rel="noreferrer">
									Link
								</a>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
			<h1 className="font-acme mt-5 text-center">Emergency Contact Numbers</h1>
			<div className="container">
				<p>
					<br />
					If you are calling from any medium other than intercom, then dial 0731-660 followed by the Extension
					Number.
				</p>
				<p>
					To download the entire telephone directory,{" "}
					<a
						href="https://www.iiti.ac.in/public/storage/directory/Telephone%20directory%20(24.03.2021).pdf"
						target="_blank"
						rel="noreferrer"
					>
						Click Here
					</a>
				</p>
				<Table striped bordered hover variant="primary" responsive className="mb-5 mt-1">
					<thead>
						<tr>
							<th>Location</th>
							<th>Contact Number</th>
							<th>Section</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Emergency Control Room</td>
							<td>3117, 9589518290</td>
							<td>Emergency</td>
						</tr>
						<tr>
							<td>Ambulance</td>
							<td>7509062832</td>
							<td>Health Centre</td>
						</tr>
						<tr>
							<td>Health Centre</td>
							<td>3433</td>
							<td>Health Centre</td>
						</tr>
						<tr>
							<td>Security Supervisor</td>
							<td>6265224771</td>
							<td>Security</td>
						</tr>
						<tr>
							<td>Gate No. 1</td>
							<td>3524</td>
							<td>Security</td>
						</tr>
						<tr>
							<td>Gate No. 2</td>
							<td>3525</td>
							<td>Security</td>
						</tr>
						<tr>
							<td>Guest House</td>
							<td>+91-731-660-3479, +91-9770446725</td>
							<td>Hospitality</td>
						</tr>
						<tr>
							<td>Housekeeping Department</td>
							<td>+91-731-660-3505</td>
							<td>Hospitality</td>
						</tr>
						<tr>
							<td>Hospitality Department</td>
							<td>+91-731-660-3442</td>
							<td>Hospitality</td>
						</tr>
						<tr>
							<td>JC Bose Hall of Residence</td>
							<td>3460</td>
							<td>Security</td>
						</tr>
						<tr>
							<td>APJ Abdul Kalam Hostel Office</td>
							<td>3462</td>
							<td>Hall Of Residence</td>
						</tr>
						<tr>
							<td>CV Raman Hostel Office</td>
							<td>3454</td>
							<td>Hall Of Residence</td>
						</tr>
						<tr>
							<td>Vikram Sara Bhai Hostel Office</td>
							<td>3455, 3456</td>
							<td>Hall Of Residence</td>
						</tr>
						<tr>
							<td>Devi Ahilya Hostel Office</td>
							<td>3450, 3439</td>
							<td>Hall Of Residence</td>
						</tr>
						<tr>
							<td>HJ Bhabha Hostel Office</td>
							<td>3446, 3447</td>
							<td>Hall Of Residence</td>
						</tr>
						<tr>
							<td>Transport</td>
							<td>3557, 7509062831, 7509062834</td>
							<td>Transport</td>
						</tr>
						<tr>
							<td>Mr. Jagdish Upadhyay</td>
							<td>9981034224</td>
							<td>Electrician</td>
						</tr>
						<tr>
							<td>Mr. Manoj Pal</td>
							<td>9713687778</td>
							<td>Electrician</td>
						</tr>
						<tr>
							<td>Mr. Ashok Kumar</td>
							<td>7869865298</td>
							<td>Electrician</td>
						</tr>
						<tr>
							<td>Mr. Janu</td>
							<td>9981034220</td>
							<td>Plumber</td>
						</tr>
						<tr>
							<td>Mr. Keshraj</td>
							<td>9329880457</td>
							<td>Plumber</td>
						</tr>
						<tr>
							<td>Mr. Vinod Pal</td>
							<td>8982076134</td>
							<td>Plumber</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
}
