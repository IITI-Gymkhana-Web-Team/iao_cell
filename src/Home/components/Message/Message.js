import React from "react";
import { neelesh, av2 } from "../../../assets";
import "./Message.css";
import ScrollAnimation from "react-animate-on-scroll";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function Message() {
	let history = useHistory();

	return (
		<>
			<ScrollAnimation animateIn="slideInRight" animateOnce={true}>
				<div className="container mt-3 messageBox" style={{ borderRadius: "10px" }}>
					<div className="container-fluid p-3">
						<img src={neelesh} className="img-thumbnail" alt="img-responsive" />
						<div className="mb-2">
							<h1>Message from our Director</h1>
						</div>
						<h3 className="font-acme messageBy">Prof. Neelesh Kumar Jain</h3>
						<hr />
						<div
							style={{
								fontSize: "17px",
								marginTop: "20px",
								maxWidth: "700px",
							}}
						>
							<div className="quoteBox">
								<FaQuoteLeft className="fa2" />
								<div className="text ml-4">
									<p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled it to make a
										type specimen book.
									</p>
								</div>
								<FaQuoteRight className="fa1" />
							</div>
						</div>
					</div>
				</div>
			</ScrollAnimation>
			<ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
				<div
					className="container mt-3 messageBox"
					style={{ borderRadius: "10px" }}
					onClick={() => {
						history.push("/dean");
					}}
				>
					<div className="container-fluid p-3">
						<img src={av2} className="img-thumbnail" alt="img-responsive" />
						<div className="mb-2">
							<h1>Message from our Dean</h1>
						</div>
						<h3 className="font-acme messageBy">Prof. Avinash Sonawane</h3>
						<hr />
						<div
							style={{
								fontSize: "17px",
								marginTop: "20px",
								maxWidth: "700px",
							}}
						>
							<div className="quoteBox">
								<FaQuoteLeft className="fa2" />
								<div className="text ml-4">
									<p>
										We, at International Affairs and Outreach, IIT Indore, deal
										with the partner Universities across the globe for academic
										and research collaborations, which facilitate opportunities
										to IITI and partner institute’s students and faculties for
										mobility, research, exchange, and internships.
									</p>
								</div>
								<FaQuoteRight className="fa1" />
							</div>
						</div>
					</div>
				</div>
			</ScrollAnimation>
		</>
	);
}
