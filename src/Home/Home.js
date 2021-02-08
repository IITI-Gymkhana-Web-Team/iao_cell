import React from "react";
import { Title } from "./components/Title";
import { NavBar } from "./components/NavBar.js";
import { Carousell } from "./components/Carousell";
import { AboutUs } from "./components/AboutUs";
import { News } from "./components/News";
import { Events } from "./components/Events";
import { Links } from "./components/Links";
import { Footer } from "./components/Footer";
import Newsutil from "./reusables/Newsutil";

export const Home = () => {
	return (
		<div>
			<div className="mainNav">
				<Title />
				<NavBar />
			</div>
			<Carousell />
			<AboutUs />
			<News />
			<Events />
			<Links />
			<Footer />
		</div>
	);
};
