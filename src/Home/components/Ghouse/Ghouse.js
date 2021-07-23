import React from "react";
import { gh } from "../../../assets";
import policy from "../../../assets/policy.pdf";

export const Ghouse = () => {
	return (
		<div className="text-justify container font-ubuntu aboutIITI pb-5">
			<h1 className="mainTitle text-center m-3 mb-5 mt-4">Guest House</h1>
			<p>
				At IIT Indore, we have fully furnished guest house of international standards for the foreign visitors.
			</p>
			<img alt="guest house" src={gh} style={{ width: "100%" }} className="mb-5" />
			<p>
				As per institute accommodation policy the IIT Indore Guest House accommodation charges are divided into
				two categories that are Category "A" and Category "B".
			</p>
			<h4 className="mainTitle mt-4">Category "A" - Institutes invited guest</h4>
			<p>
				Room charges are Rupee. 2,000 + tax 12% per night (Excluding Food)
				<br />
				If the accommodation is beyond 10 days The room charges will be considered Rupee.20,000 + tax 12% per
				day (Excluding Food)
			</p>
			<h4 className="mainTitle mt-4">Category "B" - Guest visiting for self purpose</h4>
			<p>
				Room charges are Rupee.3,000 + tax 18% per night (Excluding Food)
				<br />
				If the accommodation is beyond 10 days The room charges will be considered Rupee.30,000 + tax 18% per
				day (Excluding Food)
			</p>
			<p>
				<strong>Note</strong> - Presently we are having only one category of room that is Executive AC Room.
				Above mentioned charges are applicable for both domestic and international guests.
			</p>
			<p>
				To view the policy,{" "}
				<a href={policy} target="_blank" rel="noreferrer">
					Click Here
				</a>
			</p>
			<p>Contact details are as follows for reservation of accommodation at IIT Indore Guest House -</p>
			<p>
				Contact person - Ashok Garasiya
				<br />
				Contact No. - <a href="tel:+91 9826789810">+91 9826789810</a>
				<br />
				Email Id - <a href="mailto:guesthouse@iiti.ac.in">guesthouse@iiti.ac.in</a>
			</p>
		</div>
	);
};
