import React from "react";
import "../../styles/home.scss";
import Card from "../component/Card";

export const Home = () => (
	<div className="mt-5">
		<h1 className="text-danger">Characters</h1>

		{/* <div className="col-3 mt-5">
				<Card
					title="Luke Skywalker"
					image="https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg"
					button="Learn more!"
				/>
			</div> */}
		<div className="d-flex">
			<Card
				title="Luke Skywalker"
				image="https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg"
				button="Learn more!"
			/>
			<Card
				title="Luke Skywalker"
				image="https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg"
				button="Learn more!"
			/>
			<Card
				title="Luke Skywalker"
				image="https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg"
				button="Learn more!"
			/>
			<Card
				title="Luke Skywalker"
				image="https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg"
				button="Learn more!"
			/>
		</div>

		{/* <h1 className="text-danger">Planets</h1> */}
	</div>
);
