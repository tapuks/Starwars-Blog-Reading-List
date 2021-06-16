const getState = ({ getStore, getActions, setStore }) => {
	return {
		// se declaran las variables en Store
		store: {
			people: [],
			plantets: [],
			favorite: [],
			token: ""
		},

		actions: {
			// Use getActions to call a function within a fuction
			removeToken: () => {
				setStore({ token: null });
				localStorage.removeItem("token");
			},
			loadSomeData: () => {
				console.log("hola");
				// fetch().then().then(data => setStore({ "foo": data.bar }))
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
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
