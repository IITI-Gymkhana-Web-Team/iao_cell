import React from "react";
import Newsutil from "../../reusables/Newsutil";
import "./News.css";
import { Link } from "react-router-dom";
import { data } from "../NewsPage/data";

export const News = () => {
	const news = data.slice(0, 4);

	return (
		<div className="news">
			<div>
				<h1 className="pr-5 pb-3 mainTitle">News & Events</h1>
			</div>
			<div>
				{news.map((News, i) => {
					return <Newsutil News={News} key={i} index={i} />;
				})}
			</div>
			<Link to="/outreach/news">
				<button className="moreStuff">More News</button>
			</Link>
		</div>
	);
};
