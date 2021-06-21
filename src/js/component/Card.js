import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = props => {
	const { store, actions } = useContext(Context);
	const [result, setResult] = useState([]);

	return (
		<div className="card">
			<img
				className="card-img-top"
				src="https://c4.staticflickr.com/8/7481/27348202211_641e6dafe6.jpg"
				alt="Card image cap"
			/>
			<div className="card-body card-text-center">
				<h5 className="card-title">{result.name}</h5>
				<p className="card-text ">
					<li>
						{props.labelText1}: {props.text1}
					</li>
					<li>
						{props.labelText2}: {props.text2}
					</li>
					<li>
						{props.labelText3}: {props.text3}
					</li>
				</p>
				<div className="d-flex justify-content-between">
					<Link to={"/" + props.section + "/" + props.id} className="btn btn-outline-primary">
						Learn more!
					</Link>

					<a
						href="#"
						className="btn btn-outline-warning"
						onClick={() => {
							actions.addFavorite(props.name);
						}}>
						<i className="fas fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	id: PropTypes.number,
	section: PropTypes.string,
	name: PropTypes.string,
	labelText1: PropTypes.string,
	labelText2: PropTypes.string,
	labelText3: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string,
	text3: PropTypes.string
	// title: PropTypes.string,
	// text: PropTypes.string,
};

export default Card;
