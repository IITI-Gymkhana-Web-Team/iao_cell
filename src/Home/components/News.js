import React, { useState } from "react";
// import $ from "jquery";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";

import "owl.carousel/dist/assets/owl.theme.default.css";
import Newsutil from "../reusables/Newsutil";

export const News = () => {
	const [news, setNews] = useState([
		{
			title: "Coronavirus Lockdown 1",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 2",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 3",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 4",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 5",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 6",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 7",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
			date: "January 27, 2021",
		},
	]);

	// let title = "Coronavirus Lockdown";
	// let text = "Some quick example text to build on the card title and make up the bulk of the card's content.";
	// let date = "January 27, 2021";

	return (
		<div class="news container bg-light mt-5">
			<div class="container-fluid">
				<h1 className="p-2 pl-5 pt-5 pr-5 mainTitle">News</h1>
			</div>
			<div class="container-fluid" style={{ maxWidth: "1140px" }}>
				<OwlCarousel
					className="owl-theme"
					loop
					nav={true}
					margin={8}
					responsive={{
						0: {
							items: 1,
						},
						760: {
							items: 2,
						},
						1000: {
							items: 3,
						},
					}}
				>
					<Newsutil news={news} />
					{/*<div>
						<Newsutil text={text} date={date} title={title + " 1"} />
					</div>
					<div>
						<Newsutil text={text} date={date} title={title + " 2"} />
					</div>
					<div>
						<Newsutil text={text} date={date} title={title + " 3"} />
					</div>
					<div>
						<Newsutil text={text} date={date} title={title + " 4"} />
					</div>
					<div>
						<Newsutil text={text} date={date} title={title + " 5"} />
					</div>
					<div>
						<Newsutil text={text} date={date} title={title + " 6"} />
					</div>
					<div>
						<Newsutil text={text} date={date} title={title + " 7"} />
					</div>*/}
				</OwlCarousel>
			</div>
		</div>
	);
};
