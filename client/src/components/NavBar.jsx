import logo from "../assets/images/path-muraille1.png";
import "../assets/styles/navbar.css";
export default function NavBar() {
  return (
    <nav>
      <div className="Navbar-left">
        <img className="Logo" src={logo} alt="logo-path-muraille" />
      </div>
      <div className="Navbar-right">
        <ul>
          <li className="About">About Us</li>
        </ul>
      </div>
    </nav>
  );
}
