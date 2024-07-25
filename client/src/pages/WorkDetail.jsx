import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import "../assets/styles/workdetail.css";

import Papa from "papaparse";

import Application from "../components/Application";

export default function WorkDetail() {
  const jobsFromLoader = useLoaderData();

  const parse = () =>
    Papa.parse(jobsFromLoader, {
      header: true,
      complete: (result) => result,
      error: (error) => console.error(error),
    });

  const { data } = parse();
  const indexTemporaire = 0;

  const [apply, setApply] = useState(false);
  const toggleApply = () => {
    setApply(!apply);
  };
  const handleKeyUp = (event) => {
    if (event.key === " ") {
      toggleApply(!apply);
    }
  };

  return (
    <section className="workTitle">
      <div>
        <h1>
          {data[indexTemporaire].job.toUpperCase()}{" "}
          {data[indexTemporaire].sex.toUpperCase()}
        </h1>
        <button>Coeur</button>
      </div>

      <section className="jobCard">
        <h2>{data[indexTemporaire].job_details}</h2>
        <h3>Vos missions :</h3>
        <ul>
          <li>{data[indexTemporaire].task_details1}</li>
          <li>{data[indexTemporaire].task_details2}</li>
          <li>{data[indexTemporaire].task_details3}</li>
          <li>{data[indexTemporaire].task_details4}</li>
        </ul>
        <h3>Profil recherché :</h3>
        <ul>
          <li>{data[indexTemporaire].profil}</li>
          <li>{data[indexTemporaire].education}</li>
        </ul>
        <h3>Employeur :</h3>
        <p>{data[indexTemporaire].company}</p>
        <p>{data[indexTemporaire].location}</p>
      </section>

      <img
        className="workImage"
        src={data[indexTemporaire].image}
        alt={data[indexTemporaire].job}
      />
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
