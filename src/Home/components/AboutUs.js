import React, { useState } from "react";
import image from "../../assets/image2.jpg";

export const AboutUs = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<div className="container bg-light mt-5">
				<h1 className="p-2 pl-5 pt-5 pr-5 mainTitle">About Us</h1>
				<div className="container-fluid pb-5">
					<div className="card-group ">
						<div className="card bg-light col-sm-8 border-0">
							<div className="card-body ">
								<p className="mainDesc">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
									dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
									unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
									recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Ipsum passages, and more
									recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
								</p>
								<p className="less" onClick={() => setShow(true)} style={{ display: !show ? "" : "none" }}>
									Read More...
								</p>
								{/*<button className="btn btn-danger">In the media</button>*/}
								<p className="mainDesc moreDesc" style={{ display: show ? "" : "none" }}>
									Some more lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
									unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
									recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Ipsum passages, and more
									recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
								</p>
								<p className="less" onClick={() => setShow(false)} style={{ display: show ? "" : "none" }}>
									Read Less...
								</p>
							</div>
						</div>
						<div className="card col-sm-4 border-0 bg-light aboutPic">
							{/* <p>image</p> */}
							<img src={image} className="img-thumbnail" alt="img-responsive" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
