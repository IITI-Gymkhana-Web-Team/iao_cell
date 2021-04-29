import React from "react";
import { data } from "./data";
import CountUp from "react-countup";
import { Col, Row, Card } from "react-bootstrap";
import { GrStar } from "react-icons/gr";
import "./Counter.css";
import ScrollAnimation from "react-animate-on-scroll";
import VisibilitySensor from "react-visibility-sensor";
import wheat from "../../../assets/wheat.png";

const Counter = () => {
	return (
		<div className="counterDiv">
			<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
				<Row>
					{data.map((value, index) => {
						return (
							<Col
								lg={4}
								key={index}
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<div
									className="text-center cardBox"
									style={{
										backgroundColor: "transparent",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										flexDirection: "column",
									}}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											position: "relative",
										}}
									>
										<img
											src={wheat}
											style={{
												maxWidth: "min(200px,80vw)",
												position: "absolute",
											}}
										/>
										<div
											style={{
												display: "flex",
											}}
										>
											<h1>#&nbsp;</h1>
											<h1>
												<CountUp
													className="rank"
													end={value.Ranking}
													duration={4}
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
											</h1>
										</div>
									</div>
									<p className="rankText text-center mt-5">{value.Heading}</p>
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
