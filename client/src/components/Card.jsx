import "../assets/styles/app.css";
import "../assets/styles/card.css";
import Coeur from "../assets/Vector.svg";

export default function Card(data) {
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
        <img className="heart" src={Coeur} alt="ajouter au favoris" />
      </div>
    </div>
  );
}
