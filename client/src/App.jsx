import PropTypes from "prop-types";
import "./assets/styles/app.css";
import Coeur from "./assets/Vector.svg";

const Card = ({ title, company, location, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>

      <div className="card-body">
        <p className="company">{company}</p>
        <p>{description}</p>
        <p>{location}</p>
      </div>
      <div className="card-footer">
        <button>Voir les détails</button>
        <img src={Coeur} alt="" />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const App = () => {
  const jobData = [
    {
      title: "CHARPENTIER H/F",
      company: "WoodWorksChina",
      location: "Badaling - Pékin",
      description: "Constructions en bois",
    },
    {
      title: "CHARPENTIER H/F",
      company: "WoodWorksChina",
      location: "Badaling - Pékin",
      description: "Constructions en bois",
    },
    {
      title: "CHARPENTIER H/F",
      company: "WoodWorksChina",
      location: "Badaling - Pékin",
      description: "Constructions en bois",
    },
  ];

  return (
    <div className="app">
      {jobData.map((job, index) => (
        <Card
          key={index}
          title={job.title}
          company={job.company}
          location={job.location}
          description={job.description}
        />
      ))}
    </div>
  );
};

export default App;
