import Card from "./Card";
import React from "react";

const Planet = () => {
	return (
		<div className="row">
			<div className="col-3">
				<Card selection="planets" id={1} />
			</div>
			<div className="col-3">
				<Card selection="planets" id={1} />
			</div>
			{/* <div className="col-3">
				<Card selection="planets" id={1} />
			</div>
			<div className="col-3">
				<Card selection="planets" id={1} />
			</div> */}
		</div>
	);
};

export default Planet;
