import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/Homepage/HomePage";
import { People } from "./pages/Peoplepage/People";
import { Title } from "./components/Title/Title";
import { Footer } from "./components/Footer/Footer";
import { Nav } from "./components/NewNav/index";
import Aboutiiti from "./pages/Aboutuspage/Aboutiiti";
import { Places } from "./components/Places/Places";
import { Visa } from "./components/Visa/Visa";
import { Admission } from "./components/Admission/Admission";
import { Pg_Phd } from "./components/Pg_Phd/Pg_Phd";
import OfficeIR from "./pages/Contactpage/OfficeIR";
import { Programs } from "./components/Programs/Programs";
import { NewsPage } from "./components/NewsPage/Newspage";
import { EventsPage } from "./components/EventsPage/EventsPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export const Home = () => {
	return (
		<Router>
			<ScrollToTop />
			<Title />
			<div className="mainNav">
				<Nav />
			</div>
			<div>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/people/:ct" exact component={People} />
					<Route path="/Aboutiiti" exact component={Aboutiiti} />
					<Route path="/ProsStud/visa" exact component={Visa} />
					<Route path="/ProsStud/places" exact component={Places} />
					<Route path="/ProsStud/admission" exact component={Admission} />
					<Route path="/ProsStud/programs" exact component={Programs} />
					<Route path="/opportunities/pg_phd_position" exact component={Pg_Phd}/>
					<Route path="/outreach/news" exact component={NewsPage} />
					<Route path="/outreach/events" exact component={EventsPage} />
					<Route path="/OfficeIR" exact component={OfficeIR} />
				</Switch>
			</div>
			<Footer />
		</Router>
	);
};
