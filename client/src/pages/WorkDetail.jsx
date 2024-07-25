import { useLoaderData } from "react-router-dom";

import Papa from "papaparse";
import "../assets/styles/workDetail.css";

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

  return (
    <>
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
          <h3>Vos missions</h3>
          <ul>
            <li>{data[indexTemporaire].task_details1}</li>
            <li>{data[indexTemporaire].task_details2}</li>
            <li>{data[indexTemporaire].task_details3}</li>
            <li>{data[indexTemporaire].task_details4}</li>
          </ul>
          <h3>Profil recherché</h3>
          <ul>
            <li>{data[indexTemporaire].profil}</li>
            <li>{data[indexTemporaire].education}</li>
          </ul>
          <h3>Employeur</h3>
          <p>{data[indexTemporaire].company}</p>
        </section>

        <h4>Image à afficher</h4>
        <button>Bouton à modifier</button>
      </section>
    </>
  );
}
