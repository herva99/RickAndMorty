import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form'
//import style from './Cardss.module.css'
//background-image: url(https://www.xtrafondos.com/wallpapers/estrellas-en-el-espacio-3907.jpg);
function App () {

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const[access, setAccess]= useState("false")

  let username = "hernanvazquez722@gmail.com"
  let password= "hernan72"

  const login =(userData)=>{
    if(userData.username === username && userData.password ===  password){
      setAccess(true);
      navigate("/home");
  }
}

useEffect(() => {
  !access && navigate('/');
}, [access]);
  const onSearch = (character) =>  {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
}

  const onClose = (id)=>{
    setCharacters(
      characters.filter(character => character.id !== id)
    ) 
  }
  const location = useLocation();
  
  return (
    <div className='App' style={{ padding: '25px' }}>
     {location.pathname === "/" ? <Form login={login}/> : <Nav onSearch={onSearch}/> }    
      <Routes>
        <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App;
