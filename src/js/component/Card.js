import React, { useState } from "react";
import PropTypes from "prop-types";

const Card = props => {
	const [result, setResult] = useState([]);
	const url = "https://www.swapi.tech/api/" + props.selection + "/" + props.id.toString();

	fetch(url)
		.then(res => res.json())
		.then(json => setResult(json.result.properties))
		.catch(error => console.log(error));

	return (
         
		<div className="card">
			<img
				className="card-img-top"
				src="https://c4.staticflickr.com/8/7481/27348202211_641e6dafe6.jpg"
				alt="Card image cap"
			/>
          {props.selection = "people" ?  
			<div className="card-body card-text-center">
				<h5 className="card-title">{result.name}</h5> 
				<p className="card-text ">
					<li>Gender: {result.gender}</li>
					<li>Hair-Color: {result.hair_color} </li>
					<li>Eye-Color: {result.eye_color}</li>
				</p>
            :22} 
				<div className="d-flex justify-content-between">
					<a href="#" className="btn btn-outline-primary">
						Learn more!
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
	id: PropTypes.number,
	selection: PropTypes.string
	// image: PropTypes.string
	// title: PropTypes.string,
	// text: PropTypes.string,
};

export default Card;
