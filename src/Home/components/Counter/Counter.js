import React from "react";
import { data } from "./data";
import CountUp from "react-countup";
import { Col, Row, Card } from "react-bootstrap";
import { GrStar } from "react-icons/gr";
import "./Counter.css";
import ScrollAnimation from "react-animate-on-scroll";

const Counter = () => {
	return (
		<div className="counterDiv">
			<Row>
				{data.map((value) => {
					return (
						<Col lg={4}>
							<div>
								<Card
									className="text-center m-4 rankCardBox"
									style={{ backgroundColor: "transparent", border: "none" }}
								>
									<Card.Body className="rankCards">
										<Card.Title>
											<GrStar color="#ffd700" />
											<GrStar color="#ffd700" />
											<GrStar color="#ffd700" />
											<GrStar color="#ffd700" />
											<div className="cardCircle">
												<CountUp
													className="rank"
													end={value.Ranking}
													duration={8}
												/>
											</div>
											<GrStar color="#ffd700" />
											<GrStar color="#ffd700" />
											<GrStar color="#ffd700" />
											<GrStar color="#ffd700" />
										</Card.Title>
										<Card.Text className="rankHeading text-center">
											{value.Heading}
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default Counter;
