import { useState } from "react";

import "../assets/styles/workdetail.css";

import Application from "../components/Application";

export default function WorkDetail() {
  const [apply, setApply] = useState(false);
  const toggleApply = () => {
    setApply(!apply);
  };
  const handleKeyUp = (event) => {
    if (event.key === " ") {
      toggleApply(!apply);
    }
  };

  return (
    <section>
      <h1>coucou from WorkDetail</h1>
      <button type="button" className="button" onClick={toggleApply}>
        Candidater
      </button>
      {apply && (
        <div className="search">
          <div
            className="overlay"
            role="button"
            tabIndex="0"
            onClick={toggleApply}
            onKeyUp={handleKeyUp}
          >
            <title>empty</title>
          </div>
          <div className="search-content">
            <Application />
          </div>
        </div>
      )}
    </section>
  );
}
