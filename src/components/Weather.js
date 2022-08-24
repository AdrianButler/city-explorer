import React from 'react';
import {Card, Tab, Tabs} from "react-bootstrap";

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
								<Tab title={value.date} eventKey={value.date} className="text-white">
									<p>{value.description}</p>
								</Tab>

						    )
						})
					}
				</Tabs>
			</>
		);
	}
}

export default Weather;
