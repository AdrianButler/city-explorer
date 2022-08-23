import React from 'react';
import {Card} from "react-bootstrap";
import "./LocationInfo.css";

class LocationInfo extends React.Component
{
	render()
	{
		return (
			<>
				{
					!this.props.apiData ? null : // if apiData doesn't exist then don't render
						<Card className="text-center location-card bg-dark text-info">
							<Card.Header>{this.props.apiData.display_name}</Card.Header>
							<Card.Body>
								<Card.Img variant="top" src={this.props.apiData.imageSrc}/>
							</Card.Body>
							<Card.Footer>
								Latitude: {this.props.apiData.lat} -
								Longitude: {this.props.apiData.lon}
							</Card.Footer>
						</Card>
				}
			</>
		);
	}
}

export default LocationInfo;
