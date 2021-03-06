import React from "react";
// import { Title } from "./components/Title/Title";
// import { NavBar } from "./components/NavBar/NavBar";
import { Carousell } from "./components/Carousell/Carousell";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { News } from "./components/News/News";
import { Events } from "./components/Events/Events";
// import { Links } from "./components/Links";
import { Maps } from "./components/Maps/Maps";
import { MHRD } from "./components/MHRD/MHRD";
import Message from "./components/Message/Message";
import "./Home.css";

export const HomePage = () => {
	return (
		<div>
			<div className="container mt-3 abc">
				<Carousell />
			</div>
			<AboutUs />
			<Message />
			<div className="newsEvents container mt-5 p-5">
				<News />
				<Events />
			</div>
			<Maps />
			<MHRD />
		</div>
	);
};
