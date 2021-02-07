import React from "react";
import { Title } from "./components/Title";
import { Navbar } from "./components/Navbar";
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
			<Navbar />
			<Carousel />
			<AboutUs />
			<News />
			<Events />
			<Links />
			<Footer />
		</div>
	);
};
