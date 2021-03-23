import React, { useState, useEffect } from "react";
import { OutreachEvent } from "./OutreachEvent";
import { data } from "./data";

export const EventsPage = () => {
	return (
		<div className="container-fluid eventsOutreach">
			<div>
				<h1 className="p-3 m-2 mainTitle text-center">Outreach Events</h1>
				<div className="eventCards">
					{data.map((Events, i) => {
						return <OutreachEvent Events={Events} key={i} i={i} />;
					})}
				</div>
			</div>
		</div>
	);
};
