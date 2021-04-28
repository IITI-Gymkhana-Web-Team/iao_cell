import React from "react";
import { iiti_2 } from "../../../assets";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export const Footer = () => {
	return (
		<div>
			<div className="footer">
				<Container fluid className="footergrid">
					<Row>
						<Col xs={12} lg={3}>
							<div className="logo">
								<a href="http://iiti.ac.in" target="_blank">
									<img src={iiti_2} style={{ maxWidth: "170px" }} />
								</a>
							</div>
						</Col>
						<Col xs={12} lg={3} className="address mt-0">
							<h4 className="font-acme">REACH &nbsp;OUT &nbsp;TO &nbsp;US</h4>
							<div className="addresstext font-ubuntu">
								{/* Address:{" "} */}
								<a
									href="https://goo.gl/maps/fKyPMk9qdPgYG35t7"
									target="_blank"
									style={{ color: "white" }}
								>
									Indian Institute of Technology Indore, Khandwa Road, Simrol,
									Indore 453552, INDIA
								</a>
								<div className="phonetext" style={{ color: "white" }}>
									Phone No:{" "}
									<a href="tel:+91 07316603479" style={{ color: "white" }}>
										+91 07316603479
									</a>
									<br></br>
									Email:{" "}
									<a href="mailto:intloffice@iiti.ac.in">intloffice@iiti.ac.in</a>
									<br></br>
									<a href="https://goo.gl/maps/qmEGMw6uednJPnGd8" target="_blank">
										(22.5204° N, 75.9207° E)
									</a>
								</div>
							</div>
						</Col>
						<Col xs={12} lg={3}>
							<div className="links mt-0 font-ubuntu">
								<h4 className="font-acme">QUICK LINKS</h4>
								<a target="_blank" href="https://academic.iiti.ac.in/">
									Academic
								</a>
								<br></br>
								<a target="_blank" href="http://rnd.iiti.ac.in/">
									Research
								</a>
								<br></br>
								<a target="_blank" href="http://library.iiti.ac.in/">
									Library
								</a>
								<br></br>
								<a target="_blank" href="http://iiti.ac.in/page/campus-facilities">
									Campus Facilities
								</a>
							</div>
						</Col>
						<Col className="social mt-0" xs={12} lg={3}>
							<h4 className="font-acme">SOCIAL MEDIA</h4>
							<div>
								<a
									href="https://www.instagram.com/iitindoreofficial/?hl=en"
									target="_blank"
								>
									<FaInstagram className="pop-out" />
								</a>
								<a
									href="https://www.facebook.com/pages/Indian%20Institute%20of%20Technology%20Indore/112510072096662/"
									target="_blank"
								>
									<FaFacebookSquare className="pop-out" />
								</a>
								<a
									href="https://www.linkedin.com/school/iit-indore/"
									target="_blank"
								>
									<FaLinkedin className="pop-out" />
								</a>
								<a href="https://twitter.com/IITIOfficial" target="_blank">
									<FaTwitter className="pop-out" />
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="Documents">
				<p>© 2021 International Affairs, IIT Indore</p>
			</div>
		</div>
	);
};
