import React from "react";
import image from "../../../assets/dean.jpg";

export default function Message() {
	return (
		<>
			<div className="container bg-light mt-5" style={{ borderRadius: "10px" }}>
				<div className="container-fluid pb-5">
					<div className="card-group ">
						<div className="card bg-light col-sm-12 border-0">
							<h1 className="p-2 pt-5 mainTitle" style={{ margin: "auto" }}>
								Message From The Dean
							</h1>
							<img src={image} className="img-thumbnail" alt="img-responsive" style={{ width: "min(70vw,300px)", margin: "auto" }} />
							<div className="card-body" style={{ textAlign: "center" }}>
								<p className="mainDesc">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
									dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
									book. Some more lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
									industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
									a type specimen book. It has survived not only
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
