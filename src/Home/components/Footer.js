import React from "react";
import img from "../../assets/iiti_logo.png";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
	return (
		<div className="footer">
			<Container fluid className="footergrid">
				<Row>
					<Col xs={12} lg={3}>
						<div className="logo">
							<img src={img} />
						</div>
					</Col>
					<Col className="footerdesc" xs={12} lg={9}>
						<div class="doclinks">
							<a href="#"> Doc1 </a>|<a href="#"> Doc2 </a>|<a href="#"> Doc3 </a>
						</div>

						<Container className="addphone">
							<Row>
								<Col xs={12} lg={4} className="address">
									<div className="addresstext">Address: Khandwa Rd, Simrol, Madhya Pradesh 453552</div>
								</Col>
								<Col xs={12} lg={4} className="phone">
									<div className="phonetext">Phone No. - 1234567890</div>
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
