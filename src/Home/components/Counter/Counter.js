import React, { useState } from "react";
import { data } from "./data";
import CountUp from "react-countup";
import { Col, Row, Card } from "react-bootstrap";
import { GrStar } from "react-icons/gr";
import "./Counter.css";
import ScrollAnimation from "react-animate-on-scroll";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
	const [once, setOnce] = useState(true);

	return (
		<div className="counterDiv">
			<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
				<Row>
					{data.map((value, index) => {
						return (
							<Col lg={4} key={index}>
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
														duration={5}
													>
														{({ countUpRef, start }) => (
															<VisibilitySensor
																onChange={start}
																delayedCall
															>
																<span ref={countUpRef} />
															</VisibilitySensor>
														)}
													</CountUp>
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
			</ScrollAnimation>
		</div>
	);
};

export default Counter;
