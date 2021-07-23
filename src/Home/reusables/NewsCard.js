import React from "react";
import { Link } from "react-router-dom";

export const Newscard = ({ title, text, date, img, index }) => {
	return (
		<div className="card">
			<div style={{ height: "250px" }}>
				<img src={img} style={{ maxWidth: "100%", maxHeight: "100%", minWidth: "100%" }} alt={title} />
			</div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div className="card-body">
					<Link to={"/outreach/news/" + index}>
						<h4 className="card-title font-acme">{title}</h4>
					</Link>
					<p className="text-muted">{date}</p>
					<p className="card-text">{text.slice(0, 160) + "..."}</p>
				</div>
			</div>
		</div>
	);
};
