import React from "react";
import { img1 } from "../../../assets";
import { image14 } from "../../../assets";
import "./AboutUs.css";

export const AboutUs = () => {
	return (
		<>
			<div className="container mt-5" style={{ borderRadius: "10px" }}>

				<div className="container-fluid pb-5 pt-5">
					<div className="card-group ">
						<div className="card border-0" style={{backgroundColor:"rgb(201, 236, 172)"}}>
							<div className="card-body ">
								<h1 className="mainTitle">About Us</h1>
								<hr></hr>
								<img src={img1} className="img-thumbnail" alt="img-responsive" />
								<p className="mainDesc">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
									dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
									book.
									<br />
									<br />
									Some more lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only
								</p>
							</div>
						</div>
						<div className="card border-0" style={{backgroundColor:"#fcbcbe"}}>
							<div className="card-body ">
								<h1 className=" mainTitle">About IITI</h1>
								<hr></hr>
								<img style={{ width: "600px", height: "310px" }} src={image14} className="imageabout img-thumbnail" alt="img-responsive" />
								<p className="" style={{ textAlign: "center" }}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
									dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
								    book.
								</p>
								<div style={{ textAlign: "center" }} className="mt-2 pb-3"><p style={{ fontSize: "1.6rem" }}>For more details:- <a href="http://iiti.ac.in/" target="_blank"><button className="btn" style={{backgroundColor:"#ffa4a7"}}>Visit</button>
								</a>
								</p></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
