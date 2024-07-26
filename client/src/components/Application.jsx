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
        <button className="buttonClose1" type="submit" disabled={submitting}>
          X
        </button>
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
          <span>Email</span>
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
                  className="buttonClose2"
                  type="submit"
                  disabled={submitting}
                >
                  X
                </button>
                <p className="applySendMsg">
                  🚀 Votre candidature est bien envoyée.
                </p>
                <p className="applySendMsg">Surveillez votre boîte mail !</p>
                <button
                  className="buttonOrange"
                  type="submit"
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
