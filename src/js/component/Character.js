import Card from "../component/Card";
import React from "react";

const Character = () => {
	return (
		<div className="row">
			<div className="col-3">
				<Card selection="people" id={1} />
			</div>
			<div className="col-3">
				<Card selection="people" id={2} />
			</div>
			{/* <div className="col-3">
				<Card selection="people" id={3} />
			</div>
			<div className="col-3">
				<Card selection="people" id={4} />
			</div> */}
		</div>
	);
};

export default Character;
