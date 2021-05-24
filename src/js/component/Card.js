import React, { useState } from "react";
import PropTypes from "prop-types";

const Card = props => {
	const [result, setResult] = useState([]);

	fetch("https://www.swapi.tech/api/people/1")
		.then(res => res.json())
		.then(json => setResult(json.result.properties))

		.catch(error => console.log(error));

	return (
		<div className="card">
			<img className="card-img-top" src={props.image} alt="Card image cap" />
			<div className="card-body card-text-center">
				<h5 className="card-title">{result.name}</h5>
				<p className="card-text ">
					<li>Gender: {result.gender}</li>
					<li>Hair-Color: {result.hair_color} </li>
					<li>Eye-Color: {result.eye_color}</li>
				</p>

				<div className="d-flex justify-content-between">
					<a href="#" className="btn btn-outline-primary">
						{props.button}
					</a>
					<a href="#" className="btn btn-outline-warning">
						<i className="fas fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	// title: PropTypes.string,
	// text: PropTypes.string,
	button: PropTypes.string
};

export default Card;
