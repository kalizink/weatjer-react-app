import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	function handleResponse(response) {
		console.log(response.data);
	}

	let apiKey = "2ce1e1bf2899t12d0f6obada63d3f945";
	let lon = props.coordinates.longitude;
	let lat = props.coordinates.latitude;
	let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
	axios.get(apiUrl).then(handleResponse);

	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="WeatherForecast-day">Thu</div>
					<WeatherIcon code={"shower-rain-night"} size={36} />
					<div className="WeatherForecast-temperatures">
						<span className="WeatherForecast-temperature-max"> 19° </span>
						<span className="WeatherForecast-temperature-min">10°</span>
					</div>
				</div>
			</div>
		</div>
	);
}
