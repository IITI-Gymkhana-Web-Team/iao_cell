import React from "react";
import "./Chemtalks.css";
import { Link } from "react-router-dom";

export const ChemTalks = () => {
	return (
		<div className="container font-ubuntu aboutIITI pb-5">
			<div className = "row">
                <div className = "col-8">
                    <img src="" alt="" />
                </div>
                <div className = "col-4">
                    <h3>Chemistry Talks</h3>
                    <h5>Feb 1 2021 - Feb 28 2021</h5>
                    <h6>Chemistry Talks aim to provide a platform for eminent chemists from all over the world to share and discuss wider
                     aspects of the domain of chemical sciences and allied areas.</h6>
                     <p><a href="https://sites.google.com/iiti.ac.in/chemistrytalks">https://sites.google.com/iiti.ac.in/chemistrytalks</a></p>
                </div>
            </div>
		</div>
	);
};