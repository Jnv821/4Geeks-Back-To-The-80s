import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // trsaigo todos los datos y funciones definidas en appContext.js

const CardCharacter = (props) => {
  const [url, setUrl] = useState(props.url);
  const [char, setChar] = useState({});
  const [uid, setUid] = useState();
  const [favorite, setFavorite] = useState(false);
  const { store, actions } = useContext(Context);

  // el objeto personaje de esta card se llama char
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setChar(data.result.properties);
        setUid(data.result.uid);
      })
      .catch((err) => console.error(err));
  }, [url]);

  if (char !== {}) {
    return (
      <div className="card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/26/26789.png"
          className="card-img-top"
          alt="alt"
        />
        <div className="card-body">
          <p className="card-text">
            <div>
              <p>
                <b>Thriller</b>
              </p>
            </div>
          </p>
          <p className="card-text">
            <div>
              <p>Michael Jackson</p>
            </div>
          </p>
          <p className="card-text">
            <div>
              <p>1982</p>
            </div>
          </p>
          <div>
            <Link
              className="btn btn-outline-primary learnMoreButton"
              to={`/single/people/${uid}`}
            >
              Details
            </Link>
            <button
              className={`btn btn-outline-primary likeButton ${
                favorite ? "selected" : null
              }`}
              onClick={(ev) => {
                if (favorite === false) {
                  actions.addFavorite(char.name);
                  setFavorite(true);
                } else if (favorite === true) {
                  actions.deleteFavorite(char.name);
                  setFavorite(false);
                }
              }}
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default CardCharacter;
