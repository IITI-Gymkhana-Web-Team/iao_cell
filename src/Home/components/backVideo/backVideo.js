import React from "react";
import { data } from "./data";
import CountUp from 'react-countup';
import { Col, Row, Card } from 'react-bootstrap';
import videoo from "../../../assets/noaudio_video2.mp4";
import { GiStarsStack } from 'react-icons/gi';
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
							<Col lg={4} className="column">
								{/* <Card className="text-center m-4 cardBox" style={{ backgroundColor: 'transparent' }}>
									<Card.Body className="rankCard">
										<Card.Title>
											<GiStarsStack className="circle" />
											<div><CountUp className="rank" end={value.Ranking} duration={8} /></div>
										</Card.Title>
										<Card.Text className="rankText text-center">
											{value.Heading}
										</Card.Text>
									</Card.Body>
								</Card> */}
								<div className="text-center m-4 cardBox" style={{ backgroundColor: 'transparent' }}>
									<GiStarsStack className="circle" />
									<CountUp className="rank" end={value.Ranking} duration={8} />
									<p className="rankText text-center">{value.Heading}</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</div>
		</div>
	);
};
