import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./MHRDPage.css";
import { Form } from "react-bootstrap";

export const MHRDPage = ({ info, name, person, insti, desc }) => {
	const [year, setYear] = useState("None");
	const [title, setTitle] = useState("");
	const [iitiPi, setIitiPi] = useState("");
	const [domain, setDomain] = useState("");

	return (
		<div className="container mb-5 mhrdPage">
			<h1 className="pt-4 mainTitle">{name}</h1>
			<p className="font-ubuntu">{desc}</p>
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
							<a
								className="font-ubuntu"
								href={"mailto:" + person.email}
								style={{ color: "black" }}
							>
								{person.email}
							</a>
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
			<Form>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label>Search By Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the title"
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput2">
					<Form.Label>Search By IITI PI</Form.Label>
					<Form.Control
						type="text"
						placeholder="Search by IITI PI"
						onChange={(e) => {
							setIitiPi(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput3">
					<Form.Label>Search By Domain</Form.Label>
					<Form.Control
						type="text"
						placeholder="Search by Domain Name"
						onChange={(e) => {
							setDomain(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Sort By Year</Form.Label>
					<Form.Control
						as="select"
						onChange={(e) => {
							setYear(e.target.value);
						}}
					>
						<option value="None">None</option>
						<option value="2020">2020</option>
						<option value="2019">2019</option>
						<option value="2018">2018</option>
						<option value="2017">2017</option>
						<option value="2016">2016</option>
						<option value="2015">2015</option>
					</Form.Control>
				</Form.Group>
			</Form>
			<h2 className="font-acme">Approved Projects</h2>
			<Table striped bordered hover variant="primary" responsive>
				<thead>
					<tr>
						<th>#</th>
						<th>Year</th>
						<th>Domain</th>
						<th>Title</th>
						<th>IITI PI</th>
						<th>Foreign PI</th>
						<th>Foreign University</th>
						<th>Country</th>
					</tr>
				</thead>
				<tbody>
					{info.map((info1, index) => {
						return (
							(year == "None" || info1.Year.toLowerCase().indexOf(year) != -1) &&
							(title == "" ||
								(info1.Title || "--").toLowerCase().indexOf(title.toLowerCase()) !=
									-1) &&
							(domain == "" ||
								(info1.Domain || "--")
									.toLowerCase()
									.indexOf(domain.toLowerCase()) != -1) &&
							(iitiPi == "" ||
								(info1.Ip || "--").toLowerCase().indexOf(iitiPi.toLowerCase()) !=
									-1) && (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{info1.Year || "--"}</td>
									<td>{info1.Domain || "--"}</td>
									<td>{info1.Title || "--"}</td>
									<td>{info1.Ip || "--"}</td>
									<td>{info1.Fp || "--"}</td>
									<td>{info1.Fu || "--"}</td>
									<td>{info1.Country || "--"}</td>
								</tr>
							)
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
