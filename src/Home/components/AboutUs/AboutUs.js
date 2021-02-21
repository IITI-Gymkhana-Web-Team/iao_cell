import React from "react";
import image from "../../../assets/img1.jpeg";
import "./AboutUs.css";

export const AboutUs = () => {
	return (
		<>
			<div className="container bg-light mt-5" style={{ borderRadius: "10px" }}>
				<h1 className="p-2 pl-5 pt-5 pr-5 mainTitle">About Us</h1>
				<div className="container-fluid pb-5">
					<div className="card-group ">
						<div className="card bg-light col-sm-6 border-0">
							<div className="card-body ">
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
						<div className="card col-sm-6 border-0 bg-light aboutPic">
							{/* <p>image</p> */}
							<img src={image} className="img-thumbnail" alt="img-responsive" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
