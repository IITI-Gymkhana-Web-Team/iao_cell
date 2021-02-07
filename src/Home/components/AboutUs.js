import React from "react";
import image from "./image2.jpg";

export const AboutUs = () => {
	return (
		<>
			<div className="container bg-light mt-5">
				<h1 className="text-center p-2">About Us</h1>
				<div class="container-fluid pb-5">
					<div class="card-group ">
						<div class="card bg-light col-sm-8 border-0">
							<div className="card-body ">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
								<button className="btn btn-danger">In the media</button>
							</div>
						</div>
						<div class="card col-sm-4 border-0 bg-light">
							{/* <p>image</p> */}
							<img src={image} className="img-thumbnail" alt="img-responsive" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
