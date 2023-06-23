import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5"> >TODOS</h1>
			<div className="macro">
				<div className="input">my input</div>
				<div className="display">my list of todos</div>
			</div>

		</div>
	);
};

export default Home;
