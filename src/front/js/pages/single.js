import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [features, setFeatures] = useState({});

  // fetch to album
  // evaluar si es necesario hacer fetch de nuevo o podemos enviar esta info por props
  useEffect(() => {
    const url = `https://www.swapi.tech/api/${params.type}/${params.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data.result.properties);
      })
      .catch((err) => console.error(err));
  }, [params]);

  const explicacion =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem s\
	accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis s\
	et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur s\
	aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro s\
	quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi s\
	tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum s\
	exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure.";

  if (features !== {}) {
    return (
      <div className="text-center mt-5">
        VISTA DEL ALBUM SINGLE CON TODA LA INFO
      </div>
    );
  } else {
    return <div className="text-center mt-5">Loading...</div>;
  }
};

Single.propTypes = {
  match: PropTypes.object,
};
