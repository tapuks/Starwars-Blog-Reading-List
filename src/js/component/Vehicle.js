import Card from "./Card";
import React from "react";

const Vehicle = () => {
	return (
		<div className="row">
			<div className="col-3">
				<Card selection="vehicles" id={4} />
			</div>
			<div className="col-3">
				<Card selection="vehicles" id={7} />
			</div>
			<div className="col-3">
				<Card selection="vehicles" id={6} />
			</div>
			<div className="col-3">
				<Card selection="vehicles" id={8} />
			</div>
		</div>
	);
};

export default Vehicle;
