import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail() {

const {detailId} = useParams();

const [character, setCharacter] = useState({});

useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

    return (
        <div>
            <Link to="/home">HOME</Link>
         <h1>Name:{character?.name}</h1>
         <p>Status:{ character?.status}</p>
         <p>Specie:{character?.specie}</p>
         <p>Gender:{character?.gender}</p>
         <p>Origin:{character?.origin?.name}</p>
         <img src={character?.image} alt={character?.name}/>
        </div>
    )
};