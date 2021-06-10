import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Login = () => {
	return (
		<div>
			<form className="form-group">
				<div className="form-group mb-4">
					<label className="sr-only">Email</label>
					<input type="text" className="form-control" placeholder="Enter email" />
				</div>
				<div className="form-group  mb-4">
					<label className="sr-only">Password</label>
					<input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
				</div>

				<button type="submit" className="btn btn-primary mb-4">
					Confirm identity
				</button>
			</form>
		</div>
	);
};

export default Login;
