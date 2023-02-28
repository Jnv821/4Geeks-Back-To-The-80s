import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // trsaigo todos los datos y funciones definidas en appContext.js

const CardAlbum = (props) => {
  const [album, setAlbum] = useState(props.album);
  const [favorite, setFavorite] = useState(false);
  const { store, actions } = useContext(Context);

  // fetch to album
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setChar(data.result.properties);
  //       setUid(data.result.uid);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  if (album !== {}) {
    return (
      <div className="card">
        <div className="album-cover">
          <button
            className={`btn btn-outline-primary likeButton ${
              favorite ? "selected" : null
            }`}
            // onClick={(ev) => {
            //   if (favorite === false) {
            //     actions.addFavorite(char.name);
            //     setFavorite(true);
            //   } else if (favorite === true) {
            //     actions.deleteFavorite(char.name);
            //     setFavorite(false);
            //   }
            // }}
          >
            ♡
          </button>
          <Link
            to={`/single/${album.id}`}
            className="btn btn-outline-primary learnMoreButton"
          >
            <img src={album.cover} className="card-img-top" alt="alt" />
          </Link>
        </div>
        <div className="card-body">
          <p className="card-text">
            <div>
              <p>
                <b>{album.album}</b>
              </p>
            </div>
          </p>
          <p className="card-text">
            <div>
              <p>{album.artist}</p>
            </div>
          </p>
          <p className="card-text">
            <div>
              <p>{album.year}</p>
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
