import React from "react";
import img from "../../assets/iiti_logo.png";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
	return (
<<<<<<< HEAD
		<div className="footer mt-5">
=======
		<div>
		<div className="footer">
>>>>>>> 328eb00be26b5ca0521ac8aa2d374ea41212149d
			<Container fluid className="footergrid">
				<Row>
					<Col xs={12} lg={3}>
						<div className="logo">
							<a href="http://iiti.ac.in" target="_blank">
								<img src={img} />
							</a>
						</div>
					</Col>
					<Col xs={12} lg={3} className="address mt-0">
						<h4 className="font-acme">REACH OUT TO US</h4>
						<div className="addresstext font-ubuntu">
							{/* Address:{" "} */}
<<<<<<< HEAD
							<a href="https://goo.gl/maps/fKyPMk9qdPgYG35t7" target="_blank" style={{ color: "rgb(211, 197, 197)" }}>
								Indian Institute of Technology Indore, Khandwa Road, Simrol, Indore 453552, INDIA
							</a>
							<div className="phonetext" style={{ color: "rgb(211, 197, 197)" }}>
								Phone No:{" "}
								<a href="tel:1234567890" style={{ color: "rgb(211, 197, 197)" }}>
=======
							<a href="https://goo.gl/maps/fKyPMk9qdPgYG35t7" target="_blank" style={{ color: "white" }}>
								Indian Institute of Technology Indore,
								Khandwa Road, Simrol,
								Indore 453552,
								INDIA
										</a>
							<div className="phonetext" style={{ color: "white" }}>
								Phone No: {" "}
								<a href="tel:1234567890" style={{ color: "white" }}>
>>>>>>> 328eb00be26b5ca0521ac8aa2d374ea41212149d
									+91 1234567890
								</a>
								<br></br>
								<a>Email:</a>
								<a>office@iiti.ac.in</a>
								<br></br>
								<a>(22.5204° N, 75.9207° E)</a>
							</div>
						</div>
					</Col>
					<Col xs={12} lg={3}>
						<div className="links mt-0 font-ubuntu">
							<h4 className="font-acme">QUICK LINKS</h4>
							<a href="dumylink.com">Dummy link one</a>
							<br></br>
							<a href="dumylink.com">Dummy link Two</a>
							<br></br>
							<a href="dumylink.com">Dummy link Three</a>
							<br></br>
							<a href="dumylink.com">Dummy link Four</a>
							<br></br>
							<a href="dumylink.com">Dummy link Five</a>
						</div>
					</Col>
					<Col className="social mt-0" xs={12} lg={3}>
						<h4 className="font-acme">SOCIAL MEDIA</h4>
						<div>
							<a href="#" target="_blank">
								<i class="fab fa-instagram"></i>
							</a>
							<a href="#/" target="_blank">
								<i class="fab fa-facebook-f"></i>
							</a>
							<a href="#" target="_blank">
								<i class="fab fa-linkedin-in"></i>
							</a>
							<a href="#" target="_blank">
								<i class="far fa-envelope"></i>
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
		<div className="Documents">
		<ul>
			<li>© 2020 International Affairs, IIT Indore</li>
			<li>Terms and Conditions</li>
			<li>Privacy Policy</li>
			<li>Products and Services</li>
			<li>Other documents</li>
		</ul>
	</div>
	</div>
	);
};
