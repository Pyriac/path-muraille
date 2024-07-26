import "../assets/styles/aboutUs.css";
import China from "../assets/images/About_us_China.svg";
import star_yellow from "../assets/images/star_yellow.svg";
import star_black from "../assets/images/star_black.svg";

export default function AboutUs() {
  return (
    <section>
      <div className="about-us-container">
        <h1 className="NOS-VALEURS">NOS VALEURS</h1>
        <img src={China} alt="China" className="China_About" />
        <div className="values-container">
          <div className="values">
            <p>○ Des plages de travail d’un maximum de 48h d’affilée.</p>
            <p>○ Une rémunération en repas à hauteur d’un repas par jour.</p>
            <p>
              ○ AfterWork sur le Rooftop de la muraille tous les jeudis soirs.
            </p>
            <p>
              ○ Garderie pour vos enfants directement sur votre lieu de travail.
            </p>
            <p>
              ○ Pour tout autre besoin votre contremaitre sera disponible pour
              échanger avec vous.
            </p>
          </div>
        </div>
      </div>
      <h2 className="NOS-VALEURS">Avis</h2>
      <div className="values-rating">
        <div className="rating-details">
          <p className="starsRating">
            <img src={star_yellow} alt="yellow star" />
            <img src={star_yellow} alt="yellow star" />
            <img src={star_yellow} alt="yellow star" />
            <img src={star_yellow} alt="yellow star" />
            <img src={star_black} alt="black star" />
          </p>
        </div>
        <p className="advice">Fantastique !</p>
        <p>
          Travailler 48 heures d&apos;affilées, c&apos;est génial surtout
          qu&apos;on a le droit de manger une fois par jour. Je recommande
          vivement !{" "}
        </p>
        <p className="adviceName">John Doe - 18 septembre 199 av.J-C</p>
      </div>
      <div className="values-rating">
        <div className="rating-details">
          <p className="starsRating">
            <img src={star_yellow} alt="yellow star" />
            <img src={star_black} alt="black star" />
            <img src={star_black} alt="black star" />
            <img src={star_black} alt="black star" />
            <img src={star_black} alt="black star" />
          </p>
        </div>
        <p className="advice">A fuir</p>
        <p>
          De mon temps on travaillait 72 heures d&apos;affilées.. Le monde ne
          tourne plus carré, il ne faudra pas s&apos;étonner que la muraille
          mette 17 siècle à être construite.
        </p>
        <p className="adviceName">Jim Jon - 3 novembre 198 av.J-C</p>
      </div>
      <div className="values-rating">
        <div className="rating-details">
          <p className="starsRating">
            <img src={star_yellow} alt="yellow star" />
            <img src={star_yellow} alt="yellow star" />
            <img src={star_yellow} alt="yellow star" />
            <img src={star_black} alt="black star" />
            <img src={star_black} alt="black star" />
          </p>
        </div>
        <p className="advice">Mouais</p>
        <p>
          On mange bien et on est bien payé. Mais j&apos;ai perdu 18 collègues
          cette semaine dans la chute d&apos;un bout de la muraille. Quand
          est-ce que les conditions de sécurité vont évoluer ?
        </p>
        <p className="adviceName">Qing Qong - 3 janvier 196 av.J-C</p>
      </div>
    </section>
  );
}
