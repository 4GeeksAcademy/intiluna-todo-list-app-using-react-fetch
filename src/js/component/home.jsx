import React from "react";
import Form from "../component/form.jsx"
import Cuenta from "../component/cuenta.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-initial">
			<h1 className="text-center mt-5"> TODOS</h1>
			<div className="macro">
				<div className="input">
					<Cuenta/>
					
					</div>
				
			</div>

		</div>
	);
};

export default Home;
