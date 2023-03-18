import styles from './Cardss.module.css'
import { Link } from 'react-router-dom';

 function Card({name, species, gender, image, onClose, id}) {
   return (
      <div  className={styles.divDemascards}>
         <p><button className={styles.boton} onClick={onClose}>X</button></p>
         <img className={styles.imagen} src={image} alt={name} />
         <Link to={`/detail/${id}`} >
         <h2 className={styles.nombre}>{name}</h2>
         </Link>
         <h2 className={styles.species}> {species}</h2>
         <h2 className={styles.genero}>{gender}</h2>
      </div>
   );
}
export default Card;