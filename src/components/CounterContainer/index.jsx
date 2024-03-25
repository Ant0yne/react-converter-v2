import Counter from "../Counter";

import "./counterContainer.css";

const CounterContainer = ({ counts, setCounts }) => {
	const addCounter = () => {
		if (counts.length < 4) {
			const tempCount = [...counts];
			tempCount.push(0);
			setCounts((counts = tempCount));
		}
	};
	return (
		<>
			<main>
				<div className="container">
					<button
						className={counts.length >= 4 ? "hidden" : ""}
						onClick={addCounter}>
						Add counter
					</button>

					<div id="counters">
						{counts.map((count, i) => {
							return (
								<div className="counter" key={i}>
									<Counter
										count={count}
										setCounts={setCounts}
										countNum={i}
										counts={counts}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</main>
		</>
	);
};

export default CounterContainer;
