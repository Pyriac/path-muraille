import { useLoaderData } from "react-router-dom";

import Papa from "papaparse";

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
      <section>
        <form className="form">
          <div className="flex">
            <label>
              <input required="" placeholder="" type="text" className="input" />
              <span>Prénom</span>
            </label>

            <label>
              <input required="" placeholder="" type="text" className="input" />
              <span>Nom</span>
            </label>
          </div>
          <label>
            <input required="" placeholder="" type="text" className="input" />
            <span>email</span>
          </label>
          <label>
            <input required="" type="" placeholder="" className="input" />
            <span>CV</span>
          </label>
          <label>
            <textarea
              required=""
              rows="3"
              placeholder=""
              className="input01"
            ></textarea>
            <span>Message</span>
          </label>
          <button className="buttonOrange" type="submit">
            Envoyer ma candidature
          </button>
        </form>
      </section>
    </section>
  );
}
