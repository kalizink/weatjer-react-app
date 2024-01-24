import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });

	function handleResponse(response) {
		setWeatherData({
			temperature: response.data.temperature.current,
			wind: response.data.wind.speed,
			city: response.data.city,
			humidity: response.data.temperature.humidity,
			icon: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
			description: response.data.condition.description,
			date: `Wednesday 07:00`,
			ready: true,
		});
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								autoFocus="on"
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
				<h1>{weatherData.city}</h1>
				<ul>
					<li>{weatherData.date}</li>
					<li className="text-capitalize">{weatherData.description}</li>
				</ul>
				<div className="row">
					<div className="col-6">
						<div className="clearfix mt-3">
							<img
								src={weatherData.icon}
								title="weather icon"
								alt={weatherData.description}
							/>

							<span className="temperature">
								{Math.round(weatherData.temperature)}
							</span>
							<span className="unit">°C</span>
						</div>
					</div>
					<div className="col-6">
						<ul>
							<li>Humidity: {Math.round(weatherData.humidity)}%</li>
							<li>Wind: {Math.round(weatherData.wind)}km/h</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "2ce1e1bf2899t12d0f6obada63d3f945";

		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return (
			<Audio
				height="80"
				width="80"
				radius="9"
				color="green"
				ariaLabel="loading"
				wrapperStyle
				wrapperClass
			/>
		);
	}
}
