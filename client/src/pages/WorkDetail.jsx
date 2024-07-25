import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import "../assets/styles/workdetail.css";

import Papa from "papaparse";

import Application from "../components/Application";
import Coeur from "../assets/Vector.svg";

export default function WorkDetail() {
  const jobsFromLoader = useLoaderData();
  const { id } = useParams();
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
  const [heartStyle, setHeartStyle] = useState("heart");

  const handleClick = () => {
    if (heartStyle === "heart") {
      setHeartStyle("favorite");
    } else {
      setHeartStyle("heart");
    }
  };
  return (
    <section className="workTitle">
      <div>
        <h1>
          {theJob.job.toUpperCase()} {theJob.sex.toUpperCase()}
        </h1>
        <img
          onClick={handleClick}
          className={heartStyle}
          src={Coeur}
          alt="ajouter au favoris"
        />
      </div>

      <section className="jobCard">
        <h2>{theJob.job_details}</h2>
        <h3>Vos missions :</h3>
        <ul>
          <li>{theJob.task_details1}</li>
          <li>{theJob.task_details2}</li>
          <li>{theJob.task_details3}</li>
          <li>{theJob.task_details4}</li>
        </ul>
        <h3>Profil recherché :</h3>
        <ul>
          <li>{theJob.profil}</li>
          <li>{theJob.education}</li>
        </ul>
        <h3>Employeur :</h3>
        <p>{theJob.company}</p>
        <p>{theJob.location}</p>
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
