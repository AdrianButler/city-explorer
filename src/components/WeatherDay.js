import React from 'react';

class WeatherDay extends React.Component
{
	render()
	{
		return (
				<p>{this.props.description}</p>
		);
	}
}

export default WeatherDay;
