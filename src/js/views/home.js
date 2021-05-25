import React from "react";
import "../../styles/home.scss";
import Character from "../component/Character";
import Vehicle from "../component/Vehicle";

export const Home = () => (
	<div className="mt-5 container-fluid">
		<h1 className="text-danger">Characters</h1>
		<Character />
		<h1 className="text-danger">Vehicles</h1>
		<Vehicle />

		{/* <h1 className="text-danger">Planets</h1> */}
	</div>
);
