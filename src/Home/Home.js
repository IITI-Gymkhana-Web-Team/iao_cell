import React from "react";
import { Title } from "./components/Title";
import { NavBar } from "./components/NavBar";
import { Carousell } from "./components/Carousell";
import { AboutUs } from "./components/AboutUs";
import { News } from "./components/News";
import { Events } from "./components/Events";
// import { Links } from "./components/Links";
import { Footer } from "./components/Footer";

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
			{/* <Links /> */}
			<Footer />
		</div>
	);
};
