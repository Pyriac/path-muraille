import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

import "./assets/styles/app.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default App;
