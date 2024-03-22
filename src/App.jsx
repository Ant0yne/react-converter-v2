import { useState } from "react";

import CounterContainer from "./components/CounterContainer";

import "./App.css";

function App() {
	const [counts, setCounts] = useState([0]);

	return (
		<>
			<CounterContainer counts={counts} setCounts={setCounts} />
		</>
	);
}

export default App;
