import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Profile = () => {
	const [user, setUser] = useState(null);
	const { actions } = useContext(Context);

	useEffect(() => {
		const token = actions.getToken();
		fetch("https://3000-purple-wombat-t7g3e0ij.ws-eu08.gitpod.io/login", {
			method: "POST",
			// le decimos que mande un json
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				token: token
			})
		})
			.then(response => response.json())
			.then(responseJson => {
				setUser(responseJson);
			});
	}, []);

	return (
		<div className="jumbotron">
			<h1>Profile</h1>
			{user ? <span>{user.email}</span> : "Loading..."}
		</div>
	);
};

export default Profile;
