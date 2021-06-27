import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

const Info = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	const [Info, setInfo] = useState("");
	useEffect(() => {
		if (params.section == "character") {
			setInfo(store.people[params.id]);
			console.log(Info, "character");
		} else {
			setInfo(store.planets[params.id]);
			console.log(Info, "planets");
		}
	}, []);

	console.log(params.id);
	return (
		<div>
			<div className="row">
				<div className="col-1" />
				<div className="col-5">
					<img
						className="card-img-top"
						src="https://i.pinimg.com/originals/fe/e6/c1/fee6c1fc5fba37827fd45f00df7ee4a1.jpg"
						alt="Card image cap"
					/>
				</div>
				<div className="col-5 text-detail">
					<h1>{Info.name}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat Lorem ipsum
						dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
				<div className="col-1"> </div>
			</div>
			<hr className="horizontal-line" />
			<div className="color-red">{Info.name}</div>
		</div>
	);
};

export default Info;
