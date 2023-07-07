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
					src="https://www.dropbox.com/scl/fi/m6oak01gier9he0zy9g97/carrousel-surf.webp?rlkey=11mbis8kegi9p567ienw7nt7w&dl=1"
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
					src="https://www.dropbox.com/scl/fi/hp51bluc1r2rze8r907ol/carrousel-snowboard.jpg?rlkey=a1hj6s7sr2wjpybf444coj5y1&dl=1"
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
					src="https://www.dropbox.com/scl/fi/bsd48f3p72rw89p1dz2b2/carrousel-skate.webp?rlkey=5fyma4ick16qftnsbtqubzqdu&dl=1"
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
