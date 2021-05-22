import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card text-center">
			<img className="card-img-top" src={props.image} alt="Card image cap" />
			<div className="card-body card-text-center">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text d-flex justify-content:center">{props.text}</p>
				<a href="#" className="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string
};

export default Card;
