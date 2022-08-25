import React from 'react';
import {Card, Tab, Tabs} from "react-bootstrap";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component
{
	render()
	{
		return (
			<>
				<Card.Title></Card.Title>
				<Tabs defaultActiveKey={this.props.forecasts[0].date} fill>
					{
						this.props.forecasts.map((value) =>
						{
							return (
								<Tab title={value.date} eventKey={value.date} className="text-white" key={value.date}>
									<WeatherDay description={value.description}/>
								</Tab>);
						})
					}
				</Tabs>
			</>
		);
	}
}

export default Weather;
