import React from 'react';
import {Card} from "react-bootstrap";

class LocationInfo extends React.Component
{
	render()
	{
		return (
			<>
				{
					!this.props.apiData ? null : // if apiData doesn't exist then don't render
						<Card className="text-center">
							<Card.Header>{this.props.apiData.display_name}</Card.Header>
							<Card.Body>
								<Card.Img variant="top" src=""/>
							</Card.Body>
							<Card.Footer className="text-muted">
								Latitude: {this.props.apiData.lat}
								Longitude: {this.props.apiData.lon}
							</Card.Footer>
						</Card>
				}
			</>
		);
	}
}

export default LocationInfo;
