import Counter from "../Counter";

import "./counterContainer.css";

const CounterContainer = ({ counts, setCounts }) => {
	const addCounter = () => {
		if (counts.length <= 3) {
			const tempCount = [...counts];
			tempCount.push(0);
			setCounts((counts = tempCount));
		}
	};
	return (
		<>
			<main>
				<button onClick={addCounter}>Add counter</button>
				{counts.map((count, i) => {
					return (
						<div key={i}>
							<Counter
								count={count}
								setCounts={setCounts}
								countNum={i}
								counts={counts}
							/>
						</div>
					);
				})}
			</main>
		</>
	);
};

export default CounterContainer;
