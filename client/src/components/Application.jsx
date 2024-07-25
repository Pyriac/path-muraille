import "../assets/styles/application.css";

export default function Application() {
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
        <button className="buttonOrange" type="submit" disabled={submitting}>
          Envoyer ma candidature
        </button>
      </form>
    </section>
  );
}
