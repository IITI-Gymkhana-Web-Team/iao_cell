import React from "react";
import img from "../../assets/iiti_logo.png";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
	return (
		<div className="footer mt-5">
			<Container fluid className="footergrid">
				<Row>
					<Col xs={12} lg={3}>
						<div className="logo">
							<a href="http://iiti.ac.in" target="_blank">
								<img src={img} />
							</a>
						</div>
					</Col>
					<Col className="footerdesc" xs={12} lg={9}>
						<div class="doclinks">
							<a href="#"> Doc1 </a>|<a href="#"> Doc2 </a>|<a href="#"> Doc3 </a>
						</div>

						<Container className="addphone">
							<Row>
								<Col xs={12} lg={4} className="address">
									<div className="addresstext">
										Address:{" "}
										<a href="https://goo.gl/maps/fKyPMk9qdPgYG35t7" target="_blank" style={{ color: "black" }}>
											Khandwa Rd, Simrol, Madhya Pradesh 453552
										</a>
									</div>
								</Col>
								<Col xs={12} lg={4} className="phone">
									<div className="phonetext">
										Phone No. -{" "}
										<a href="tel:1234567890" style={{ color: "black" }}>
											1234567890
										</a>
									</div>
								</Col>
								<Col className="social" xs={12} lg={4}>
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
					</Col>
				</Row>
			</Container>
		</div>
	);
};
