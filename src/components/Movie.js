import React from "react";
import {Carousel} from "react-bootstrap";

import"./movie.css";

class Movie extends React.Component
{
	render()
	{
		return (
			<Carousel.Item className={this.props.className}> {/* Class names is a prop bootstrap passes*/}
			<img
				className="d-block w-100" src={this.props.movie.imageURL}
				alt={this.props.movie.title}/>
			<Carousel.Caption className="opacity">
				<h3>{this.props.movie.title}</h3>
				<p>{this.props.movie.overview}</p>
			</Carousel.Caption>
			</Carousel.Item>
		);
	}
}

export default Movie;
