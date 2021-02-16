import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/img1.jpeg"
import img2 from "../../assets/image14.jpg"
import img3 from "../../assets/image15.jpg"
import img4 from "../../assets/unnamed.jpg"
import img5 from "../../assets/image2.jpg"

export const Carousell = () => {
	return (
		<Carousel>
			<Carousel.Item >
				<img
					className="d-block w-100"
					src={img1}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3 className="font-acme">First slide label</h3>
					<p className="font-ubuntu">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={img2}
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3 className="font-acme">Second slide label</h3>
					<p className="font-ubuntu">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={img3}
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3 className="font-acme">Third slide label</h3>
					<p className="font-ubuntu">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={img4}
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3 className="font-acme">Third slide label</h3>
					<p className="font-ubuntu">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={img5}
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3 className="font-acme">Third slide label</h3>
					<p className="font-ubuntu">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
