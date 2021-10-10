import React from "react";

export const Newscard = ({ title, text, date, img, link }) => {
	return (
		<div
			className="indiEvent font-ubuntu container-fluid"
			style={{
				minHeight: "50vh",
				padding: "10px",
			}}
		>
			<div className="eventPart1">
				<img alt="News" src={img} style={{ minWidth: "400px", minHeight: "250px" }} />
				<div className="eventPart2">
					<h4 className="font-acme">{title}</h4>
					<p className="text-muted">{date}</p>
					<p style={{ whiteSpace: "pre-wrap" }}>{text}</p>
					{link !== "" && link !== undefined && (
						<p style={{ whiteSpace: "pre-wrap" }}>
							To know more,{" "}
							<a href={link} target="_blank" rel="noreferrer">
								Click Here
							</a>
						</p>
					)}
				</div>
			</div>
		</div>
	);
};
