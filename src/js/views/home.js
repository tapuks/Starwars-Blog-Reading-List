import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Card from "../component/Card";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadingData("planets");
		actions.loadingData("people");
	}, []);
	return (
		<div className="mt-5 container-fluid">
			<h1 className="text-danger">Characters</h1>
			<div className="row">
				{store.people.map((character, index) => {
					return (
						<Card
							key={index}
							name={character.name}
							labelText1={"Gender: "}
							labelText2={"Eye Color: "}
							labelText3={"Hair Color: "}
							text1={character.gender}
							text2={character.eye_color}
							text3={character.hair_color}
							id={index}
							section="character"
						/>
					);
				})}
			</div>

			<h1 className="mt-5 text-danger">Planets</h1>
			<div className="row">
				{store.planets.map((planets, index) => {
					return (
						<Card
							key={index}
							name={planets.name}
							labelText1={"Population: "}
							labelText2={"Terrain: "}
							text1={planets.population}
							text2={planets.terrain}
							id={index}
							section="planets"
						/>
					);
				})}
			</div>
		</div>
	);
};
