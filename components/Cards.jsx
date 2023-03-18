import Card from './Card';

 function Cards({characters, onClose}) {
   
   return (
      <div>
         {characters.map((character) => {
            return <Card  
            key={character.id}
            name= {character.name}
            species= {character.species}
            gender= {character.gender}
            image= {character.image}
            onClose={()=>onClose(character.id)}
            id={character.id}
            />
         })
      }
      </div>
   );
}
export default Cards;
