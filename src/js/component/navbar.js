import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					className="img-title"
					src="https://www.teleadhesivo.com/es/img/as556-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-borde.jpg"
				/>
			</Link>
			<div className="ml-auto">
				<button className="btn btn-primary">Favorites</button>
			</div>
		</nav>
	);
};
