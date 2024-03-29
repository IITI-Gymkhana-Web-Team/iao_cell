import React from "react";
import { Newscard } from "../../reusables/NewsCard";
import { data } from "./data";
import "./Newspage.css";

export const NewsPage = () => {
	return (
		<>
			<div className="places newsPage pt-3 mt-3 mb-3 bg-light font-ubuntu container-fluid">
				<h1 className="m-1 mb-3 mainTitle text-center">Outreach News</h1>
				<div>
					{data.map((news, index) => {
						return (
							<Newscard
								className="text-justify"
								img={news.image}
								title={news.title}
								text={news.desc}
								date={news.date}
								key={index}
								index={index}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};
