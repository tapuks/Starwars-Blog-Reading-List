import React from "react";
import "../../styles/home.scss";
import Card from "../component/Card";

export const Home = () => (
	<div className="text-center mt-5">
		<h1 className="text-danger">Characters</h1>
		<Card />
		{/* <h1 className="text-danger">Planets</h1> */}
	</div>
);
