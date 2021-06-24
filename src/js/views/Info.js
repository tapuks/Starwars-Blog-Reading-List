import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Info = () => {
	const { id } = useParams();
	const { section } = useParams();
	const { store, actions } = useContext(Context);

	console.log(id);
	return (
		<div className="row">
			<div className="col-6">
				<img
					className="card-img-top"
					src="https://c4.staticflickr.com/8/7481/27348202211_641e6dafe6.jpg"
					alt="Card image cap"
				/>
			</div>
			<div className="col-6" />
			Holaa {id}
			<span>{section}</span>
		</div>
	);
};

export default Info;
