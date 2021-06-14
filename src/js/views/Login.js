import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Login = () => {
	const { actions } = useContext(Context);
	const [email, SetEmail] = useState("");
	const [password, SetPassword] = useState("");
	function login() {
		fetch("https://3000-blue-peacock-7qhq2n0k.ws-eu09.gitpod.io/login", {
			method: "POST",
			// le decimos que mande un json
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);
				actions.setToken(responseJson.token);
			});
	}
	return (
		<div>
			<form className="form-group">
				<div className="form-group mb-4">
					<label className="sr-only">Email</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
						onChange={event => SetEmail(event.target.value)}
					/>
					{console.log(email)}
				</div>
				<div className="form-group  mb-4">
					<label className="sr-only">Password</label>
					<input
						type="password"
						className="form-control"
						id="inputPassword2"
						placeholder="Password"
						onChange={event => SetPassword(event.target.value)}
					/>
				</div>

				<button type="submit" className="btn btn-primary mb-4" onClick={login}>
					Confirm identity
				</button>
			</form>
		</div>
	);
};

export default Login;
