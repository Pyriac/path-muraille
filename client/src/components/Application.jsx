import { useState } from "react";

import "../assets/styles/application.css";

export default function Application() {
  const [send, setSend] = useState(false);

  const toggleSend = () => {
    setSend(!send);
  };

  const submitting = false;

  return (
    <section>
      <form className="form">
        <div className="flex">
          <label>
            <span>Prénom</span>
            <input
              required=""
              placeholder=""
              type="text"
              className="inputApply"
            />
          </label>

          <label>
            <span>Nom</span>
            <input
              required=""
              placeholder=""
              type="text"
              className="inputApply"
            />
          </label>
        </div>
        <label>
          <span>email</span>
          <input
            required=""
            placeholder=""
            type="text"
            className="inputApply"
          />
        </label>
        <label>
          <span>CV</span>
          <input
            required=""
            type="file"
            placeholder=""
            className="inputApply"
          />
        </label>
        <label>
          <span>Message</span>
          <textarea
            required=""
            rows="3"
            placeholder=""
            className="input01"
          ></textarea>
        </label>
        <button className="buttonOrange" type="button" onClick={toggleSend}>
          Envoyer ma candidature
        </button>
        {send && (
          <div className="search">
            <div
              className="overlay"
              role="button"
              tabIndex="0"
              onClick={toggleSend}
            >
              <title>empty</title>
            </div>
            <div className="search-content">
              <form className="form2">
                <button
                  className="buttonClose"
                  type="button"
                  disabled={submitting}
                >
                  X
                </button>
                <p>
                  Votre candidature est bien envoyée.
                  <br />
                  Surveillez votre boîte mail !
                </p>
                <button
                  className="buttonOrange"
                  type="button"
                  disabled={submitting}
                >
                  Fermer
                </button>
              </form>
            </div>
          </div>
        )}
      </form>
    </section>
  );
}
