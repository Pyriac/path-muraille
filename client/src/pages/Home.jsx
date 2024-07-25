import { useLoaderData } from "react-router-dom";

import Papa from "papaparse";

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
      <input type="text" />
      <button>Rechercher</button>
      <h2>LES OFFRES DU MOMENT</h2>
    </section>
  );
}
