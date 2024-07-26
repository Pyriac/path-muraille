/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/app.css";
import "../assets/styles/card.css";

import Coeur from "../assets/Vector.svg";
import FavoriteContext from "../contexts/FavoriteContext";

export default function Card({ data, isFavorite }) {
  const { addToFavorites, removeFromFavorites } = useContext(FavoriteContext);
  const [heartStyle, setHeartStyle] = useState(
    isFavorite ? "favorite" : "heart"
  );

  const handleClick = () => {
    if (heartStyle === "heart") {
      setHeartStyle("favorite");
      addToFavorites(data);
    } else {
      setHeartStyle("heart");
      removeFromFavorites(data.id);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>{data.job.toUpperCase()}</h2>
      </div>

      <div className="card-body">
        <p className="company">{data.company}</p>
        <p className="details">{data.job_details}</p>
        <p>{data.location}</p>
      </div>
      <div className="card-footer">
        <Link to={`/jobs/details/${data.id}`}>
          <button>Voir les détails</button>
        </Link>
        <img
          onClick={handleClick}
          className={heartStyle}
          src={Coeur}
          alt="ajouter au favoris"
        />
      </div>
    </div>
  );
}
