import React from "react";
import { Carousel } from "react-bootstrap";

const Showcase = () => {
	return (
		<div>
			<Carousel>
				<Carousel.Item
					interval={1000}
					style={{
						height: "60vh",
					}}
				>
					<img
						className="d-block w-100 h-100"
						src="https://www.billboard.com/wp-content/uploads/media/nipsey-hussle-smart-store-2017-billboard-1548.jpg"
						alt="First slide"
					/>
					<Carousel.Caption
						style={{ textShadow: "2px 2px 4px #000000" }}
					>
						<h3>WE HONOR THE PEOPLE THAT STAYED DOWN</h3>
						<p>Nipsey Hussle</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500} style={{ height: "60vh" }}>
					<img
						className="d-block w-100 h-100"
						src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?cs=srgb&dl=pexels-mnz-1639729.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption
						style={{ textShadow: "2px 2px 4px #000000" }}
					>
						<h3>TRUE STYLE NEVER DIES</h3>
						<p>Quality never goes out of style.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item style={{ height: "60vh" }}>
					<img
						className="d-block w-100 h-100"
						src="https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?cs=srgb&dl=pexels-markus-winkler-3812433.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption
						style={{ textShadow: "2px 2px 4px #000000" }}
					>
						<h3>REFINE YOUR IMAGE</h3>
						<p>
							It’s hard to be nice if you don’t feel comfortable.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item style={{ height: "60vh", opacity: "0.6" }}>
					<img
						className="d-block w-100 h-100"
						src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?cs=srgb&dl=pexels-shattha-pilabut-135620.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption
						style={{ textShadow: "2px 2px 4px #000000" }}
					>
						<h3>STYLE IS OUR STRONG SUIT</h3>
						<p>Style for the leading lady in you.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Showcase;
