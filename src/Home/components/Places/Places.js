import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Newscard } from "../../reusables/PlaceCard";
import { data } from "./data";
import "./Places.css";

export const Places = () => {
	return (
		<>
			<Container className="places pt-3 mt-3 mb-3 bg-light">
				<h2 className="mainTitle text-center mb-5">Places To Visit</h2>
				<Row>
					{data.map((place, index) => {
						if (index % 2) {
							return (
								<Col key={`${index}-pijja`} sm={12}>
									<Newscard
										reverse={true}
										img={place.img}
										title={place.title}
										description={place.description}
										location={place.location}
										eta={place.eta}
									/>
								</Col>
							);
						} else {
							return (
								<Col key={`${index}-pijja`} sm={12}>
									<Newscard
										reverse={false}
										img={place.img}
										title={place.title}
										description={place.description}
										location={place.location}
										eta={place.eta}
									/>
								</Col>
							);
						}
					})}
				</Row>
			</Container>
		</>
	);
};
