import yingyang from "../assets/images/yingyang.svg";

import "../assets/styles/footer.css";

export default function NavBar() {
  return (
    <footer>
      <p>PathMuraille © tous droits réservés</p>
      <img src={yingyang} alt="muraille" />
    </footer>
  );
}
