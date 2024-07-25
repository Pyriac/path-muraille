import logo from "../assets/images/path-muraille1.png";
import "../assets/styles/navbar.css";
export default function NavBar() {
  return (
    <nav>
      <img src={logo} alt="logo-path-muraille" />
      <h2>About Us</h2>
    </nav>
  );
}
