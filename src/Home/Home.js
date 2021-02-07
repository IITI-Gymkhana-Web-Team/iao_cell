import React from "react";
import { Title } from "./components/Title";
import { NavBar } from "./components/NavBar";
import { Carousel } from "./components/Carousel";
import { AboutUs } from "./components/AboutUs";
import { News } from "./components/News";
import { Events } from "./components/Events";
import { Links } from "./components/Links";
import { Footer } from "./components/Footer";

export const Home = () => {
	return (
		<div>
			<Title />
			<NavBar />
			<Carousel />
			<AboutUs />
			<News />
			<Events />
			<Links />
			<Footer />
		</div>
	);
};
