import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Newscard } from "../../reusables/NewsCard";
import { data } from "./data";

export const NewsPage = () => {
	return (
		<>
			<Container className="places pt-3 mt-3 mb-3 bg-light font-ubuntu">
				<h1 className="m-1 mb-5 mainTitle text-center">Outreach News</h1>
				<Row>
					{data.map((news, index) => {
						return (
							<Col sm={12} key={index}>
								<Newscard
									img={news.image}
									title={news.title}
									text={news.text}
									date={news.date}
								/>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
};
