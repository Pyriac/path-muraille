import { useContext } from "react";
import FavoriteContext from "../contexts/FavoriteContext";
import Card from "../components/Card";

export default function Favoris() {
  const { favoris } = useContext(FavoriteContext);

  return (
    <div className="wishpage">
      <h3>Liste de souhaits</h3>
      {favoris.length > 0 ? (
        <div className="Card_Moment">
          {favoris.map((fav, index) => (
            <Card key={index} data={fav} isFavorite />
          ))}
        </div>
      ) : (
        <p>Aucun élément dans votre liste de souhaits.</p>
      )}
    </div>
  );
}
