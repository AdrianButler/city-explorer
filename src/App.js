import {Component} from "react";
import LocationInfo from "./components/LocationInfo";
import axios from "axios";
import {Button, Form} from "react-bootstrap";
import "./App.css";

class App extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			apiData: null, // holds {}
			apiErrorMessage: null, // holds ""
			locationQuery: null // holds ""
		};
	}

	handleLocationQuery = (event) => // everytime the input changes update the state with the change
	{
		event.preventDefault();
		this.setState(
			{
				apiData: this.state.apiData,
				locationQuery: event.target.value
			});
	};

	handleLocationSearch = async (event) => // on submit, call api and update state with response
	{
		event.preventDefault();

		let locationURL = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQKEY}&q=${this.state.locationQuery}&format=json`;
		let mapURL = "https://maps.locationiq.com/v3/staticmap";
		let apiData;
		try
		{
			apiData = await axios.get(locationURL);
			apiData = apiData.data[0];

			let lat = apiData.lat;
			let lon = apiData.lon;

			mapURL += `?key=${process.env.REACT_APP_LOCATIONIQKEY}&center=${lat},${lon}&zoom=${14}`;

			apiData.imageSrc = mapURL; // add the map png to the object of the apis first query

			// Custom api request


			let locationName = apiData.display_name;
			if (locationName.includes(","))
			{
				locationName = locationName.substring(0, locationName.indexOf(','));
			}

			let customAPIURL =`${process.env.REACT_APP_SERVER}/weather?searchQuery=${locationName}`;
			let customAPIResponse = await axios.get(customAPIURL);

			apiData.weather = customAPIResponse.data;

			console.log(apiData.weather);

			this.setState(
				{
					apiData: apiData,
					apiErrorMessage: null
				});

		} catch (exception)
		{
			let errorMessage;
			if (exception.config.url.includes(process.env.REACT_APP_SERVER))
			{
				errorMessage = "Custom API failed";
			}
			else
			{
				errorMessage = exception.message;
			}

			this.setState(
				{
					apiData: null,
					apiErrorMessage: errorMessage
				});
		}
	};

	preventSubmit = (event) =>
	{
		if (event.keyCode === 13)
		{
			event.preventDefault();
			return false;
		}
	};

	render()
	{
		return (
			<>
				<Form>
					<Form.Control type="text" onInput={this.handleLocationQuery} onKeyDown={this.preventSubmit}
					              placeholder="Enter Location"/>
					<Button onClick={this.handleLocationSearch}>Explore</Button>
				</Form>

				{ // if an error message exists print it
					this.state.apiErrorMessage
						?
						<p style={{color: "red"}}>{this.state.apiErrorMessage}</p>
						:
						<LocationInfo apiData={this.state.apiData}/>
				}

			</>
		);
	}
}

export default App;
