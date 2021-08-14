import React from "react";
import { useHistory } from "react-router-dom";

export const NsdCards = ({ title, text, img, index, name }) => {
	let history = useHistory();

	const handleCardClick = () => {
		history.push("/outreach/events/" + name);
	};

	return (
		<div className="card border-0" style={{ backgroundColor: "#fff", cursor: "pointer" }} onClick={handleCardClick}>
			<div style={{ height: "250px" }}>
				<img src={img} style={{ maxWidth: "100%", maxHeight: "100%", minWidth: "100%" }} alt="" />
			</div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div className="card-body p-2 mt-2">
					<h4 className="card-title font-acme">{title}</h4>
					<hr style={{ color: "#082a8d", height: 3 }}></hr>
					<p className="card-text">{text.slice(0, 160) + "..."}</p>
				</div>
			</div>
		</div>
	);
};
