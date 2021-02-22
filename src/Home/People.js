import React, { useState } from "react";
import img from "../assets/person.png";
import { PeopleCard } from "./components/PeopleCard/PeopleCard";

export const People = () => {
	const [index, setIndex] = useState(1);

	const [committee1] = useState([
		{ name: "Abc Def", designation: "testing", email: "abcdef@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#" },
		{ name: "Abc Def", designation: "testing", email: "abcdef@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "", lin: "#" },
		{ name: "Abc Def", designation: "testing", email: "abcdef@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "" },
		{ name: "Abc Def", designation: "testing", email: "abcdef@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#" },
		{ name: "Abc Def", designation: "testing", email: "abcdef@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "", lin: "#" },
		{ name: "Abc Def", designation: "testing", email: "abcdef@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "#" },
		{ name: "Abc Def", designation: "testing", email: "abcdef@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "" },
	]);
	const [committee2] = useState([
		{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#" },
		{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "", lin: "#" },
		{ name: "Ghi Jkl", designation: "testing", email: "ghijkl@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "" },
	]);
	const [committee3] = useState([
		{ name: "Mno Pqr", designation: "testing", email: "mnopqr@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#" },
		{ name: "Mno Pqr", designation: "testing", email: "mnopqr@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "", lin: "#" },
		{ name: "Mno Pqr", designation: "testing", email: "mnopqr@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "" },
		{ name: "Mno Pqr", designation: "testing", email: "mnopqr@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#" },
		{ name: "Mno Pqr", designation: "testing", email: "mnopqr@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "", lin: "#" },
		{ name: "Mno Pqr", designation: "testing", email: "mnopqr@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "#" },
	]);
	const [committee4] = useState([
		{ name: "Stu Vwx", designation: "testing", email: "stuvwx@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#" },
		{ name: "Stu Vwx", designation: "testing", email: "stuvwx@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "", lin: "#" },
		{ name: "Stu Vwx", designation: "testing", email: "stuvwx@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "" },
		{ name: "Stu Vwx", designation: "testing", email: "stuvwx@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#" },
	]);
	const [committee5] = useState([
		{ name: "Yza Bcd", designation: "testing", email: "yzabcd@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#" },
		{ name: "Yza Bcd", designation: "testing", email: "yzabcd@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "", lin: "#" },
		{ name: "Yza Bcd", designation: "testing", email: "yzabcd@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "#", lin: "" },
		{ name: "Yza Bcd", designation: "testing", email: "yzabcd@iiti.ac.in", phno: "+91 1234567890", fb: "", ig: "#", lin: "#" },
		{ name: "Yza Bcd", designation: "testing", email: "yzabcd@iiti.ac.in", phno: "+91 1234567890", fb: "#", ig: "", lin: "#" },
	]);

	return (
		<div className="container-fluid">
			<div className="container-fluid">
				<h1 className="p-3 m-2 mainTitle text-center">People</h1>
			</div>
			<div className="commBtns">
				<button onClick={() => setIndex(1)} className="btn btn-dark">
					Committee 1
				</button>
				<button onClick={() => setIndex(2)} className="btn btn-dark">
					Committee 2
				</button>
				<button onClick={() => setIndex(3)} className="btn btn-dark">
					Committee 3
				</button>
				<button onClick={() => setIndex(4)} className="btn btn-dark">
					Committee 4
				</button>
				<button onClick={() => setIndex(5)} className="btn btn-dark">
					Committee 5
				</button>
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
