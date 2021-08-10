import React from "react";

export const NsdCards = ({ title, text, img, index }) => {
	return (
		<div className="card border-0" >
			<div style={{ height: "250px" }}>
				<img src={img} style={{ maxWidth: "100%", maxHeight: "100%", minWidth: "100%" }} />
			</div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div className="card-body">
					<h4 className="card-title font-acme">{title}</h4>
					<hr style={{ color: "#082a8d", height: 3}}></hr>
					<p className="card-text">{text.slice(0, 160) + "..."}</p>
				</div>
			</div>
		</div>
	);
};