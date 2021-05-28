import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = props => {
	const { store, actions } = useContext(Context);
	const [result, setResult] = useState([]);
	const url = "https://www.swapi.tech/api/" + props.selection + "/" + props.id.toString();

	fetch(url)
		.then(res => res.json())
		.then(json => setResult(json.result.properties))
		.catch(error => console.log(error));

	if (props.selection == "people") {
		// Character
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
						<li>Gender: {result.gender}</li>
						<li>Hair-Color: {result.hair_color} </li>
						<li>Eye-Color: {result.eye_color}</li>
					</p>
					<div className="d-flex justify-content-between">
						<a href="#" className="btn btn-outline-primary">
							{/* onClick={() => history.push("/" + props.section + "/" + props.id)}> */}
							Learn more!
						</a>
						<a
							href="#"
							className="btn btn-outline-warning"
							onClick={() => {
								actions.addFavorite(result.name);
							}}>
							<i className="fas fa-heart" />
						</a>
					</div>
				</div>
			</div>
		);
	} else if (props.selection == "vehicles") {
		// Vehicles
		return (
			<div className="card">
				<img
					className="card-img-top"
					src="https://db-api.elestimulo.com/app/uploads/2019/10/1266066.png"
					alt="Card image vehicle"
				/>
				<div className="card-body card-text-center">
					<h5 className="card-title">{result.name}</h5>
					<p className="card-text ">
						<li>Model: {result.model}</li>
						<li>passengers: {result.passengers} </li>
						<li>vehicle_class: {result.vehicle_class}</li>
					</p>
					<div className="d-flex justify-content-between">
						<a href="#" className="btn btn-outline-primary">
							Learn more!
						</a>
						<a
							href="#"
							className="btn btn-outline-warning"
							onClick={() => {
								actions.addFavorite(result.name);
							}}>
							<i className="fas fa-heart" />
						</a>
					</div>
				</div>
			</div>
		);
	} else if (props.selection == "planets") {
		// Planets
		return (
			<div className="card">
				<img
					className="card-img-top"
					src="https://prod-api.theobjective.com/app/uploads/2016/06/Planetas-976x612.jpeg"
					alt="Card image planets"
				/>
				<div className="card-body card-text-center">
					<h5 className="card-title">{result.name}</h5>
					<p className="card-text ">
						<li>Population: {result.population}</li>
						<li>Terrain: {result.terrain} </li>
					</p>
					<div className="d-flex justify-content-between">
						<a
							// onClick={() => props.history.push("/Info")}
							className="btn btn-outline-primary">
							Learn more!
						</a>
						<a
							href="#"
							className="btn btn-outline-warning"
							onClick={() => {
								actions.addFavorite(result.name);
							}}>
							<i className="fas fa-heart" />
						</a>
					</div>
				</div>
			</div>
		);
	}
};

Card.propTypes = {
	id: PropTypes.number,
	selection: PropTypes.string
	// image: PropTypes.string
	// title: PropTypes.string,
	// text: PropTypes.string,
};

export default Card;
