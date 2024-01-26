import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		setWeatherData({
			temperature: response.data.temperature.current,
			coordinates: response.data.coordinates,
			wind: response.data.wind.speed,
			city: response.data.city,
			humidity: response.data.temperature.humidity,
			icon: response.data.condition.icon,
			description: response.data.condition.description,
			date: new Date(response.data.time * 1000),
			ready: true,
		});
	}

	function search() {
		const apiKey = "2ce1e1bf2899t12d0f6obada63d3f945";

		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search(city);
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								autoFocus="on"
								onChange={handleCityChange}
							/>
						</div>

						<div className="col-3">
							<input
								type="submit"
								value="Search"
								className="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} />
				<WeatherForecast coordinates={weatherData.coordinates} />
			</div>
		);
	} else {
		search();
		return (
			<Audio
				height="80"
				width="80"
				radius="9"
				color="pink"
				ariaLabel="loading"
				wrapperStyle
				wrapperClass
			/>
		);
	}
}
