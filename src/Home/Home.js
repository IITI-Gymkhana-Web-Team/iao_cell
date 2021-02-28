import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { People } from "./People";
import { Title } from "./components/Title/Title";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Nav } from "./components/NewNav/index";
import Aboutiiti from "./pages/Aboutuspage/Aboutiiti";
import { Places } from "./components/Places/Places";
import { Visa } from "./components/Visa/Visa";
import { Admission } from "./components/Admission/Admission";
import OfficeIR from "./pages/Contactpage/OfficeIR";
import { Programs } from "./components/Programs/Programs";

export const Home = () => {
	return (
		<Router>
			<div>
				<Title />
				<div className="mainNav">
					<Nav />
				</div>
				<div className="container-fluid">
					<Route path="/" exact component={HomePage} />
					<Route path="/people/:ct" exact component={People} />
					<Route path="/Aboutiiti" exact component={Aboutiiti} />
					<Route path="/ProsStud/visa" exact component={Visa} />
					<Route path="/ProsStud/places" exact component={Places} />
					<Route path="/ProsStud/admission" exact component={Admission} />
					<Route path="/OfficeIR" exact component={OfficeIR}/>
		           <Route path="/ProsStud/programs" exact component={Programs} />
				</div>
				<Footer />
			</div>
		</Router>
	);
};
