import React from "react";
// import { Title } from "./components/Title/Title";
// import { NavBar } from "./components/NavBar/NavBar";
import { BackVideo } from "../../components/backVideo/backVideo";
// import { Carousell } from "../../components/Carousell/Carousell";
import { AboutUs } from "../../components/AboutUs/AboutUs";
// import { News } from "../../components/News/News";
import { Events } from "../../components/Events/Events";
// import { Links } from "./components/Links";
import { Maps } from "../../components/Maps/Maps";
import { MHRD } from "../../components/MHRD/MHRD";
import Message from "../../components/Message/Message";
import "./Home.css";
import { NAT } from "../../components/NAT/NAT";
import Counter from "../../components/Counter/Counter";
import { Offer } from "../../components/Offer/Offer";

export const HomePage = () => {
	return (
		<div className="home">
			<div>
				<BackVideo />
			</div>
			{/* <div className="abc">
				<Carousell />
			</div> */}
			<div className="container-fluid">
				<AboutUs />
				<Message />
				<Counter />
				{/* <div className="newsEvents container mt-5">
					<News />
					<Events />
				</div> */}
				<Offer />
				<NAT />
				<MHRD />

			</div>
		</div>
	);
};
