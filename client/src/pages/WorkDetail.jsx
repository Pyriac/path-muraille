import { useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoriteContext";
import "../assets/styles/workdetail.css";
import Papa from "papaparse";
import Application from "../components/Application";
import Coeur from "../assets/Vector.svg";

export default function WorkDetail() {
  const jobsFromLoader = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToFavorites } = useFavorites();

  const jobId = Number(id - 1);

  const parse = () =>
    Papa.parse(jobsFromLoader, {
      header: true,
      complete: (result) => result,
      error: (error) => console.error(error),
    });

  const { data } = parse();
  const theJob = data[jobId];

  const [apply, setApply] = useState(false);
  const toggleApply = () => {
    setApply(!apply);
  };
  const handleKeyUp = (event) => {
    if (event.key === " ") {
      toggleApply(!apply);
    }
  };

  const handleFavoriteClick = () => {
    addToFavorites(theJob);
    navigate("/favoris");
  };

  return (
    <section className="workTitle">
      <div className="titreFicheMétier">
        <h1 className="titre-metiers">
          {theJob.job.toUpperCase()} {theJob.sex.toUpperCase()}
        </h1>
        <div className="heart-metier">
          <img
            onClick={handleFavoriteClick}
            className="heart"
            src={Coeur}
            alt="ajouter au favoris"
          />
        </div>
      </div>
      <section className="jobCard">
        <h2 className="job-titre">{theJob.job_details}</h2>
        <h3 className="missions-titre">Vos missions :</h3>
        <ul>
          <li>{theJob.task_details1}</li>
          <li>{theJob.task_details2}</li>
          <li>{theJob.task_details3}</li>
          <li>{theJob.task_details4}</li>
        </ul>
        <h3 className="missions-titre">Profil recherché :</h3>
        <ul>
          <li>{theJob.profil}</li>
          <li>{theJob.education}</li>
        </ul>
        <h3 className="missions-titre">Employeur :</h3>
        <p className="details-p">{theJob.company}</p>
        <p className="details-p">{theJob.location}</p>
      </section>

      <img className="workImage" src={theJob.image} alt={theJob.job} />
      <button className="button" onClick={toggleApply}>
        Candidater
      </button>
      {apply && (
        <div className="search">
          <div
            className="overlay"
            role="button"
            tabIndex="0"
            onClick={toggleApply}
            onKeyUp={handleKeyUp}
          >
            <title>empty</title>
          </div>
          <div className="search-content">
            <Application />
          </div>
        </div>
      )}
    </section>
  );
}
