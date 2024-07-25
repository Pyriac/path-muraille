import "../assets/styles/application.css";

export default function Application() {
  const submitting = false;

  return (
    <section>
      <form className="form">
        <button
          className="buttonClose"
          type="button"
          disabled={submitting}
        ></button>
        <p>
          Votre candidature est bien envoyée ! <br />
          Surveillez votre boîte mail !
        </p>
        <button className="buttonOrange" type="button" disabled={submitting}>
          Fermer
        </button>
      </form>
    </section>
  );
}
