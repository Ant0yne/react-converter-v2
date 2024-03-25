import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);

import Header from "./components/Header";
import CounterContainer from "./components/CounterContainer";
import Footer from "./components/Footer";

import "./App.css";

function App() {
	const [counts, setCounts] = useState([0]);

	return (
		<>
			<Header />
			<CounterContainer counts={counts} setCounts={setCounts} />
			<Footer />
		</>
	);
}

export default App;
