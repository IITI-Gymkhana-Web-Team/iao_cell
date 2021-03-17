import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { img1, image14, image15, unnamed, image2 } from "../../../assets";
import "./Carousell.css";

export const Carousell = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img className="d-block w-100" src={image15} alt="First slide" />
				<Carousel.Caption>
					<h3 className="font-acme">First slide label</h3>
					<p className="font-ubuntu">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={image15} alt="Second slide" />

				<Carousel.Caption>
					<h3 className="font-acme">Second slide label</h3>
					<p className="font-ubuntu">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={image15} alt="Third slide" />

				<Carousel.Caption>
					<h3 className="font-acme">Third slide label</h3>
					<p className="font-ubuntu">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={image15} alt="4th slide" />

				<Carousel.Caption>
					<h3 className="font-acme">Third slide label</h3>
					<p className="font-ubuntu">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={image15} alt="5th slide" />

				<Carousel.Caption>
					<h3 className="font-acme">Third slide label</h3>
					<p className="font-ubuntu">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
