import React from "react";
import { BackVideo } from "./components/backVideo/backVideo";
import { MHRD } from "./components/MHRD/MHRD";
import Message from "./components/Message/Message";
import Counter from "./components/Counter/Counter";
import { Offer } from "./components/ProgramsOffered/Offer";
import EmbedVideo from "./components/EmbedVideo/EmbedVideo";
import CarousellCards from "./components/CarousellCards/CarousellCards";
import "./Home.css";

export const HomePage = () => {
	return (
		<div className="home">
			<div style={{ marginBottom: "50px" }}>
				<BackVideo />
			</div>
			<div className="container-fluid">
				<EmbedVideo />
				<CarousellCards />
				<Message />
				<Counter />
				<Offer />
				<MHRD />
			</div>
		</div>
	);
};
