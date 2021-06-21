import { string } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		// se declaran las variables en Store
		store: {
			people: [],
			planets: [],
			favorite: [],
			token: ""
		},

		actions: {
			loadingData: str => {
				fetch("https://swapi.dev/api/" + str + "/")
					.then(res => res.json())
					.then(data => setStore({ [str]: data.results }))
					.catch(error => console.log(error));
			},
			// Use getActions to call a function within a fuction
			removeToken: () => {
				setStore({ token: null });
				localStorage.removeItem("token");
			},

			addFavorite: item => {
				const store = getStore();
				const validate = store.favorite.includes(item);

				if (store.favorite == [] || !validate) {
					setStore({ favorite: [...store.favorite, item] });
				}
				// Para llamar otra funcion de actions: getActions().loadSomeData()
			},

			deleteFavorite: id => {
				const store = getStore();
				const updatedList = [...store.favorite];
				updatedList.splice(id, 1);
				setStore({ favorite: [...updatedList] });
			},

			setToken: token => {
				localStorage.setItem("token", token);
				setStore({ token: token });
			},

			getToken: () => {
				const store = getStore();
				if (store.token) {
					return store.token;
				} else {
					return localStorage.getItem("token");
				}
			}
		}
	};
};

export default getState;
