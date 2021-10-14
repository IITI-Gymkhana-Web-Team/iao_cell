import React, { useState, useEffect } from "react";
import "./Search.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { searchData as data } from "./data";
import { Link } from "react-router-dom";

function Search({ hideSearchComp, setShow }) {
	const [txt, setTxt] = useState("");

	const [dataFiltered, setDataFiltered] = useState([]);

	useEffect(() => {
		let newData = data.filter((d) => {
			let foundInKeyword = false;
			for (let i = 0; i < d.keywords.length; i++) {
				if (d.keywords[i].toLowerCase().includes(txt.toLowerCase())) {
					foundInKeyword = true;
					break;
				}
			}
			return d.name.toLowerCase().includes(txt.toLowerCase()) || foundInKeyword;
		});
		setDataFiltered(newData);
	}, [txt]);

	return (
		<div className="searchComp" style={{ overflow: "auto" }}>
			<div style={{ position: "sticky", top: 0, backgroundColor: "#fff", zIndex: 10 }}>
				<div className="searchNav">
					<h4 style={{ textAlign: "center", fontFamily: "Arial", marginBottom: 0 }}>Search</h4>
					<p onClick={hideSearchComp} className="searchCloseIcon">
						<AiOutlineCloseCircle />
					</p>
				</div>
				<div
					style={{
						width: "min(90%,500px)",
						margin: "auto",
						padding: "20px",
					}}
				>
					<input
						type="text"
						placeholder="Search..."
						value={txt}
						onChange={(e) => {
							setTxt(e.target.value);
						}}
						style={{
							width: "100%",
							fontSize: 20,
							padding: "5px",
							borderRadius: 5,
							border: "1px solid black",
						}}
					/>
				</div>
			</div>
			<div
				style={{
					padding: "20px",
				}}
			>
				<div
					className="d-flex flex-wrap justify-content-center align-items-stretch"
					style={{ overflow: "auto" }}
				>
					{txt === "" && (
						<p style={{ fontFamily: "Arial", textAlign: "center", fontSize: 20 }}>
							Please type something in the search bar
						</p>
					)}
					{txt !== "" &&
						dataFiltered.length > 0 &&
						dataFiltered.map((d) => {
							console.log(d);
							if (d.link[0] === "h") {
								return (
									<a
										onClick={() => {
											hideSearchComp();
											setShow(false);
										}}
										className="filterDiv"
										href={d.link}
										target="_blank"
										rel="noreferrer"
									>
										<div className="filterTitle">{d.name}</div>
										<div className="filterKeywords">
											{d.keywords.map((k, i) => {
												if (i < d.keywords.length - 1) return k + ", ";
												else return k;
											})}
										</div>
									</a>
								);
							} else {
								return (
									<Link
										onClick={() => {
											hideSearchComp();
											setShow(false);
										}}
										className="filterDiv"
										to={d.link}
									>
										<div className="filterTitle">{d.name}</div>
										<div className="filterKeywords">
											{d.keywords.map((k, i) => {
												if (i < d.keywords.length - 1) return k + ", ";
												else return k;
											})}
										</div>
									</Link>
								);
							}
						})}
					{txt !== "" && dataFiltered.length === 0 && (
						<p style={{ fontFamily: "Arial", textAlign: "center", fontSize: 20 }}>No results found</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Search;
