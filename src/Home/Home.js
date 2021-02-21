import React from "react";
import { Title } from "./components/Title/Title";
import { NavBar } from "./components/NavBar/NavBar";
import { Carousell } from "./components/Carousell/Carousell";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { News } from "./components/News/News";
import { Events } from "./components/Events/Events";
// import { Links } from "./components/Links";
import { Footer } from "./components/Footer/Footer";
import { Maps } from "./components/Maps/Maps";
import { MHRD } from "./components/MHRD/MHRD";
import Message from "./components/Message/Message";
import "./Home.css";

export const Home = () => {
	return (
		<div>
			<Title />
			<div className="mainNav">
				<NavBar />
			</div>
			<div className="container mt-3 abc">
				{/*<div className="abc">*/}
				<Carousell />
			</div>
			<AboutUs />
			<News />
			<Events />
			<Message />
			<Maps />
			<MHRD />
			{/* <Links /> */}
			<Footer />
		</div>
	);
};
