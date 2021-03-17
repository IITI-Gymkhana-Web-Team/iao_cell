import React, { useState, useEffect } from "react";
import { OutreachEvent } from "./OutreachEvent";
import { img1, person } from "../../../assets";
import { IndiEvent } from "./IndiEvent";

export const EventsPage = () => {
	const [index, setIndex] = useState(-1);

	const [Outreach] = useState([
		{
			title: "Borametallomimetics- Activation of Small Molecules by Low-valent Boron Species",
			duration: "21st February, 2021",
			speakers: [
				{
					name: "Dr. Holger Braunschweig",
					designation: "Professor,  University of Würzburg, Germany",
					img: person,
					desc:
						"Aliqua duis quis eu ad proident ullamco enim cupidatat sit amet. Officia nisi velit laboris deserunt deserunt veniam pariatur adipisicing officia et nostrud ea. Proident magna aliqua laboris nostrud non. Labore irure voluptate id quis consectetur ut consectetur minim consequat nostrud ex sunt.",
				},
			],
			oc: [
				{
					name: "Dr. Dipak Kumar Roy",
					img: person,
					designation:
						"Department of Chemistry Indian Institute of Technology Indore, India",
				},
			],
			img: img1,
			venue: "Pod Building",
			description:
				"Aliqua duis quis eu ad proident ullamco enim cupidatat sit amet. Officia nisi velit laboris deserunt deserunt veniam pariatur adipisicing officia et nostrud ea. Proident magna aliqua laboris nostrud non. Labore irure voluptate id quis consectetur ut consectetur minim consequat nostrud ex sunt. Commodo laboris adipisicing cupidatat officia voluptate nulla qui ut duis aliquip amet.",
		},
		{
			title: "Borametallomimetics- Activation of Small Molecules by Low-valent Boron Species",
			duration: "21st February, 2021",
			speakers: [
				{
					name: "Dr. Holger Braunschweig",
					designation: "Professor,  University of Würzburg, Germany",
					img: person,
					desc:
						"Aliqua duis quis eu ad proident ullamco enim cupidatat sit amet. Officia nisi velit laboris deserunt deserunt veniam pariatur adipisicing officia et nostrud ea. Proident magna aliqua laboris nostrud non. Labore irure voluptate id quis consectetur ut consectetur minim consequat nostrud ex sunt.",
				},
			],
			oc: [
				{
					name: "Dr. Dipak Kumar Roy",
					img: person,
					designation:
						"Department of Chemistry Indian Institute of Technology Indore, India",
				},
				{
					name: "Dr. Dipak Kumar Roy",
					img: person,
					designation:
						"Department of Chemistry Indian Institute of Technology Indore, India",
				},
			],
			img: img1,
			venue: "Pod Building",
			description:
				"Aliqua duis quis eu ad proident ullamco enim cupidatat sit amet. Officia nisi velit laboris deserunt deserunt veniam pariatur adipisicing officia et nostrud ea. Proident magna aliqua laboris nostrud non. Labore irure voluptate id quis consectetur ut consectetur minim consequat nostrud ex sunt. Commodo laboris adipisicing cupidatat officia voluptate nulla qui ut duis aliquip amet.",
		},
		{
			title: "Borametallomimetics- Activation of Small Molecules by Low-valent Boron Species",
			duration: "21st February, 2021",
			speakers: [
				{
					name: "Dr. Holger Braunschweig",
					designation: "Professor,  University of Würzburg, Germany",
					img: person,
					desc:
						"Aliqua duis quis eu ad proident ullamco enim cupidatat sit amet. Officia nisi velit laboris deserunt deserunt veniam pariatur adipisicing officia et nostrud ea. Proident magna aliqua laboris nostrud non. Labore irure voluptate id quis consectetur ut consectetur minim consequat nostrud ex sunt.",
				},
				{
					name: "Dr. Holger Braunschweig",
					designation: "Professor,  University of Würzburg, Germany",
					img: person,
					desc:
						"Aliqua duis quis eu ad proident ullamco enim cupidatat sit amet. Officia nisi velit laboris deserunt deserunt veniam pariatur adipisicing officia et nostrud ea. Proident magna aliqua laboris nostrud non. Labore irure voluptate id quis consectetur ut consectetur minim consequat nostrud ex sunt.",
				},
			],
			oc: [
				{
					name: "Dr. Dipak Kumar Roy",
					img: person,
					designation:
						"Department of Chemistry Indian Institute of Technology Indore, India",
				},
			],
			img: img1,
			venue: "Pod Building",
			description:
				"Aliqua duis quis eu ad proident ullamco enim cupidatat sit amet. Officia nisi velit laboris deserunt deserunt veniam pariatur adipisicing officia et nostrud ea. Proident magna aliqua laboris nostrud non. Labore irure voluptate id quis consectetur ut consectetur minim consequat nostrud ex sunt. Commodo laboris adipisicing cupidatat officia voluptate nulla qui ut duis aliquip amet.",
		},
	]);
	return (
		<div className="container-fluid eventsOutreach">
			{index == -1 && (
				<div>
					<h1 className="p-3 m-2 mainTitle text-center">Outreach Events</h1>
					<div className="eventCards">
						{Outreach.map((Events, i) => {
							return (
								<OutreachEvent Events={Events} key={i} i={i} setIndex={setIndex} />
							);
						})}
					</div>
				</div>
			)}
			{index != -1 && (
				<IndiEvent event={Outreach[index >= 0 ? index : 0]} setIndex={setIndex} />
			)}
		</div>
	);
};
