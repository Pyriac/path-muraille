import logo from "../assets/images/path-muraille1.png";
import "../assets/styles/navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img className="Logo" src={logo} alt="logo-path-muraille" />
      </Link>
      <Link to="/about">
        <h2>About Us</h2>
      </Link>
    </nav>
  );
}
