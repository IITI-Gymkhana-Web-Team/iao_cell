import React from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";

import "owl.carousel/dist/assets/owl.theme.default.css";
import Announcetalkutil from "../../reusables/Announceutil";
import Talkutil from "../../reusables/Talkutil";
export const Announcetalk = () => {
	let title = " Lockdown";
	let text = "Some quick example text to build on the card title and make up the bulk of the card's content.";

	return (
		<div className="news container bg-light mt-5">
			<div style={{ maxWidth: "400px" }}>
				<OwlCarousel
					className="owl-theme"
					loop
					nav={true}
					margin={8}
					responsive={{
						0: {
							items: 1,
						},
					}}
				>
					<div>
						<Announcetalkutil text={text} title={title} />
					</div>
					<div>
						<Announcetalkutil text={text} title={title} />
					</div>
					<div>
						<Announcetalkutil text={text} title={title} />
					</div>
					<div>
						<Announcetalkutil text={text} title={title} />
					</div>
					<div>
						<Announcetalkutil text={text} title={title} />
					</div>
					<div>
						<Announcetalkutil text={text} title={title} />
					</div>
					<div>
						<Announcetalkutil text={text} title={title} />
					</div>
				</OwlCarousel>
			</div>

			<div style={{ maxWidth: "400px" }}>
				<OwlCarousel
					className="owl-theme"
					loop
					nav={true}
					margin={8}
					responsive={{
						0: {
							items: 1,
						},
					}}
				>
					<div>
						<Talkutil text={text} title={title} />
					</div>
				</OwlCarousel>
			</div>
		</div>
	);
};
