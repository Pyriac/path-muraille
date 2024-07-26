import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useFavorites } from "../contexts/FavoriteContext";
import "../assets/styles/workdetail.css";
import Papa from "papaparse";
import Application from "../components/Application";
import Coeur from "../assets/Vector.svg";

export default function WorkDetail() {
  const jobsFromLoader = useLoaderData();
  const { id } = useParams();
  const { addToFavorites, removeFromFavorites, favoris } = useFavorites();

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
  const [heartStyle, setHeartStyle] = useState("heart");

  useEffect(() => {
    const isFavorite = favoris.some((fav) => fav.id === theJob.id);
    setHeartStyle(isFavorite ? "favorite" : "heart");
  }, [favoris, theJob.id]);

  const toggleApply = () => {
    setApply(!apply);
  };

  const handleKeyUp = (event) => {
    if (event.key === " ") {
      toggleApply(!apply);
    }
  };

  const handleFavoriteClick = () => {
    if (heartStyle === "heart") {
      setHeartStyle("favorite");
      addToFavorites(theJob);
    } else {
      setHeartStyle("heart");
      removeFromFavorites(theJob.id);
    }
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
            className={heartStyle}
            src={Coeur}
            alt="ajouter au favoris"
          />
        </div>
      </div>
      <section className="jobCard">
        <h2 className="job-titre">{theJob.job_details}</h2>
        <p className="details-p area">
          à {theJob.location} dans la province de {theJob.province}
        </p>
        <h3 className="missions-titre">Vos missions</h3>
        <ul>
          <li>{theJob.task_details1}</li>
          <li>{theJob.task_details2}</li>
          <li>{theJob.task_details3}</li>
          <li>{theJob.task_details4}</li>
        </ul>
        <h3 className="missions-titre">Profil recherché</h3>
        <ul>
          <li>{theJob.profil}</li>
          <li>{theJob.education}</li>
        </ul>
        <p className="details-p">
          Offre proposée par <span className="company">{theJob.company}</span>
        </p>
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
