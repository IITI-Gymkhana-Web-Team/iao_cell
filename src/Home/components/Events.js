import React, { useState } from "react";
import img from "../../assets/image2.jpg";
import { BiCalendar } from 'react-icons/bi';
import {BiLink } from "react-icons/bi";
import {BsFillPersonFill} from "react-icons/bs";
import "../../App.css";

export const Events = () => {
	const [events, setEvents] = useState([
		{
			date: "february 4, 2021",
			title: "Heading",
			time:"10:00-12:00 am",
			link: "zoom_meeting.com",
			name: "organizer"
		},
		{
			date: "february 5, 2021",
			title: "Heading Two",
			time:"10:00-1:00 pm",
			link: "zoom_meeting_second.com",
			name: "organizer2"
		},
		{
			date: "february 6, 2021",
			title: "Heading Three",
			time:"9:00-1:00 pm",
			link: "zoom_meeting_third.com",
			name: "organizer3"
		}
	])
	return (
		<div>
			<div className="container bg-light my-5 justify-content-center">
			<h1 className="mainTitle text-center p-3">Events</h1>
			<div className="container card-deck justify-content-center">
			{
				events.map(event => (
					<div>
						<div className="event-card card">
							<img src={img} className="eventimage" alt="img-responsive" style={{width:"300px"}}/>
							<div class="card-img-overlay">
							<p className="eventdate">{event.date}</p>
							</div>
							<div className="card-body">
								<h3 className="eventtitle">{event.title}</h3>
								<p><BiCalendar/>&nbsp; {event.date}<br></br>&nbsp;&nbsp;&nbsp;&nbsp;{event.time}</p>
								<a className="eventlink"><BiLink/>&nbsp; {event.link}</a>
								<p className="eventname"><BsFillPersonFill/>&nbsp; {event.name}</p>
							</div>
						</div>
					</div>
				)
				)}
				</div>
				</div>
		</div>
	);
};
