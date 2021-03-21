import React, { useState, useEffect } from "react";
import "./Maps.css";
import { VectorMap } from "react-jvectormap";

export const Maps = () => {
	const [heightOfMap, setHeightOfMap] = useState("520px");
	const updateDimensions = () => {
		if (window.innerWidth <= 600) setHeightOfMap("320px");
		else setHeightOfMap("520px");
	};

	useEffect(() => {
		if (document.getElementsByClassName("jvectormap-zoomin")[0] != undefined) {
			document.getElementsByClassName("jvectormap-zoomin")[0].innerHTML =
				"<i class='fa fa-search-plus'></i>";
			document.getElementsByClassName("jvectormap-zoomout")[0].innerHTML =
				"<i class='fa fa-search-minus'></i>";
		}
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, [window.innerWidth]);

	const color = [
		{ name: "US", color: "#ffa500" },
		{ name: "CA", color: "#008000" },
		{ name: "MX", color: "#ff0000" },
		{ name: "GB", color: "#0000ff" },
		{ name: "RU", color: "#800000" },
		{ name: "FI", color: "#ffc0cb" },
		{ name: "BE", color: "#00ffff" },
		{ name: "NO", color: "#cd5c5c" },
		{ name: "DK", color: "#dc143c" },
		{ name: "JP", color: "#b22222" },
		{ name: "AU", color: "#ff1493" },
		{ name: "KR", color: "#000080" },
		{ name: "CN", color: "#8a2be2" },
		{ name: "TW", color: "#483d8b" },
		{ name: "MY", color: "#ffd700" },
		{ name: "IN", color: "#ff8c00" },
		{ name: "TR", color: "#e9967a" },
	];

	const handleClick = (e, countryCode) => {
		var i = 0;
		while (color[i]) {
			if (countryCode == color[i].name) {
				console.log(countryCode);
			}
			i++;
		}
	};

	const stylingFunction = () => {
		var i = 0;
		var regions = [];
		while (color[i]) {
			var nameObj = {
				[`${color[i].name}`]: 10,
			};
			var scaleArray = [];
			scaleArray.push(color[i].color);
			var obj = {
				values: nameObj,
				scale: scaleArray,
				normalizeFunction: "polynomial",
			};
			regions.push(obj);
			i++;
		}
		return regions;
	};

	return (
		<div className="Maps container bg-light mt-5 mb-5 pb-5" style={{ paddingBottom: "50px" }}>
			<div className="container-fluid">
				<h1 className="p-2 pl-5 pt-5 pr-5 mainTitle text-center">Collaborations</h1>
			</div>
			<div>
				<VectorMap
					map={"world_mill"}
					backgroundColor="#3b96ce"
					containerStyle={{
						width: "100%",
						height: heightOfMap,
					}}
					onRegionClick={handleClick}
					containerClassName="map"
					regionStyle={{
						initial: {
							fill: "#e4e4e4",
							"fill-opacity": 0.9,
							stroke: "none",
							"stroke-width": 0,
							"stroke-opacity": 0,
						},
						hover: {
							"fill-opacity": 0.8,
							stroke: "#000000",
							"stroke-width": 0.5,
							"stroke-opacity": 0.8,
						},
					}}
					series={{
						regions: stylingFunction(),
					}}
				/>
			</div>
		</div>
	);
};
