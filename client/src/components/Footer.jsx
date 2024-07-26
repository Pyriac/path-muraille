import picto1 from "../assets/images/picto1.svg";

import "../assets/styles/footer.css";

export default function NavBar() {
  return (
    <footer>
      <p>PathMuraille © tous droits réservés</p>
      <img src={picto1} alt="muraille" />
    </footer>
  );
}
