import React, { useState } from "react";
import videoo from "../../../assets/noaudio_video2.mp4";
import "./backVideo.css";

export const BackVideo = () => {
	return (
		<div class="video-container">
			<video
				controls
				disablePictureInPicture
				autoPlay
				muted
				loop
				controlsList="nodownload"
				id="myVideo">
				<source src={videoo} type="video/mp4" />
			</video>
			<div class="content">
				<p>WELCOME TO IIT INDORE!</p>
			</div>
		</div>
	);
};
