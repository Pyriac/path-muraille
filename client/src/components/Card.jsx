/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/app.css";
import "../assets/styles/card.css";

import Coeur from "../assets/Vector.svg";
import FavoriteContext from "../contexts/FavoriteContext";

export default function Card({ data }) {
  const { addToFavorites } = useContext(FavoriteContext);
  const [heartStyle, setHeartStyle] = useState("heart");

  const handleClick = () => {
    if (heartStyle === "heart") {
      setHeartStyle("favorite");
      addToFavorites(data);
    } else {
      setHeartStyle("heart");
      // Optionally, you could implement removing from favorites here.
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
