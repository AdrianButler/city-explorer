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
			console.log(apiData);

			let lat = apiData.data[0].lat;
			let lon = apiData.data[0].lon;

			mapURL += `?key=${process.env.REACT_APP_LOCATIONIQKEY}&center=${lat},${lon}&zoom=${14}`;

			apiData.data[0].imageSrc = mapURL; // add the map png to the object of the apis first query

			this.setState(
				{
					apiData: apiData.data[0],
					apiErrorMessage: null
				});

		} catch (exception)
		{
			this.setState(
				{
					apiData: null,
					apiErrorMessage: exception.message
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
