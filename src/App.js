import "./App.css";
import Footer from "./Footer.js";
import Weather from "./Weather.js";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather />
				<Footer />
			</div>
		</div>
	);
}
