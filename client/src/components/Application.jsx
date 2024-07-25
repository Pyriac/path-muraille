import "../assets/styles/application.css";

export default function Application() {
  return (
    <section>
      <form className="form">
        <div className="flex">
          <label>
            <input required="" placeholder="" type="text" className="input" />
            <span>Prénom</span>
          </label>

          <label>
            <input required="" placeholder="" type="text" className="input" />
            <span>Nom</span>
          </label>
        </div>
        <label>
          <input required="" placeholder="" type="text" className="input" />
          <span>email</span>
        </label>
        <label>
          <input required="" type="" placeholder="" className="input" />
          <span>CV</span>
        </label>
        <label>
          <textarea
            required=""
            rows="3"
            placeholder=""
            className="input01"
          ></textarea>
          <span>Message</span>
        </label>
        <button className="buttonOrange" type="submit">
          Envoyer ma candidature
        </button>
      </form>
    </section>
  );
}
