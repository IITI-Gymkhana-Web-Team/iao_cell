import React from "react";
import { data } from "./data";
import CountUp from "react-countup";
import { Col, Row } from "react-bootstrap";
// import { GiStarsStack } from "react-icons/gi";
import { wheat, videoo } from "../../../assets";
import "./backVideo.css";

export const BackVideo = () => {
	return (
		<div className="video-container" style={{maxHeight: '80vh'}}>
			<video controls disablePictureInPicture autoPlay muted loop controlsList="nodownload" id="myVideo">
				<source src={videoo} type="video/mp4" />
			</video>
			<div className="content">
				<Row className="row1">
					{data.map((value, index) => {
						return (
							<Col lg={4} className="column" key={index}>
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
								<div
									className="text-center cardBox"
									style={{
										backgroundColor: "transparent",
									}}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<img
											src={wheat}
											style={{
												maxWidth: "min(200px,80vw)",
												position: "absolute",
											}}
											alt="wheat"
										/>
										<div
											style={{
												display: "flex",
											}}
										>
											<h1>#&nbsp;</h1>
											<h1>
												<CountUp className="rank" end={value.Ranking} duration={4} />
											</h1>
										</div>
									</div>
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
