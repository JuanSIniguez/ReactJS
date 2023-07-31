import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export const MainCarrousel = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	const carouselinner = {
		objectFit: "contain",
		overflow: "hidden",
	};
	const imgstyle = {
		height: "65vh",

		objectFit: "cover",
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item style={carouselinner}>
				<img
					style={imgstyle}
					className="d-block w-100"
					src="https://lh3.google.com/u/0/d/19Vwo0BDSOZlEdUxHQXR2sSccEAmFV-vi=w1399-h979-iv1"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={carouselinner}>
				<img
					style={imgstyle}
					className="d-block w-100"
					src="https://lh3.google.com/u/0/d/19W3r3z3gx-N9tiTXCS6895AyTtX8IWeY=w1399-h979-iv1"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={carouselinner}>
				<img
					style={imgstyle}
					className="d-block w-100"
					src="https://lh3.google.com/u/0/d/19X1cc5eaMABjm7X6ZTWLYQkmAy7hAm0B=w1399-h979-iv1"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl
						consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={carouselinner}>
				<img
					style={imgstyle}
					className="d-block w-100"
					src="https://www.dropbox.com/scl/fi/4dtek05x5k3b2xhzeatsx/carrousel-longboard.webp?rlkey=b6zchnwtp1kak3ueh3iypwqga&dl=1"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl
						consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
