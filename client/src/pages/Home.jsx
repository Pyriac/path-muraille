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

  console.info(data);

  return (
    <section>
      <h1>coucou from Home</h1>
      <h2>{data[0].sex}</h2>
      <div className="Search_bar">
        <input type="text" className="searchInput" />
        <button>Rechercher</button>
      </div>
      <h2 className="Offre_titre">LES OFFRES DU MOMENT</h2>
      {data.slice(0, 10).map((work) => (
        <Card key={work.id} />
      ))}
    </section>
  );
}
