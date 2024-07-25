import PropTypes from "prop-types";
import "../assets/styles/app.css";
import Coeur from "../assets/Vector.svg";

export default function Card(data) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{data.data.job}</h2>
      </div>

      <div className="card-body">
        <p className="company">{data.data.company}</p>
        <p>{data.data.job_details}</p>
        <p>{data.data.location}</p>
      </div>
      <div className="card-footer">
        <button>Voir les détails</button>
        <img src={Coeur} alt="ajouter au favoris" />
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
