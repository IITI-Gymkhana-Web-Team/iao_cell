import React, { useState } from "react";
import videoo from "../../../assets/video2.mp4";
import "./backVideo.css";

export const BackVideo = () => {
	return (
		<div class="video-container">
			<video autoPlay muted loop id="myVideo">
				<source src={videoo} type="video/mp4" />
			</video>
			<div class="content">
				<p>WELCOME TO IIT INDORE!</p>
			</div>
		</div>
	);
};
