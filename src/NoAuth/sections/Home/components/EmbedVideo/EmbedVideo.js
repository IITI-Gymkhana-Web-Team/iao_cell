import React, { useEffect, useRef, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./EmbedVideo.css";

const announcements = [
	{
		id: 1,
		desc: "IIT Indore welcomes the newly admitted International Students",
	},
	{
		id: 2,
		desc: "French Embassy delegates are visiting IIT Indore on Sep. 03,2021",
	},
	{
		id: 3,
		desc: "Web-session on DAAD scholarship is scheduled on Sep. 17,2021",
	},
];

const EmbedVideo = () => {
	const mainRef = useRef(null);
	const [allowScroll, setAllowScroll] = useState(true);

	useEffect(() => {
		if (mainRef.current && allowScroll) {
			var pos = 30;
			const interval = setInterval(() => {
				if (mainRef.current && allowScroll) {
					mainRef.current.scrollTop = pos;
					if (pos === 164) pos = 0;
					else pos += 1;
				}
			}, 10);
			return () => clearInterval(interval);
		}
	}, [allowScroll]);

	const [width, setWidth] = useState(600);

	const updateDimensions = () => {
		// setWidth(window.innerWidth);
		console.log(`width: ${window.innerWidth}`);
		if (window.innerWidth >= 1000) {
			setWidth(600);
		} else {
			setWidth(0.9 * window.innerWidth);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	return (
		<div className="embed-video container d-flex flex-wrap">
			<div className="embed-video-div m-0 p-0" style={{ marginTop: "100px !important" }}>
				<iframe
					className="embed-iframe"
					src="https://www.youtube.com/embed/Thjsxz31rRk"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					width={width}
					height={(9 / 16) * width}
				></iframe>
			</div>
			<div style={{ paddingRight: "0" }}>
				<div className="announce">
					<p className="announce-title text-left font-acme">Announcements</p>
					<hr />
					<ListGroup
						variant="flush"
						ref={mainRef}
						className="announce-text mt-2"
						onMouseEnter={() => {
							setAllowScroll(false);
						}}
						onMouseLeave={() => {
							setAllowScroll(true);
						}}
					>
						{announcements.map((item) => (
							<ListGroupItem key={item.id}>{item.desc}</ListGroupItem>
						))}
					</ListGroup>
				</div>
			</div>
		</div>
	);
};

export default EmbedVideo;
