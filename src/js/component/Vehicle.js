import Card from "./Card";
import React from "react";

const Vehicle = () => {
	return (
		<div className="row">
			<div className="col-3">
				<Card selection="vehicles" id={1} />
			</div>
			<div className="col-3">
				<Card selection="vehicles" id={2} />
			</div>
			<div className="col-3">
				<Card selection="vehicles" id={3} />
			</div>
			<div className="col-3">
				<Card selection="vehicles" id={4} />
			</div>
		</div>
	);
};

export default Vehicle;
