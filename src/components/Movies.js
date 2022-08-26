import React from "react";
import {Carousel} from "react-bootstrap";
import Movie from "./Movie";

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
						   <Movie key={index} movie={movie}/>
					   )
					})
				}
			</Carousel>
		);
	}

}
