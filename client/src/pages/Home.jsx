import { useState, useEffect, useMemo } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Papa from "papaparse";
import Card from "../components/Card";
import "../assets/styles/home.css";
import "../assets/styles/application.css";

export default function Home() {
  const jobsFromLoader = useLoaderData();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Papa.parse(jobsFromLoader, {
      header: true,
      complete: (result) => {
        setData(result.data);
      },
      error: (error) => console.error(error),
    });
  }, [jobsFromLoader]);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    if (search) {
      navigate(`/jobs/${search}`);
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledArray = useMemo(() => shuffleArray([...data]), [data]);

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
