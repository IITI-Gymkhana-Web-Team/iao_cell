import React from "react";
import { OutreachEvent } from "./OutreachEvent";
import { data } from "./data";

export const EventsPage = () => {
	return (
		<div className="container-fluid eventsOutreach">
			<div>
				<h2 className="p-3 m-2 mainTitle text-center">Outreach Events</h2>
				<div className="eventCards">
					{data.map((Events, i) => {
						return <OutreachEvent Events={Events} key={i} i={i} />;
					})}
				</div>
			</div>
		</div>
	);
};
