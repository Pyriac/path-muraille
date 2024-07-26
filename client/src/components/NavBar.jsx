import logo from "../assets/images/path-muraille1.png";
import "../assets/styles/navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div className="Navbar-left">
        <Link to="/">
          <img className="Logo" src={logo} alt="logo-path-muraille" />
        </Link>
      </div>
      <div className="Navbar-right">
        <ul>
          <Link to="/about">
            <li className="About">About Us</li>
          </Link>
          <Link to="/favoris">
            <li>Favoris</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
