import React from "react";
import { NsdCards } from "../../../reusables/NsdCards";
import { data } from "./data";
import "./Nsd.css";

export const Nsd = () => {
	return (
		<>
			<div className="places nsdPage pt-3 mt-3 mb-3 bg-light font-ubuntu container-fluid">
				<h1 className="m-1 mb-4 mainTitle text-center">National Science day</h1>
				<div>
					{data.map((cards, index) => {
						return (
							<NsdCards
								className="text-justify"
								img={cards.image}
								title={cards.title}
								text={cards.desc}
								key={index}
								index={index}
								name={cards.name}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};
