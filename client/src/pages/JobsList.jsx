import { useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";

import Card from "../components/Card";
import Papa from "papaparse";

import "../assets/styles/jobslist.css";

export default function JobsList() {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const jobsFromLoader = useLoaderData();
  const [ReSearch, setSearch] = useState("");
  const { search } = useParams();
  const navigate = useNavigate();

  const parse = () =>
    Papa.parse(jobsFromLoader, {
      header: true,
      complete: (result) => result,
      error: (error) => console.error(error),
    });

  const { data } = parse();

  const handleSearchClick = () => {
    ReSearch ? navigate(`/jobs/${ReSearch}`) : null;
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchFilter = data.filter((work) =>
    work.job.toLowerCase().startsWith(search.toLowerCase()) ? work : null
  );

  const ProvinceFilter = searchFilter.filter((work) =>
    selectedProvince === "" ? work : work.province === selectedProvince
  );

  const LocationFilter = ProvinceFilter.filter((work) =>
    selectedLocation === "" ? work : work.location === selectedLocation
  );

  const result = LocationFilter.length;

  const pluralSingularResults = () => (result < 2 ? " résultat" : " résultats");

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
      <p className="FiltrerPar">Filtrer par :</p>
      <form>
        <label className="label-from-jobs-list" htmlFor="Filter-select">
          <p>Région</p>
          <select
            className="province-select"
            name="province-select"
            id="province-select"
            onChange={(event) => setSelectedProvince(event.target.value)}
          >
            <option value="">---</option>
            <option value="Gansu">Gansu</option>
            <option value="Beijing">Beijing</option>
            <option value="Hebei">Hebei</option>
            <option value="Tianjin">Tianjin</option>
            <option value="Pékin">Pékin</option>
          </select>
          <p>Ville</p>
          <select
            className="ville-select"
            name="location-select"
            id="location-select"
            onChange={(event) => setSelectedLocation(event.target.value)}
          >
            <option value="">---</option>
            <option value="Badaling">Badaling</option>
            <option value="Beijing">Beijing</option>
            <option value="Gubeikou">Gubeikou</option>
            <option value="Huanghuacheng">Huanghuacheng</option>
            <option value="Jiayuguan">Jiayuguan</option>
            <option value="Jinshanling">Jinshanling</option>
            <option value="Juyongguan">Juyongguan</option>
            <option value="Mutianyu">Mutianyu</option>
            <option value="Shanhaiguan">Shanhaiguan</option>
            <option value="Simatai">Simatai</option>
          </select>
        </label>
      </form>
      {result === 0 ? null : (
        <div className="sentenceResult">
          <p>
            {`${result}
            ${pluralSingularResults()}`}
          </p>
        </div>
      )}
      <div className="Card_Moment">
        {LocationFilter.length ? (
          LocationFilter.map((work) => <Card key={work.id} data={work} />)
        ) : (
          <p>Oups, aucun résultat 🕵️‍♂️</p>
        )}
      </div>
    </section>
  );
}
