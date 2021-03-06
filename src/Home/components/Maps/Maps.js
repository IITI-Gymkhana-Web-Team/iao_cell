import React from "react";
import { WorldMap } from "react-svg-worldmap";
import "./Maps.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { MdZoomOutMap } from "react-icons/md";

export const Maps = () => {
	const data = [
		{ country: "us", value: " " }, // usa
		{ country: "ca", value: " " }, // canada
		{ country: "mx", value: " " }, // mexico
		{ country: "gb", value: " " }, // united kingdom (england / great britain)
		{ country: "ru", value: " " }, // russia
		{ country: "fi", value: " " }, // finland
		{ country: "be", value: " " }, // Belgium
		{ country: "tr", value: " " }, // turkey
		{ country: "no", value: " " }, // norway
		{ country: "dk", value: " " }, // denmark
		{ country: "jp", value: " " }, // japan
		{ country: "au", value: " " }, // australia
		{ country: "kr", value: " " }, // korea (south)
		{ country: "cn", value: " " }, // china
		{ country: "tw", value: " " }, // taiwan
		{ country: "my", value: " " }, // singapore (malaysia)
		{ country: "in", value: " " }, // india
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

	const stylingFunction = (context) => {
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
			<div className="container-fluid">
				<h1 className="p-2 pl-5 pt-5 pr-5 mainTitle text-center">Collaborations</h1>
			</div>
			<TransformWrapper defaultScale={1} defaultPositionX={200} defaultPositionY={100}>
				{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
					<React.Fragment>
						<div className="tools">
							<button onClick={zoomIn} className="zoomIcons">
								<AiOutlineZoomIn />
							</button>
							<button onClick={zoomOut} className="zoomIcons">
								<AiOutlineZoomOut />
							</button>
							<button onClick={resetTransform} className="zoomIcons">
								<MdZoomOutMap />
							</button>
						</div>
						<TransformComponent>
							<WorldMap size="xl" data={data} styleFunction={stylingFunction} onClickFunction={clickAction} />
						</TransformComponent>
					</React.Fragment>
				)}
			</TransformWrapper>
		</div>
	);
};
