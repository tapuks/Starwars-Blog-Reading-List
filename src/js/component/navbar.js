import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					className="img-title"
					src="https://www.teleadhesivo.com/es/img/as556-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-borde.jpg"
				/>
			</Link>
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Dropdown Button
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{store.favorite.length > 0
						? store.favorite.map((element, index) => {
								return (
									<Dropdown.Item href="#" key={index}>
										{element}
									</Dropdown.Item>
								);
						  })
						: ""}
				</Dropdown.Menu>
				{/* <Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</Dropdown.Menu> */}
			</Dropdown>
		</nav>
	);
};
