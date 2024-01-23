import React from "react";

export default function Footer() {
	return (
		<footer>
			This project was coded by {""}
			<a
				href="https://github.com/kalizink"
				target="blank"
				title="Kali Zink GitHub">
				Kali Zink
			</a>{" "}
			{""}
			and is{" "}
			<a
				href="https://github.com/kalizink/weatjer-react-app.git"
				title="View code"
				target="blank">
				open sourced on GitHub
			</a>
			{""} and hosted on{" "}
			<a
				href="https://weather-react-app-kz.netlify.app/"
				target="blank"
				title="Open Netlify">
				Netlify
			</a>
		</footer>
	);
}
