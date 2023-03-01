import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // trsaigo todos los datos y funciones definidas en appContext.js

const CardAlbum = (props) => {
  const [album, setAlbum] = useState(props.album);
  const [favorite, setFavorite] = useState(false);
  const { store, actions } = useContext(Context);

  if (album !== {}) {
    return (
      <div className="card">
        <div className="album-cover">
          <button
            className={`btn btn-outline-primary likeButton ${
              favorite ? "selected" : null
            }`}
            onClick={(ev) => {
              if (favorite === false) {
                actions.addFavorite(album.name);
                setFavorite(true);
              } else if (favorite === true) {
                actions.deleteFavorite(album.name);
                setFavorite(false);
              }
            }}
          >
            ♡
          </button>
          <Link
            to={`/single/${album.id}`}
            className="btn btn-outline-primary learnMoreButton"
          >
            <img src={album.album_cover} className="card-img-top" alt="alt" />
          </Link>
        </div>
        <div className="card-body">
          <p className="card-text">
            <div>
              <p>
                <b>{album.title}</b>
              </p>
            </div>
          </p>
          <p className="card-text">
            <div>
              <p>{album.author}</p>
            </div>
          </p>
          <p className="card-text">
            <div>
              <p>{album.release_year}</p>
            </div>
          </p>
        </div>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default CardAlbum;
