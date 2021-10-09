import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<div className="NotFound">
			<div className="container font-ubuntu">
				<h1>Oops!</h1>
				<h2 className="pt-5 font-acme">404 Error</h2>
				<h5>Looks like the page which you were trying to find does not exist</h5>
				<Link to="/">Back To Home Page</Link>
			</div>
		</div>
	);
};
