import React from "react";
import OwlCarousel from "react-owl-carousel";
import "./NAT.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Announceutil from "../../reusables/Announceutil";
import Newsutil from "../../reusables/Newsutil";
import Talkutil from "../../reusables/Talkutil";
import { data } from "../NewsPage/data";
import { data as data1 } from "../EventsPage/data";

export const NAT = () => {
	const news = data.slice(0, 4);
	const events = data1.slice(0, 4);
	let title = "Coronavirus Lockdown";
	let text =
		"Some quick example text to build on the card title and make up the bulk of the card's content.";
	return (
		<div className="container-fluid NAT mt-5 mb-5 pt-5 pb-5">
			<div className="row">
				<div className="col-smm-12 col-lg-8">
					<div className="news container h-100">
						<div className="container-fluid">
							<h2 className="pt-5 mainTitle">News & Events</h2>
						</div>
						<div className="container-fluid news1" style={{ maxWidth: "1140px" }}>
							<OwlCarousel
								className="owl-theme nande"
								loop
								nav={true}
								margin={8}
								dots={false}
								responsive={{
									0: {
										items: 1,
									},
									760: {
										items: 3,
									},
									1000: {
										items: 3,
									},
								}}
								autoplay={true}
								autoplayHoverPause={true}
							>
								{news.map((News, i) => {
									return <Newsutil News={News} key={i} type="news" index={i} />;
								})}
								{events.map((event, i) => {
									return (
										<Newsutil News={event} type="events" key={i} index={i} />
									);
								})}
							</OwlCarousel>
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-lg-4">
					<div className="news container pt-5">
						<div>
							<div style={{ margin: "auto", maxWidth: "400px" }}>
								<h3 className="mainTitle">Announcements</h3>
								<OwlCarousel
									className="owl-theme announcements"
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
								<h3 className="mainTitle talksTitle">Talks</h3>
								<OwlCarousel
									className="owl-theme talks"
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
