import React from "react";
import { TestimonialCard } from "./TestimonialCard";
import { data } from "./data";

export const Testimonials = () => {
	return (
		<div className="container">
			<h2 className="p-2 text-center mainTitle mt-3">Visitors' Experience</h2>
			{data.map((person) => {
				return <TestimonialCard person={person} />;
			})}
		</div>
	);
};
