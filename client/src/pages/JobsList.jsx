import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import Card from "../components/Card";
import Papa from "papaparse";

export default function JobsList() {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const jobsFromLoader = useLoaderData();
  const { search } = useParams();

  const parse = () =>
    Papa.parse(jobsFromLoader, {
      header: true,
      complete: (result) => result,
      error: (error) => console.error(error),
    });

  const { data } = parse();
  console.info(data);
  console.info(search);

  const searchFilter = data.filter((work) =>
    // search.toLowerCase() ===
    work.job.toLowerCase().startsWith(search.toLowerCase()) ? work : null
  );

  const ProvinceFilter = searchFilter.filter((work) =>
    selectedProvince === "" ? work : work.province === selectedProvince
  );

  const LocationFilter = ProvinceFilter.filter((work) =>
    selectedLocation === "" ? work : work.location === selectedLocation
  );

  return (
    <>
      <form>
        <label htmlFor="Filter-select">
          Filtrer par :<p>Région</p>
          <select
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
      <div className="Card_Moment">
        {LocationFilter.length ? (
          LocationFilter.map((work) => <Card key={work.id} data={work} />)
        ) : (
          <p>Oups, aucun résultat 🕵️‍♂️</p>
        )}
      </div>
    </>
  );
}
