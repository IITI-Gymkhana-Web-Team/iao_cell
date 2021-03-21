import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./MHRDPage.css";

export const MHRDPage = ({ info, name, person, insti }) => {
	return (
		<div className="container mb-5">
			<div className="container-fluid">
				<h1 className="p-2 pl-5 pt-4 pr-5 mainTitle text-center">{name}</h1>
			</div>
			<div className="coords mt-5">
				<div>
					<h3 className="font-acme">Coordinator</h3>
					<div className="coordCard mb-5">
						<img src={person.img} />
						<div className="ml-3">
							<h4 className="font-acme">{person.name}</h4>
							<h5 className="font-acme" style={{ color: "var(--dark-blue)" }}>
								{person.designation}
							</h5>
							<p className="font-ubuntu">{person.email}</p>
						</div>
					</div>
				</div>
				{insti.title == "Application Link" && (
					<div>
						<h3 className="font-acme">Application Link</h3>
						<div className="coordCard mb-5">
							<img src={insti.img} />
							<div className="ml-3">
								<h4 className="font-acme">Link</h4>
								<a href={insti.link} className="font-ubuntu" target="_blank">
									{insti.link}
								</a>
							</div>
						</div>
					</div>
				)}
				{insti.title != "Application Link" && (
					<div>
						<h3 className="font-acme">Coordinating Institute</h3>
						<div className="coordCard mb-5">
							<img src={insti.img} />
							<div className="ml-3">
								<h4 className="font-acme">{insti.name}</h4>
								<a className="font-ubuntu" target="_blank" herf={insti.link}>
									{insti.link}
								</a>
							</div>
						</div>
					</div>
				)}
			</div>

			<h2 className="font-acme">Approved Projects</h2>
			<Table striped bordered hover variant="success" responsive>
				<thead>
					<tr>
						<th style={{ textAlign: "center" }}>#</th>
						<th style={{ textAlign: "center" }}>Year</th>
						<th style={{ textAlign: "center" }}>Domain</th>
						<th style={{ textAlign: "center" }}>Title</th>
						<th style={{ textAlign: "center" }}>IITI PI</th>
						<th style={{ textAlign: "center" }}>Foreign PI</th>
						<th style={{ textAlign: "center" }}>Foreign University</th>
						<th style={{ textAlign: "center" }}>Country</th>
					</tr>
				</thead>
				<tbody>
					{info.map((info1, index) => {
						return (
							<tr key={index}>
								<td style={{ textAlign: "center" }}>{index + 1}</td>
								<td style={{ textAlign: "center" }}>{info1.Year}</td>
								<td style={{ textAlign: "center" }}>{info1.Domain}</td>
								<td style={{ textAlign: "center" }}>{info1.Title}</td>
								<td style={{ textAlign: "center" }}>{info1.Ip}</td>
								<td style={{ textAlign: "center" }}>{info1.Fp}</td>
								<td style={{ textAlign: "center" }}>{info1.Fu}</td>
								<td style={{ textAlign: "center" }}>{info1.Country}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
