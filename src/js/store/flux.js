const getState = ({ getStore, getActions, setStore }) => {
	return {
		// se declaran las variables en Store
		store: {
			people: [],
			plantets: [],
			favorite: [],
			numbers: 2,
			apellidfos: { david: berdiell }
		},

		actions: {
			// Use getActions to call a function within a fuction

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
