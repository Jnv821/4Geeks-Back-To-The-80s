const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      token: null,
    },

    actions: {
      handleFavorite: (id, token) => {
        console.log(token)
        fetch(process.env.BACKEND_URL + '/api/favorites', {
          method: 'POST',
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({"id": id })
        })
        
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
      },
      addFavorite: (newFavorite) => {
        const store = getStore();
        setStore({ favorites: [...store.favorites, newFavorite] });
        console.log("Added to favorites!");
        console.log(newFavorite);
      },

      deleteFavorite: (item) => {
        const store = getStore();
        let newFav = store.favorites.filter((i) => item !== i);
        setStore({ favorites: newFav });
        console.log("Deleted from favorites!");
      },

      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "Aplication just loaded, synching the local session storage token"
        );
        if (token && token !== "" && token !== undefined)
          setStore({ token: token });
      },

      logout: () => {
        sessionStorage.removeItem("token");
        console.log("Login out");
        setStore({ token: null });
      },

      login: async (username, password) => {
        let requestOptions = {
          method: "POST",
          headers: {
            Content_Type: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        };

        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/token",
            requestOptions
          );
          if (resp.status !== 200) {
            alert("There was some error");
            return false;
          }

          const data = await resp.json();
          console.log("This came from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.log("There was an error login in");
        }
      },
    },
  };
};

export default getState;
