import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NewsPage } from "./components/Outreach/NewsPage/Newspage";
import { EventsPage } from "./components/Outreach/EventsPage/EventsPage";
import { IndiEvent } from "./components/Outreach/EventsPage/IndiEvent";
import { IndiNews } from "./components/Outreach/NewsPage/IndiNews";
import { Nsd } from "./components/Outreach/Nsd/Nsd";
import { Internships } from "./components/Internships/Internships";
import { Outreach } from "./components/Outreach/Outreach";
import { ChemTalks } from "./components/Chemtalks/Chemtalks";

import { Home } from "./sections/Home/Home";
import { People, CommitteesPage, AboutIITI, AboutIOA, LifeIITI, Ghouse } from "./sections/AboutUs";
import { Places, Visa, Admission, Programs, IntStudents, Testimonials, IntVisitors } from "./sections/Inbound";
import { Pg_Phd, Scholarship } from "./sections/Outbound";
import { Mou2, Sparc, Asem, Vajra, Gian, MobilityExchange, Publications, Grants } from "./sections/CoopNEngage";
import { Dean, Director, NotFound } from "./sections/Others";
import ReachUs from "./sections/ReachUs/ReachUs";
import { Title, Footer, ScrollToTop, CustomNavbar } from "./components";

export const NoAuth = () => {
	const [val, setVal] = useState(0);

	return (
		<Router basename="/">
			<ScrollToTop />
			<div style={{ position: "sticky", top: "0", zIndex: "200" }}>
				<Title setVal={setVal} />
				<div className="mainNav">
					<CustomNavbar val={val} setVal={setVal} />
				</div>
			</div>
			<div className="mainScreen">
				<Switch>
					<Route path="/" exact component={Home} />
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
					<Route path="/int/visitors" exact component={IntVisitors} />
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
					<Route path="/visa" exact component={Visa} />
					<Route path="/admission" exact component={Admission} />
					<Route path="/programs" exact component={Programs} />
					<Route path="/Pros/places" exact component={Places} />
					<Route path="/Pros/visitors_experience" exact component={Testimonials} />
					<Route path="/ProsFaculty/visa" exact component={Visa} />
					<Route path="/opportunities/pg_phd_post_doc" exact component={Pg_Phd} />
					<Route path="/opportunities/internships" exact component={Internships} />
					<Route path="/opportunities/scholarship" exact component={Scholarship} />
					<Route path="/outreach/news" exact component={NewsPage} />
					<Route path="/outreach/news/:id" exact component={IndiNews} />
					<Route path="/outreach/Nsd" exact component={Nsd} />
					<Route path="/outreach/events" exact component={EventsPage} />
					<Route path="/outreach/events/:name" exact component={IndiEvent} />
					<Route path="/outreach/:name" exact component={Outreach} />
					<Route path="/contact" exact component={ReachUs} />
					<Route path="/chemtalks" exact component={ChemTalks} />
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
						path="/mobility/student/america"
						exact
						component={() => {
							return <MobilityExchange type="student" category="America" />;
						}}
					/>
					<Route
						path="/mobility/student/europe"
						exact
						component={() => {
							return <MobilityExchange type="student" category="Europe" />;
						}}
					/>
					<Route
						path="/mobility/faculty/asia"
						exact
						component={() => {
							return <MobilityExchange type="faculty" category="Asia" />;
						}}
					/>
					<Route
						path="/mobility/faculty/america"
						exact
						component={() => {
							return <MobilityExchange type="faculty" category="America" />;
						}}
					/>
					<Route
						path="/mobility/faculty/africa"
						exact
						component={() => {
							return <MobilityExchange type="faculty" category="Africa" />;
						}}
					/>
					<Route
						path="/mobility/faculty/australia"
						exact
						component={() => {
							return <MobilityExchange type="faculty" category="Australia" />;
						}}
					/>
					<Route
						path="/mobility/faculty/europe"
						exact
						component={() => {
							return <MobilityExchange type="faculty" category="Europe" />;
						}}
					/>
					<Route
						path="/mobility/faculty/others"
						exact
						component={() => {
							return <MobilityExchange type="faculty" category="OtherCountries" />;
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
