import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const logout = () => {
		actions.removeToken();
		history.push("/login");
	};
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					className="img-title"
					src="https://www.teleadhesivo.com/es/img/as556-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-borde.jpg"
				/>
			</Link>
			<div className="d-flex">
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Dropdown Button
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{store.favorite.length > 0
							? store.favorite.map((element, index) => {
									return (
										<Dropdown.Item key={index}>
											{element}
											<i
												id="delete"
												className="far fa-trash-alt pointer trash"
												onClick={() => {
													actions.deleteFavorite({ index });
												}}
											/>
										</Dropdown.Item>
									);
							  })
							: ""}
					</Dropdown.Menu>
				</Dropdown>
				<button onClick={logout}>{store.token != null && store.token != "" ? "logOut" : "Login"}</button>
			</div>
		</nav>
	);
};
