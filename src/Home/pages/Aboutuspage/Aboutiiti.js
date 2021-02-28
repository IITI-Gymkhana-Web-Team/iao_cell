import React from 'react';
import { image14 } from "../../../assets";
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

export default function Aboutiiti() {
	return (
		<>
			<div className="container bg-light mt-5 mb-5" style={{ borderRadius: "10px" }}>
				<h1 className="p-2 pl-5 pt-5 pr-5 mainTitle" style={{ textAlign: "center" }}>About IIT Indore</h1>
				<div className="container-fluid pb-5">
					<div className="card-group ">
						<div className="card border-0 bg-light" style={{ alignItems: "center" }}>
							<img style={{ width: "600px", height: "400px" }} src={image14} className="img-thumbnail" alt="img-responsive" />
						</div>
						<p className="" style={{ textAlign: "center" }}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
							dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
							book.<br />
									Some more lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only
								</p>
					</div>
				</div>
				<div style={{textAlign:"center"}}><p style={{fontSize:"1.6rem"}}>For more details:- <a href="http://iiti.ac.in/" target="_blank"><button className="btn btn-primary">Visit</button></a></p></div>
			</div>
		</>
	)
}
