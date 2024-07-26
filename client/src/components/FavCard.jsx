// import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/app.css";
import "../assets/styles/card.css";

// import Coeur from "../assets/Vector.svg";

export default function Card(tools) {
  //   const [heartStyle, setHeartStyle] = useState("heart");
  const { job, favorite, setFavorite } = tools;
  console.info(job);

  //   const handleClick = () => {
  //     if (heartStyle === "heart") {
  //       setHeartStyle("favorite");
  //     } else {
  //       setHeartStyle("heart");
  //     }
  //   };

  if (!Array.isArray(favorite)) {
    return null;
  }

  const isFavorite = favorite.some((favJob) => favJob.id === job.id);

  const addToFavorite = () => {
    if (isFavorite) {
      setFavorite((prevFavorites) =>
        prevFavorites.filter((favJob) => favJob.id !== job.id)
      );
    } else {
      setFavorite((prevFavorites) => [...prevFavorites, job]);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>{job.job.toUpperCase()}</h2>
      </div>

      <div className="card-body">
        <p className="company">{job.company}</p>
        <p className="details">{job.job_details}</p>
        <p>{job.location}</p>
      </div>
      <div className="card-footer">
        <Link to={`/jobs/details/${job.id}`}>
          <button>Voir les détails</button>
        </Link>
        {/* <img
          onClick={handleClick}
          className={heartStyle}
          src={Coeur}
          alt="ajouter au favoris"
        /> */}
        <button type="button" onClick={addToFavorite}>
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
