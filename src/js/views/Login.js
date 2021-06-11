import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Login = () => {
	const [email, SetEmail] = useState("");
	const [password, SetPassword] = useState("");
	function login() {
		fetch("https://3000-plum-orangutan-lz3vuuco.ws-eu09.gitpod.io/login", {
			method: "POST",
			body: JSON.stringify({
				email: email,
				password: password
			})
		}).then();
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
						value={email}
						onChange={e => SetEmail(e.target.value)}
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
						value={password}
						onChange={e => SetPassword(e.target.value)}
					/>
				</div>

				<button type="submit" className="btn btn-primary mb-4" onClick={SendFormulary}>
					Confirm identity
				</button>
			</form>
		</div>
	);
};

export default Login;
