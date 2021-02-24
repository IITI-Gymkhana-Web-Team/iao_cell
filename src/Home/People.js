import React, { useState } from "react";
import img from "../assets/person.png";
import { PeopleCard } from "./components/PeopleCard/PeopleCard";
import { Form } from "react-bootstrap";
import avinash from "../assets/Avinash_Sonawane.jpg";
import raghu from "../assets/Raghunath.png";
import sanjay from "../assets/Sanjay.jpg";
import satya from "../assets/T_Sataynarayana.jpg";
import thomas from "../assets/Rajan_thomas.jpg";
import vinu from "../assets/vinu.jpg";

export const People = () => {
	const [index, setIndex] = useState(1);

	const [committee1] = useState([
		{ name: "DR. Avinash Sonawane", designation: "Dean", email: "doiao@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#", img: avinash },
		{
			name: "Dr.  Raghunath Sahoo",
			designation: "Associate Dean",
			email: "adoiao@iiti.ac.in",
			phno: "+91 1234567890",
			fb: "",
			ig: "",
			lin: "#",
			img: raghu,
		},
		{
			name: "DR. Sanjay Kumar Singh",
			designation: "Associate Dean",
			email: "adoiao2@iiti.ac.in",
			phno: "+91 1234567890",
			fb: "#",
			ig: "#",
			lin: "",
			img: sanjay,
		},
		{
			name: "mR. tentu Satyanarayana",
			designation: "Joint Registrar",
			email: "drintl@iiti.ac.in",
			phno: "+91 1234567890",
			fb: "",
			ig: "#",
			lin: "#",
			img: satya,
		},
		{
			name: "Mr. Rajan Thomas",
			designation: "Administrative Officer",
			email: " aoiao@iiti.ac.in",
			phno: "+91 1234567890",
			fb: "#",
			ig: "",
			lin: "#",
			img: thomas,
		},
		{ name: "Mr. Vinay Kumar", designation: "Manager", email: " vinaykumar@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "#", img: vinu },
	]);
	const [committee2] = useState([
		{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#", img: img },
		{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "", lin: "#", img: img },
		{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "", img: img },
	]);
	const [committee3] = useState([
		{ name: "Mno Pqr", designation: "testing", email: "mnopqr@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#", img: img },
		{ name: "Mno Pqr", designation: "testing", email: "mnopqr@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "", lin: "#", img: img },
		{ name: "Mno Pqr", designation: "testing", email: "mnopqr@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "", img: img },
		{ name: "Mno Pqr", designation: "testing", email: "mnopqr@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#", img: img },
		{ name: "Mno Pqr", designation: "testing", email: "mnopqr@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "", lin: "#", img: img },
		{ name: "Mno Pqr", designation: "testing", email: "mnopqr@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "#", img: img },
	]);
	const [committee4] = useState([
		{ name: "Stu Vwx", designation: "testing", email: "stuvwx@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#", img: img },
		{ name: "Stu Vwx", designation: "testing", email: "stuvwx@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "", lin: "#", img: img },
		{ name: "Stu Vwx", designation: "testing", email: "stuvwx@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "", img: img },
		{ name: "Stu Vwx", designation: "testing", email: "stuvwx@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#", img: img },
	]);
	const [committee5] = useState([
		{ name: "Yza Bcd", designation: "testing", email: "yzabcd@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#", img: img },
		{ name: "Yza Bcd", designation: "testing", email: "yzabcd@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "", lin: "#", img: img },
		{ name: "Yza Bcd", designation: "testing", email: "yzabcd@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "", img: img },
		{ name: "Yza Bcd", designation: "testing", email: "yzabcd@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#", img: img },
		{ name: "Yza Bcd", designation: "testing", email: "yzabcd@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "", lin: "#", img: img },
	]);

	return (
		<div className="container-fluid">
			<div className="container-fluid">
				<h1 className="p-3 m-2 mainTitle text-center">People</h1>
			</div>
			<div className="commBtns">
				<Form.Group controlId="exampleForm.ControlSelect1" className="selectComm" onChange={(e) => setIndex(Number(e.target.value))}>
					<Form.Control as="select">
						<option value="1">Office of International Affairs</option>
						<option value="2">Outreach Committee</option>
						<option value="3">Committee 3</option>
						<option value="4">committee 4</option>
						<option value="5">committee 5</option>
					</Form.Control>
				</Form.Group>
			</div>
			<div className="peopleCards">
				{index == 1 &&
					committee1.map((person) => {
						return <PeopleCard person={person} img={img} key={person.email} />;
					})}
				{index == 2 &&
					committee2.map((person) => {
						return <PeopleCard person={person} img={img} key={person.email} />;
					})}
				{index == 3 &&
					committee3.map((person) => {
						return <PeopleCard person={person} img={img} key={person.email} />;
					})}
				{index == 4 &&
					committee4.map((person) => {
						return <PeopleCard person={person} img={img} key={person.email} />;
					})}
				{index == 5 &&
					committee5.map((person) => {
						return <PeopleCard person={person} img={img} key={person.email} />;
					})}
			</div>
		</div>
	);
};
