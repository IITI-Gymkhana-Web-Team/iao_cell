import React, { useState } from "react";
import Newsutil from "../../reusables/Newsutil";
import "./News.css";
import { Link } from "react-router-dom";

export const News = () => {
	const [news, setNews] = useState([
		{
			title: "Coronavirus Lockdown 1: Boon or Bane",
			text:
				"Enim ut exercitation proident aliquip voluptate enim velit magna reprehenderit ex nulla fugiat. Tempor magna consectetur adipisicing ullamco tempor consequat cupidatat culpa. Exercitation eiusmod ea eu reprehenderit do dolore proident enim sint aute velit do cupidatat nostrud.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 2: Boon or Bane",
			text:
				"Fugiat esse sunt ea ipsum ad. Sit consequat adipisicing deserunt est. Excepteur velit labore est id. Reprehenderit velit sunt culpa nulla cillum laboris incididunt dolor. Culpa proident irure nostrud occaecat nostrud veniam veniam eu elit do eu est in. Amet amet deserunt consequat labore irure minim voluptate. Reprehenderit veniam quis occaecat reprehenderit quis nostrud dolore adipisicing minim nulla esse id.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 3: Boon or Bane",
			text:
				"Deserunt irure culpa fugiat amet pariatur reprehenderit est. Duis eiusmod dolore do anim excepteur. Lorem non incididunt aliquip do incididunt veniam reprehenderit tempor ipsum laborum officia aliqua.",
			date: "January 27, 2021",
		},
	]);

	return (
		<div className="news">
			<div>
				<h1 className="pr-5 pb-3 mainTitle">News</h1>
			</div>
			<div>
				{news.map((News, i) => {
					return <Newsutil News={News} key={i} />;
				})}
			</div>
			<Link to="/outreach/news">
				<button className="moreStuff">More News</button>
			</Link>
		</div>
	);
};
