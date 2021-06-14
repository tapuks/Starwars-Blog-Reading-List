import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Login = () => {
	const [user, setUser] = useState(null);
    const { actions } = useContext(Context);
    
	useEffect(() => {
        const token = actions.getToken();
		fetch("https://3000-blue-peacock-7qhq2n0k.ws-eu09.gitpod.io/login", {
			method: "GET",
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
            <span>{user.email}</span>
        </div>	
    )
};

export default Login;