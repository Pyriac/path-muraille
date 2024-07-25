import { useState } from "react";
import "../assets/styles/app.css";
import "../assets/styles/card.css";

import Coeur from "../assets/Vector.svg";

export default function Card(data) {
  const [heartStyle, setHeartStyle] = useState("heart");

  const handleClick = () => {
    if (heartStyle === "heart") {
      setHeartStyle("favorite");
    } else {
      setHeartStyle("heart");
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        <h2>{data.data.job.toUpperCase()}</h2>
      </div>

      <div className="card-body">
        <p className="company">{data.data.company}</p>
        <p className="details">{data.data.job_details}</p>
        <p>{data.data.location}</p>
      </div>
      <div className="card-footer">
        <button>Voir les détails</button>

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
