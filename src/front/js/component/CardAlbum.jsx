import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // trsaigo todos los datos y funciones definidas en appContext.js

const CardAlbum = (props) => {
  const [album, setAlbum] = useState(props.album);
  const [favorite, setFavorite] = useState(false);
  const { store, actions } = useContext(Context);

  useEffect(() => {
  if(props.favorites){
    
    const favorited = props.favorites.find((fav) => {
      return fav.id === album.id
    })
    
    if(favorited == true){
      setFavorite(true);
    } else {
      //actions.deleteFavorite(album.name);
      setFavorite(false);
    }
    console.log("The props:", props)
  }}, [props])

  useEffect(() => {
    console.log("This is the setState for favorites:", favorite)
  }, [favorite])

  if (album) {
    return (
      <div className="card">
        <div className="album-cover">
          <button
            className={`btn btn-outline-primary likeButton ${
              favorite ? "selected" : null
            }`}
            onClick={(ev) => {
              console.log("click")
              if(props.handleRemove){
                props.handleRemove(album.id)
              }
              actions.handleFavorite(album.id, store.token)
              actions.getFavorites(store.token)
              if(!favorite){
                //actions.addFavorite(album.name);
                setFavorite((prev) => true);
              } else {
                actions.deleteFavorite(album.name);
                setFavorite((prev) => false);
              }
            }}
          >
            ♡
          </button>
          <Link
            to={`/albums/${album.id}`}
            className="btn btn-outline-primary learnMoreButton"
          >
            <img src={album.album_cover} className="card-img-top" alt="alt" />
          </Link>
        </div>
        <div className="card-body">
          <p className="card-text">
            <b>{album.title}</b>
          </p>
          <p className="card-text">
              {album.author}
          </p>
          <p className="card-text">
              {album.release_year}
          </p>
        </div>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default CardAlbum;
