import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./EmbedVideo.css";

const EmbedVideo = () => {
	return (
		<Row className="embed-video">
			<Col md="12" lg="5">
				<div className="embed-video-content">
					<p className="embed-video-title text-center">
						About <span style={{ color: "#3668dd" }}>IIT Indore</span>
					</p>
					<hr />
					<p className="embed-video-text">
						Indian Institute of Technology Indore, located in Madhya Pradesh, known as IIT Indore or IITI,
						is an institute of national importance established by the Government of India in 2009.
						<br /> Over the last eight years, our graduating students have been engaged with the best
						corporations in India and worldwide, across different verticals. Many have also chosen the
						less-traveled path of entrepreneurship. It is indeed a proud moment for us when our students
						contribute to society by creating jobs and changing lives. Along with their researchers in the
						last decade, our faculty colleagues have also shown immense perseverance to attain new heights
						of excellence.
					</p>
					<Link to="/Aboutiiti" className="embed-video-btn btn btn-outline-secondary">
						Read More
					</Link>
				</div>
			</Col>
			<Col md="12" lg="5" className="embed-video-div">
				<div className="video-responsive">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/Thjsxz31rRk"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</Col>
		</Row>
	);
};

export default EmbedVideo;
