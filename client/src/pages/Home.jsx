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
      <h1>coucou from Home</h1>
      <h2>{data[0].Sexe}</h2>
    </section>
  );
}
