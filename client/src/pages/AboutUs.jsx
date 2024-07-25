import "../assets/styles/aboutUs.css";
import China from "../assets/images/About_us_China.svg";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="NOS-VALEURS">NOS VALEURS</h1>
      <img src={China} alt="China" className="China_About" />
      <div className="values-container">
        <div className="values">
          <p>Des plages de travail d’un maximum de 48h d’affilée.</p>
          <p>Une rémunération en repas à hauteur d’un repas par jour.</p>
        </div>
      </div>
    </div>
  );
}
