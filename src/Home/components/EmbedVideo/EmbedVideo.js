import React, { useEffect, useRef, useState } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./EmbedVideo.css";

const announcements = [
	{
		id: 1,
		desc: "IIT Indore welcomes the newly admitted International Students"
	},
	{
		id: 2,
		desc: "French Embassy delegates are visiting IIT Indore on Sep. 03,2021"
	},
	{
		id: 3,
		desc: "Web-session on DAAD scholarship is scheduled on Sep. 17,2021"
	}
]

const EmbedVideo = () => {
	const [announcements, setAnnouncements] = useState([]);

	useEffect(() => {
		setAnnouncements([
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		]);
	}, []);

	const mainRef = useRef(null);
	useEffect(() => {
		if (mainRef.current) {
			var pos = 30;
			const interval = setInterval(() => {
				if (mainRef.current) {
					mainRef.current.scrollTop = pos;
					if (pos === 164) pos = 0;
					else pos += 1;
				}
			}, 2);
			return () => clearInterval(interval);
		}
	}, []);

	return (
		<Row className="embed-video container m-auto">
			<Col md="12" lg="8" className="embed-video-div m-0 p-0" style={{ marginTop: "100px !important" }}>
				<div className="video-responsive">
					<iframe
						className="embed-iframe"
						src="https://www.youtube.com/embed/Thjsxz31rRk"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</Col>
			<Col md="12" lg="4" style={{ paddingRight: "0" }}>
				<div className="announce">
					<p className="announce-title text-left font-acme">Announcements</p>
					<hr />
					<ListGroup variant="flush" ref={mainRef} className="announce-text mt-2">
						{announcements.map((item) => (
							<ListGroupItem key={item.id} >{item.desc}</ListGroupItem>
						))}
					</ListGroup>
				</div>
			</Col>
		</Row>
	);
};

export default EmbedVideo;
