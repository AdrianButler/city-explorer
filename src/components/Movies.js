import React from "react";
import {Carousel} from "react-bootstrap";

export class Movies extends React.Component
{
	render()
	{
		return (
			<Carousel slide={false}>
				{
					this.props.movies.map((movie, index) =>
					{
					   return (
						   <Carousel.Item key={index}>
							   <img
								   className="d-block w-100" src={movie.imageURL}
								   alt={movie.title}/>
							   <Carousel.Caption>
								   <h3>{movie.title}</h3>
								   <p>{movie.overview}</p>
							   </Carousel.Caption>
						   </Carousel.Item>
					   )
					})
				}
			</Carousel>
		);
	}

}
