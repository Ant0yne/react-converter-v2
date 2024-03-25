import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.css";

const Header = () => {
	return (
		<>
			<header>
				<div>
					<div id="title">
						<FontAwesomeIcon icon="stopwatch" />
						<h1>React Counters</h1>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
