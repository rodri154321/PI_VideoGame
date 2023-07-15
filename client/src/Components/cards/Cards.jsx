
import Card from '../card/Card';

const Cards = (props) => {
   const {games} = props;
   return (
      <div>
         {games.map(juego => {
            return (
               <Card
                  name={juego.name}
                  genres={juego.genres}
                  image={juego.background_image}
                  id={juego.id}
                  key={juego.id}
               />
            )
         }) }
      </div>
   )
}

export default Cards;