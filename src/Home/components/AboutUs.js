import React from "react";
import image from "./image2.jpg";

export const AboutUs = () => {
	return (
		<>
		<div className="container bg-light mt-5">
			<h1 className="text-center p-2">About Us</h1>
			<div class="container-fluid bg-grey">
				<div class="row">
				<div class="col-sm-8">
						<h2>heading</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
						<button className="btn btn-danger">In the media</button>
					</div>
					<div class="col-sm-4 pb-2 mb-5">
							<img src={image} className="aboutus" alt="img-responsive" width="350" height="300"/>
					</div>
				</div>
			</div>
			</div>
		</>
	);
};
