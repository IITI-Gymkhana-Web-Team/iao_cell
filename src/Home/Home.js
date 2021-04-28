import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/Homepage/HomePage";
import { People } from "./pages/Peoplepage/People";
import { Title } from "./components/Title/Title";
import { Footer } from "./components/Footer/Footer";
// import { Nav } from "./components/NewNav/index";
import { Places } from "./components/Places/Places";
import { Visa } from "./components/Visa/Visa";
import { Admission } from "./components/Admission/Admission";
import { Pg_Phd } from "./components/Pg_Phd/Pg_Phd";
import { Scholarship } from "./components/Scholarship/Scholarship";
import { Programs } from "./components/Programs/Programs";
import { NewsPage } from "./components/NewsPage/Newspage";
import { EventsPage } from "./components/EventsPage/EventsPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Sparc } from "./components/MHRDPage/Sparc";
import { Asem } from "./components/MHRDPage/Asem";
import { Vajra } from "./components/MHRDPage/Vajra";
import { Gian } from "./components/MHRDPage/Gian";
import { IndiEvent } from "./components/EventsPage/IndiEvent";
import { NotFound } from "./components/NotFound/NotFound";
import { IndiNews } from "./components/NewsPage/IndiNews";
import { CommitteesPage } from "./pages/CommitteesPage/CommitteesPage";
import { Mou2 } from "./components/Collaborations/Mou2";
import { MobilityExchange } from "./components/MobilityExchange/MobilityExchange";
import { IntStudents } from "./components/IntStudents/IntStudents";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { AboutIITI } from "./components/AboutIITI/AboutIITI";
import { AboutIOA } from "./components/AboutIOA/AboutIOA";
import { LifeIITI } from "./components/LifeIITI/LifeIITI";
import ReachUs from "./pages/Contactpage/ReachUs";
import { Grants } from "./components/Grants/Grants";
import { Publications } from "./components/Publications/Publications";
import { Ghouse } from "./components/Ghouse/Ghouse";
import { Nav2 } from "./components/Nav2/Nav2";
import { Internships } from "./components/Internships/Internships";
import { Dean } from "./components/Dean";
import { Director } from "./components/Director/Director";

export const Home = () => {
	return (
		<Router>
			<ScrollToTop />

			<Title />
			<div className="mainNav">
				<Nav2 />
				{/*<Nav />*/}
			</div>
			<div className="mainScreen">
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
					<Route path="/int/students" exact component={IntStudents} />
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
					<Route path="/Aboutiiti" exact component={AboutIITI} />
					<Route path="/Aboutioa" exact component={AboutIOA} />
					<Route path="/LifeIITI" exact component={LifeIITI} />
					<Route path="/guestHouse" exact component={Ghouse} />
					<Route path="/ProsStud/visa" exact component={Visa} />
					<Route path="/ProsStud/admission" exact component={Admission} />
					<Route path="/ProsStud/programs" exact component={Programs} />
					<Route path="/Pros/places" exact component={Places} />
					<Route path="/Pros/visitors_experience" exact component={Testimonials} />
					<Route path="/ProsFaculty/visa" exact component={Visa} />
					<Route path="/opportunities/pg_phd_post_doc" exact component={Pg_Phd} />
					<Route path="/opportunities/internships" exact component={Internships} />
					<Route path="/opportunities/scholarship" exact component={Scholarship} />
					<Route path="/outreach/news" exact component={NewsPage} />
					<Route path="/outreach/news/:id" exact component={IndiNews} />
					<Route path="/outreach/events" exact component={EventsPage} />
					<Route path="/outreach/events/:id" exact component={IndiEvent} />
					<Route path="/contact" exact component={ReachUs} />
					<Route
						path="/mou/asia"
						exact
						component={() => {
							return <Mou2 name={"Asia"} />;
						}}
					/>
					<Route
						path="/mou/europe"
						exact
						component={() => {
							return <Mou2 name={"Europe"} />;
						}}
					/>
					<Route
						path="/mou/america"
						exact
						component={() => {
							return <Mou2 name={"Americas"} />;
						}}
					/>
					<Route
						path="/mou/australia"
						exact
						component={() => {
							return <Mou2 name={"Australia"} />;
						}}
					/>
					<Route path="/grants" exact component={Grants} />
					<Route path="/publications" exact component={Publications} />
					<Route path="/mhrd/sparc" exact component={Sparc} />
					<Route path="/mhrd/asem" exact component={Asem} />
					<Route path="/mhrd/vajra" exact component={Vajra} />
					<Route path="/mhrd/gian" exact component={Gian} />
					<Route
						path="/mobility/student"
						exact
						component={() => {
							return <MobilityExchange type="student" />;
						}}
					/>
					<Route
						path="/mobility/faculty"
						exact
						component={() => {
							return <MobilityExchange type="faculty" />;
						}}
					/>
					<Route path="/dean" component={Dean} />
					<Route path="/director" component={Director} />
					<Route component={NotFound} />
				</Switch>
			</div>
			<Footer />
		</Router>
	);
};
