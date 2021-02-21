import React from "react";
import { WorldMap } from "react-svg-worldmap";
import "./Maps.css";

export const Maps = () => {
	const data = [
		{ country: "us", value: "123 students" }, // usa
		{ country: "ca", value: "123 students" }, // canada
		{ country: "mx", value: "123 students" }, // mexico
		{ country: "gb", value: "123 students" }, // united kingdom (england / great britain)
		{ country: "ru", value: "123 students" }, // russia
		{ country: "fi", value: "123 students" }, // finland
		{ country: "be", value: "123 students" }, // Belgium
		{ country: "tr", value: "123 students" }, // turkey
		{ country: "no", value: "123 students" }, // norway
		{ country: "dk", value: "123 students" }, // denmark
		{ country: "jp", value: "123 students" }, // japan
		{ country: "au", value: "123 students" }, // australia
		{ country: "kr", value: "123 students" }, // korea (south)
		{ country: "cn", value: "123 students" }, // china
		{ country: "tw", value: "123 students" }, // taiwan
		{ country: "my", value: "123 students" }, // singapore (malaysia)
		{ country: "in", value: "123 students" }, // india
	];

	const chooseColor = (country) => {
		if (country === "US") return "orange";
		else if (country === "CA") return "green";
		else if (country === "MX") return "red";
		else if (country === "GB") return "blue";
		else if (country === "RU") return "maroon";
		else if (country === "FI") return "pink";
		else if (country === "BE") return "aqua";
		else if (country === "TR") return "indianRed";
		else if (country === "NO") return "crimson";
		else if (country === "DK") return "darkSalmon";
		else if (country === "JP") return "fireBrick";
		else if (country === "AU") return "deepPink";
		else if (country === "KR") return "navy";
		else if (country === "CN") return "blueViolet";
		else if (country === "TW") return "darkSlateBlue";
		else if (country === "MY") return "gold";
		else if (country === "IN") return "darkOrange";
		else return "black";
	};

	const stylingFunction = (context: any) => {
		return {
			fill: chooseColor(context.country),
			fillOpacity: 1,
			stroke: "black",
			strokeWidth: 1,
			strokeOpacity: 0.2,
			cursor: "pointer",
		};
	};

	const clickAction = (event, countryName, isoCode, value, prefix, suffix) => {
		console.log(countryName);
	};

	return (
		<div className="Maps container bg-light mt-5 mb-5">
			<div class="container-fluid">
				<h1 className="p-2 pl-5 pt-5 pr-5 mainTitle text-center">Collaborations</h1>
			</div>
			<WorldMap title="" size="xl" data={data} styleFunction={stylingFunction} onClickFunction={clickAction} />
		</div>
	);
};
