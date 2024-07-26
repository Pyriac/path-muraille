import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import Papa from "papaparse";
import Card from "../components/Card";
import "../assets/styles/home.css";

import "../assets/styles/application.css";

export default function Home() {
  const jobsFromLoader = useLoaderData();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const parse = () =>
    Papa.parse(jobsFromLoader, {
      header: true,
      complete: (result) => result,
      error: (error) => console.error(error),
    });

  const { data } = parse();

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    search ? navigate(`/jobs/${search}`) : null;
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledArray = shuffleArray(data);

  console.info(data);

  return (
    <section>
      <div className="Search_bar">
        <input
          type="search"
          className="searchInput"
          placeholder="Intitulé du poste"
          onChange={handleChangeSearch}
        />
        <button type="button" onClick={handleSearchClick}>
          Rechercher
        </button>
      </div>
      <h2 className="Offre_titre">LES OFFRES DU MOMENT</h2>
      <div className="Card_Moment">
        {shuffledArray.slice(0, 10).map((work) => (
          <Card key={work.id} data={work} />
        ))}
      </div>
    </section>
  );
}
