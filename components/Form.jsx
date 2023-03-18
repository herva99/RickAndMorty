import React from "react"
import { validate } from "./validation"
export default function Form({login}){

const [userData, setUserData]= React.useState({
    username: '', 
    password: '' 
})
const handleInputChange = (event)=>{
setUserData({
    ...userData,
    [event.target.name]: event.target.value
})
setErrors(validate({
    ...userData,
    [event.target.name]: event.target.value
}))
}
const [errors,setErrors] = React.useState({
    username: '', 
    password: '' 
})
const handleSubmit = (event)=>{
    event.preventDefault()
    login(userData)
}
    return(
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input name="username"
            placeholder="Escribe tu username"
            type="text"
            value={userData.username}
            onChange={handleInputChange}
            />
            {errors.username && <p>{errors.username}</p>}
    
            <label>Password:</label>
            <input name="password"
            placeholder="Escribe tu password"
            type="text"
            value={userData.password}
            onChange={handleInputChange}
            />
            {errors.password && <p>{errors.password}</p>}
            <p><button type="submit">LOGIN</button></p>
        </form>
    )
}