import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import EventsUtil from "../../reusables/EventsUtil";
import "./Events.css";

export const Events = () => {
	const [events, setEvents] = useState([
		{
			date: "February 4, 2021",
			title: "Heading One",
			time: "10:00-12:00 am",
			link: "zoom_meeting_first.com",
			description:
				"Aliqua velit est anim adipisicing. Consequat ad id deserunt ad. Nostrud id ullamco aute ipsum deserunt excepteur eiusmod mollit sunt enim.",
			organizer: "organizer",
		},
		{
			date: "February 5, 2021",
			title: "Heading Two",
			time: "10:00-1:00 pm",
			link: "zoom_meeting_second.com",
			description:
				"Nisi do labore cupidatat dolore aliquip nulla. Nisi sit aute eu ipsum dolor quis consequat esse amet sit magna quis labore. Consectetur ipsum aliqua ad pariatur culpa tempor duis nostrud sunt et sunt cupidatat exercitation. Lorem sint mollit ea duis occaecat deserunt consectetur aliquip esse. Aliqua id in eiusmod elit eiusmod duis. Anim cillum non ex velit occaecat nisi cillum labore dolore ipsum culpa. Elit occaecat anim sit consectetur cupidatat proident quis duis in ea ad.",
			organizer: "organizer2",
		},
		{
			date: "February 6, 2021",
			title: "Heading Three",
			time: "9:00-1:00 pm",
			link: "zoom_meeting_third.com",
			description:
				"Proident ea culpa non pariatur non culpa adipisicing adipisicing aute et laboris. Labore laboris duis non sit qui proident aliqua nisi ex laborum esse. Reprehenderit esse esse occaecat officia ea non aliquip aute incididunt dolor elit. Magna excepteur incididunt ullamco cillum. Qui culpa id ad anim.",
			organizer: "organizer3",
		},
		{
			date: "February 7, 2021",
			title: "Heading Four",
			time: "10:00-12:00 am",
			link: "zoom_meeting_4.com",
			description:
				"Ullamco fugiat enim sunt veniam laborum nostrud. Dolor id nostrud ullamco aliqua. Sit do ut proident sit eiusmod enim. Excepteur cillum pariatur laboris eu.",
			organizer: "organizer4",
		},
		{
			date: "February 8, 2021",
			title: "Heading Five",
			time: "10:00-1:00 pm",
			link: "zoom_meeting_5.com",
			description:
				"Ad nisi duis enim do consectetur proident. Ipsum aliquip commodo sunt esse dolore veniam incididunt consequat eiusmod dolore proident occaecat fugiat. Nulla occaecat do adipisicing minim sit consectetur fugiat nisi. Reprehenderit in sint nisi Lorem laboris. Ad ipsum amet aliqua voluptate sint do quis. Qui quis duis ex nostrud dolor nisi id incididunt esse eu sint exercitation velit reprehenderit. Mollit nostrud est do reprehenderit aute consequat nulla.",
			organizer: "organizer5",
		},
		{
			date: "February 9, 2021",
			title: "Heading Six",
			time: "9:00-1:00 pm",
			link: "zoom_meeting_6.com",
			description:
				"Veniam enim ut exercitation laboris reprehenderit aliquip officia incididunt do exercitation ea amet cupidatat. Commodo mollit ex est culpa est amet. Enim do est culpa ad eiusmod dolor ullamco ea nisi qui. Do aute ad commodo ullamco excepteur adipisicing proident tempor. In aliquip qui commodo commodo amet mollit. Fugiat labore id irure commodo aute Lorem minim officia in officia cillum.",
			organizer: "organizer6",
		},
	]);
	return (
		<div className="news container bg-light mt-5 mb-5" style={{ borderRadius: "10px" }}>
			<div className="container-fluid">
				<h1 className="p-2 pl-5 pt-5 pr-5 mainTitle text-center">Events</h1>
			</div>
			<div className="container-fluid">
				<OwlCarousel
					className="owl-theme"
					loop
					nav={true}
					margin={8}
					responsive={{
						0: {
							items: 1,
						},
					}}
				>
					<EventsUtil events={events} />
				</OwlCarousel>
			</div>
		</div>
	);
};
