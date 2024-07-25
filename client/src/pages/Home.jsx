import { useLoaderData } from "react-router-dom";

import Papa from "papaparse";
import Card from "../components/Card";
import "../assets/styles/home.css";

import "../assets/styles/application.css";

export default function Home() {
  const jobsFromLoader = useLoaderData();

  const parse = () =>
    Papa.parse(jobsFromLoader, {
      header: true,
      complete: (result) => result,
      error: (error) => console.error(error),
    });

  const { data } = parse();

  return (
    <section>
      <div className="Search_bar">
        <input
          type="text"
          className="searchInput"
          placeholder="Tapez votre recherche ici"
        />
        <button>Rechercher</button>
      </div>
      <h2 className="Offre_titre">LES OFFRES DU MOMENT</h2>
      <div className="Card_Moment">
        {data.slice(0, 10).map((work) => (
          <Card key={work.id} data={work} />
        ))}
      </div>
    </section>
  );
}
