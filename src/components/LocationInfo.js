import React from 'react';
import {Card, Image, Tab, Tabs} from "react-bootstrap";
import "./LocationInfo.css";
import Weather from "./Weather";
import {Movies} from "./Movies";

class LocationInfo extends React.Component
{
	render()
	{
		return (
			<>
				{
					!this.props.apiData ? null : // if apiData doesn't exist then don't render
						<Card className="text-center location-card bg-dark text-info">
							<Card.Header>
								<Card.Title>{this.props.apiData.display_name}</Card.Title>
							</Card.Header>
							<Card.Body>
								<Tabs defaultActiveKey="Map" className="mb-3" fill>
									<Tab title="Map" eventKey="Map" >
										<Image src={this.props.apiData.imageSrc} fluid/>
									</Tab>
									<Tab title="Weather" eventKey="Weather">
										<Weather forecasts={this.props.apiData.weather}/>
									</Tab>
									<Tab title="Movies" eventKey="Movies">
										<Movies movies={this.props.apiData.movies}/>
									</Tab>
								</Tabs>
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
