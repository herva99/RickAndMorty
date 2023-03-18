import { useState } from 'react';
import styles from './Cardss.module.css'


function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("")

   const handleChange = (event)=> {
      setCharacter(event.target.value)
   }

   return (
      <div >
       <input className={styles.Buscador} type='search' value={character} onChange={handleChange}/>
       <button className={styles.BuscadorAgregar} onClick={() => onSearch(character)}>AGREGAR</button>
      </div>
   );
}
export default SearchBar;