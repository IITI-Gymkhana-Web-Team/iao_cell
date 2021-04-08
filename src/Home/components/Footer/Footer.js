import React from "react";
import { iiti_2 } from "../../../assets";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import {
	FaInstagram,
	FaFacebookSquare,
	FaLinkedin,
	FaEnvelope,
} from "react-icons/fa";

export const Footer = () => {
	return (
		<div>
			<div className="footer">
				<Container fluid className="footergrid">
					<Row>
						<Col xs={12} lg={3}>
							<div className="logo">
								<a href="http://iiti.ac.in" target="_blank">
									<img src={iiti_2} />
								</a>
							</div>
						</Col>
						<Col xs={12} lg={3} className="address mt-0">
							<h4 className="font-acme">
								REACH &nbsp;OUT &nbsp;TO &nbsp;US
							</h4>
							<div className="addresstext font-ubuntu">
								{/* Address:{" "} */}
								<a
									href="https://goo.gl/maps/fKyPMk9qdPgYG35t7"
									target="_blank"
									style={{ color: "white" }}>
									Indian Institute of Technology Indore,
									Khandwa Road, Simrol, Indore 453552, INDIA
								</a>
								<div
									className="phonetext"
									style={{ color: "white" }}>
									Phone No:{" "}
									<a
										href="tel:1234567890"
										style={{ color: "white" }}>
										+91 1234567890
									</a>
									<br></br>
									Email:{" "}
									<a href="mailto:office@iiti.ac.in">
										office@iiti.ac.in
									</a>
									<br></br>
									<a href="https://goo.gl/maps/qmEGMw6uednJPnGd8">
										(22.5204° N, 75.9207° E)
									</a>
								</div>
							</div>
						</Col>
						<Col xs={12} lg={3}>
							<div className="links mt-0 font-ubuntu">
								<h4 className="font-acme">QUICK LINKS</h4>
								<a
									target="_blank"
									href="http://rnd.iiti.ac.in/">
									Research
								</a>
								<br></br>
								<a
									target="_blank"
									href="http://iiti.ac.in/page/administration">
									Administration
								</a>
								<br></br>
								<a
									target="_blank"
									href="http://library.iiti.ac.in/">
									Library
								</a>
								<br></br>
								<a
									target="_blank"
									href="http://iiti.ac.in/resources-generation">
									Resource Generation
								</a>
								<br></br>
								<a
									target="_blank"
									href="http://people.iiti.ac.in/~sic/">
									SIC
								</a>
							</div>
						</Col>
						<Col className="social mt-0" xs={12} lg={3}>
							<h4 className="font-acme">SOCIAL MEDIA</h4>
							<div>
								<a href="#" target="_blank">
									<FaInstagram className="pop-out" />
								</a>
								<a href="#/" target="_blank">
									<FaFacebookSquare className="pop-out" />
								</a>
								<a href="#" target="_blank">
									<FaLinkedin className="pop-out" />
								</a>
								<a href="#" target="_blank">
									<FaEnvelope className="pop-out" />
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="card Documents">
				<ul className="bottom">
					<li>© 2020 International Affairs, IIT Indore</li>
					<li>
						<a href="#">Terms and Conditions</a>
					</li>
					<li>
						<a href="#">Privacy Policy</a>
					</li>
					<li>
						<a href="#">Products and Services</a>
					</li>
					<li>
						<a href="#">Copyright</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
