import Button from "../Button";

import "./counter.css";

const Counter = ({ count, setCounts, countNum, counts }) => {
	return (
		<>
			<Button
				setCounts={setCounts}
				type="sub"
				countNum={countNum}
				counts={counts}
				count={count}
			/>
			<h2>{count}</h2>
			<Button
				setCounts={setCounts}
				type="add"
				countNum={countNum}
				counts={counts}
				count={count}
			/>
			<p>test</p>
			<Button
				setCounts={setCounts}
				type="reset"
				countNum={countNum}
				counts={counts}
				count={count}
			/>
		</>
	);
};

export default Counter;
