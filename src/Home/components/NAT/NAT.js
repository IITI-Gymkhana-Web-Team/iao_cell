import React from "react";
// import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "./NAT.css";
import "owl.carousel/dist/assets/owl.carousel.css";

import "owl.carousel/dist/assets/owl.theme.default.css";
import Announceutil from "../../reusables/Announceutil";
import Newsutil from "../../reusables/Newsutil";
import Talkutil from "../../reusables/Talkutil";
import { data } from "../NewsPage/data";

export const NAT = () => {
	const news = data;
	let title = "Coronavirus Lockdown";
	let text =
		"Some quick example text to build on the card title and make up the bulk of the card's content.";
	return (
		<div class="container bg-light NAT">
			<div class="row">
				<div class="col-smm-12 col-lg-8">
					<div class="news container bg-light">
						<div class="container-fluid">
							<h2 className="pt-5 mainTitle">News</h2>
						</div>
						<div class="container-fluid news1" style={{ maxWidth: "1140px" }}>
							<OwlCarousel
								className="owl-theme"
								loop
								nav={true}
								margin={8}
								dots={false}
								responsive={{
									0: {
										items: 1,
									},
									760: {
										items: 2,
									},
									1000: {
										items: 3,
									},
								}}
								autoplay={true}
								autoplayHoverPause={true}
							>
								{news.map((News, i) => {
									return <Newsutil News={News} key={i} index={i} />;
								})}
							</OwlCarousel>
						</div>
					</div>
				</div>
				<div class="col-sm-12 col-lg-4">
					<div class="news container bg-light mt-5">
						<div>
							<div style={{ margin: "auto", maxWidth: "400px" }}>
								<h3 class="mainTitle">Announcements</h3>
								<OwlCarousel
									className="owl-theme"
									loop
									nav={false}
									margin={8}
									dots={true}
									responsive={{
										0: {
											items: 1,
										},
									}}
									autoplay={true}
									autoplayHoverPause={true}
								>
									<div>
										<Announceutil text={text} title={title} />
									</div>
									<div>
										<Announceutil text={text} title={title} />
									</div>
									<div>
										<Announceutil text={text} title={title} />
									</div>
									<div>
										<Announceutil text={text} title={title} />
									</div>
									<div>
										<Announceutil text={text} title={title} />
									</div>
									<div>
										<Announceutil text={text} title={title} />
									</div>
									<div>
										<Announceutil text={text} title={title} />
									</div>
								</OwlCarousel>
							</div>

							<div style={{ margin: "auto", maxWidth: "400px" }}>
								<h3 class="mainTitle">Talks</h3>
								<OwlCarousel
									className="owl-theme"
									loop
									nav={true}
									margin={8}
									dots={false}
									responsive={{
										0: {
											items: 1,
										},
									}}
									autoplay={true}
									autoplayHoverPause={true}
								>
									<div>
										<Talkutil text={text} title={title} />
									</div>
									<div>
										<Talkutil text={text} title={title} />
									</div>
									<div>
										<Talkutil text={text} title={title} />
									</div>
									<div>
										<Talkutil text={text} title={title} />
									</div>
									<div>
										<Talkutil text={text} title={title} />
									</div>
									<div>
										<Talkutil text={text} title={title} />
									</div>
									<div>
										<Talkutil text={text} title={title} />
									</div>
								</OwlCarousel>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
