import React, { useEffect, useRef } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./EmbedVideo.css";

const EmbedVideo = () => {
	const mainRef = useRef(null);
	useEffect(() => {
		var pos = 100;
		const interval = setInterval(() => {
			mainRef.current.scrollTop = pos;
			if (pos === 437) pos = 0;
			else pos += 1;
		}, 2);
		return () => clearInterval(interval);
	}, []);
	return (
		<Row className="embed-video">
			<Col md="12" lg="3">
				<div className="embed-video-content">
					<p className="embed-video-title">
						About <span style={{ color: "#3668dd" }}>IIT Indore</span>
					</p>
					<hr />
					<p className="embed-video-text">
						Indian Institute of Technology Indore, located in Madhya Pradesh,
						is an institute of national importance established by the Government of India in 2009.
						<br /> Over the last eight years, our graduating students have been engaged with the best
						corporations in India and worldwide, across different verticals. Many have also chosen the
						less-traveled path of entrepreneurship. It is indeed a proud moment for us when our students
						contribute to society by creating jobs and changing lives.
					</p>
					<Link to="/Aboutiiti" className="embed-video-btn btn btn-outline-secondary">
						Read More
					</Link>
				</div>
			</Col>
			<Col md="12" lg="6" className="embed-video-div m-0 p-0">
				<div className="video-responsive">
					<p className="embed-title">A Short Video about IITI</p>
					<iframe
						className="embed-iframe"
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
			<Col md="12" lg="3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<div className="announce">
					<p className="announce-title text-left">
						Announcements
					</p>
					<hr />
					<ListGroup variant="flush" ref={mainRef} className="announce-text">
						<ListGroupItem>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</ListGroupItem>
						<ListGroupItem>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</ListGroupItem>
						<ListGroupItem>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</ListGroupItem>
						<ListGroupItem>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</ListGroupItem>
						<ListGroupItem>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</ListGroupItem>
						<ListGroupItem>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</ListGroupItem>
					</ListGroup>
				</div>
			</Col>
		</Row>
	);
};

export default EmbedVideo;
