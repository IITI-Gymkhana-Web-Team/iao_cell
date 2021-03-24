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
import { Scholarship } from "./components/Scholarship/Scholarship";
import OfficeIR from "./pages/Contactpage/OfficeIR";
import { Programs } from "./components/Programs/Programs";
import { NewsPage } from "./components/NewsPage/Newspage";
import { EventsPage } from "./components/EventsPage/EventsPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Mou } from "./components/Collaborations/Mou";
import { Sparc } from "./components/MHRDPage/Sparc";
import { Asem } from "./components/MHRDPage/Asem";
import { Vajra } from "./components/MHRDPage/Vajra";
import { Gian } from "./components/MHRDPage/Gian";
import { IndiEvent } from "./components/EventsPage/IndiEvent";
import { NotFound } from "./components/NotFound/NotFound";
import { IndiNews } from "./components/NewsPage/IndiNews";
import { CommitteesPage } from "./pages/CommitteesPage/CommitteesPage";
import { Europe } from "./components/Collaborations/Europe";
import { Asia } from "./components/Collaborations/Asia";
import { Americas } from "./components/Collaborations/Americas";
import { Australia } from "./components/Collaborations/Australia";

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
					<Route
						path="/people/oia"
						exact
						component={() => {
							return <People index={1} />;
						}}
					/>
					<Route
						path="/people/sc"
						exact
						component={() => {
							return <People index={2} />;
						}}
					/>
					<Route
						path="/committee/oc"
						exact
						component={() => {
							return <CommitteesPage index={1} />;
						}}
					/>
					<Route
						path="/committee/mec"
						exact
						component={() => {
							return <CommitteesPage index={2} />;
						}}
					/>
					<Route path="/Aboutiiti" exact component={Aboutiiti} />
					<Route path="/ProsStud/visa" exact component={Visa} />
					<Route path="/ProsStud/places" exact component={Places} />
					<Route path="/ProsStud/admission" exact component={Admission} />
					<Route path="/ProsStud/programs" exact component={Programs} />
					<Route path="/opportunities/pg_phd_post_doc" exact component={Pg_Phd} />
					<Route path="/opportunities/scholarship" exact component={Scholarship} />
					<Route path="/outreach/news" exact component={NewsPage} />
					<Route path="/outreach/news/:id" exact component={IndiNews} />
					<Route path="/outreach/events" exact component={EventsPage} />
					<Route path="/outreach/events/:id" exact component={IndiEvent} />
					<Route path="/OfficeIR" exact component={OfficeIR} />
					<Route path="/mou/asia" exact component={Asia} />
					<Route path="/mou/europe" exact component={Europe} />
					<Route path="/mou/americas" exact component={Americas} />
					<Route path="/mou/australia" exact component={Australia} />
					<Route path="/mhrd/sparc" exact component={Sparc} />
					<Route path="/mhrd/asem" exact component={Asem} />
					<Route path="/mhrd/vajra" exact component={Vajra} />
					<Route path="/mhrd/gian" exact component={Gian} />
					<Route component={NotFound} />
				</Switch>
			</div>
			<Footer />
		</Router>
	);
};
