import React from "react";
import { data } from "./data";
import CountUp from "react-countup";
import { Col, Row, Card } from "react-bootstrap";
import videoo from "../../../assets/bgvideo.mp4";
import { GrStar } from "react-icons/gr";
import "./backVideo.css";

export const BackVideo = () => {
	return (
		<div className="video-container">
			<video
				controls
				disablePictureInPicture
				autoPlay
				muted
				loop
				controlsList="nodownload"
				id="myVideo"
			>
				<source src={videoo} type="video/mp4" />
			</video>
			<div className="content">
				<Row>
					{data.map((value, index) => {
						return (
							<Col lg={4} key={index}>
								<Card
									className="text-center m-4 cardBox"
									style={{ backgroundColor: "transparent" }}
								>
									<Card.Body className="rankCard">
										<Card.Title>
											<GrStar color="#ffd700" />
											<GrStar color="#ffd700" />
											<GrStar color="#ffd700" />
											<GrStar color="#ffd700" />
											<div className="circle">
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
										<Card.Text className="rankText text-center">
											{value.Heading}
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</div>
		</div>
	);
};
